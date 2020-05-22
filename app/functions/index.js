// Dependência do Cloud Functions
const functions = require('firebase-functions');
// Dependência do SDK Admin
const admin = require('firebase-admin');
// Dependência do Middleware Express
const express = require('express');
// Dependência do Body Parser
const bodyParser = require('body-parser');
// Dependencia do CORS
const cors = require('cors');
// Instância SDK Admin, buscando params de acesso integrado ao Functions
admin.initializeApp(functions.config().firebase);
// Instância Firestore DB
const db = admin.firestore();
// Instância Aplicação com Express
const app = express();
// Injeção de Biblioteca para interpretação de Json ao Express e dados via url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// Injeção de Biblioteca para Transição de dados no EndPoint
app.use(cors({origin:true}));
// Instância Colecction no DB para cadastro de Pessoa Física
const pf = db.collection('pessoaFisica');
// Instância Colecction no DB para cadastro de Pessoa Jurídica
const pj = db.collection('pessoaJuridica');
// Instância Colecction no DB para cadastro de Produtos/Vendas;
const produtos = db.collection('produtos');
// Instância Colecction no DB para cadastro de Serviços;
const servicos = db.collection('servicos');
// Busca Todos os Usuários do Aplicativo
app.get('/getAll', async (req, res) => {
    try{
        // cria as listas vazias
        let listPessoaFisica = [];
        let listPessoaJuridica = [];
        // busca a lista de pessoas físicas no cadastro
        let getAllPessoaFisica = await pf.get()
        // Após Buscar realiza tarefa com os dados
        .then(snapshot => {
            // para cada item do banco, adiciona a lista de pessoa Fisica
            snapshot.forEach(doc => {
                listPessoaFisica.push(doc.data())
            })
            //retorna a lista de pessoa fisica com sucesso
            return res.status(200).send(listPessoaFisica)
        });
        let getAllPessoaJuridica = await pj.get().then(snapshot => {
            snapshot.forEach(doc => {
                listPessoaJuridica.push(doc.data());
            })
            return res.status(200).send(listPessoaJuridica)
        });
    }
    catch(err){
        res.status(500).send(err.message);
    }
});
app.get('/getProductsCategory', async (req, res) =>{
    try{
        let categoriasProdutos = [];
        let getProductCategories = await produtos.get()
        .then(snapshot => {
            snapshot.forEach(doc =>{
                categoriasProdutos.push(doc.data())
            })
            return res.status(200).send(categoriasProdutos)
        })
    }
    catch(err){
    res.status(500).send(err.message);
    }
});
app.get('/getServicesCategory', async (req, res) =>{
    try{
        let categoriasServicos = [];
        let getServicesCategory = await produtos.get().then(snapshot => {
            snapshot.forEach(doc =>{
                categoriasServicos.push(doc.data())
            })
            return res.status(200).send(categoriasServicos)
        })
    }
    catch(err){
    res.status(500).send(err.message);
    }
});
// Criar Pessoa Fisica, requisição assincrona
app.post('/createPessoaFisica', async (req, res) => {
    try{
        // Aplicando os dados na forma de objeto, a partir da requisição
        let pessoaFisica = {
            tipoPessoa: "pf",
            cpf: req.body.cpf,
            nome: req.body.nome,
            telefone: req.body.telefone,
            email: req.body.email,
 //           resumo: req.body.resumoProfissional,
            senha: req.body.senha
        }; 
        // mensagem de sucesso
        let response = res.send(200).send(`Usuário com cpf:${pessoaFisica.cpf} cadastrado com sucesso`);
        // método que cria o documento na coleção
        let createpessoaFisica = await pf.doc(pessoaFisica.cpf)
        .set(pessoaFisica)
        .then(response); 
    }
    catch(err){
        res.status(500).send(err.message);
    }
});
// Mesmo método anterior, que cadastra pessoa Juridica
app.post('/createPessoaJuridica', async (req, res) => {
    try{
      
        let pessoaJuridica = {
            tipoPessoa: "pj",
            cnpj: req.body.cnpj,
            nome: req.body.nome,
            telefone: req.body.telefone,
            email: req.body.email,
 //         resumo: req.body.resumoProfissional,
            senha: req.body.senha
        }; 
        let response = res.send(200).send(`Usuário com CNPJ:${pessoaJuridica.cnpj} cadastrado com sucesso`);
        let createPessoaJuridica = await pj.doc(pessoaJuridica.cnpj)
        .set(pessoaJuridica)
        .then(response); 
    }
    catch(err){
        res.status(500).send(err.message);
    }
});
// Adiciona endereço á uma conta já cadastrada
app.put('/addAdress', async (req, res) => {
    try{
        // Busca o tipo de pessoa da conta
        let tipoPessoa = req.body.tipoPessoa;
        // Trata os dados de localização
        let localizacao = {
            endereco: req.body.endereco,
            numero: req.body.endNumero,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            uf: req.body.uf,
            cep: req.body.cep
        }; 
        let response = res.status(200).send("Endereço cadastrado com Sucesso!")
        // If de pessoa Fisica
        if(tipoPessoa === 'pf'){
            let cpf = req.body.cpf;
            let addAddres = await pf.doc(cpf).update(localizacao).then(response);
        }
        // If de pessoa Jurídica
        if(tipoPessoa === 'pj'){
            let cnpj = req.body.cnpj;
            let addAddress = await pj.doc(cnpj)
            .update(localizacao).then(response);
        }
    }
    catch(err){
        res.status(400).send(err.message);
    }

});
// Adicionar Categoria de Vendas ao Cadastro
app.put('/addCategoriesToUser', async(req, res) => {
    try{
        // Valida CheckBox de venda
        let fazVenda = req.body.checkVenda;
        // Valida CheckBox de Serviços
        let fazServico = req.body.checkServico;
        let tipoPessoa = req.body.tipoPessoa;
        let categoria;
        // Condicional que adiciona Os tipos de Categoria
        if(fazVenda){
            categoria.produtos = req.body.produtos;
        }
        if(fazServico){
            categoria.servicos = req.body.servicos;
        }
        // Valida Tipo de Pessoa entre fisica e Juridica
        let response = res.status(200).send("Categorias adicionadas com Sucesso!")
        if(tipoPessoa === 'pf'){
            let cpf = res.body.cpf;
            let addCategories = await pf.doc(cpf)
            .update(categoria)
            .then(response);
        }
        if(tipoPessoa === 'pj'){
            let cnpj = res.body.cnpj;
            let addProduct = await pf.doc(cnpj)
            .update(categoria)
            .then(response);
        }
    }
    catch(err){
        res.send(400).send(err.message)
    }
});
app.delete('/deleteUser', async(req, res) => {
    let tipoPessoa = req.body.tipoPessoa;
    let response = res.status(200).send("Conta apagada com Sucesso!")
    if(tipoPessoa === "pf"){
        let cpf = res.body.cpf;
        let deleteAccount = await pf.doc(cpf).delete().then(response);
    }
    if(tipoPessoa === "pj"){
        let cnpj = res.body.cnpj;
        let deleteAccount = await pj.doc(cnpj).delete().then(response);
    }
})
const lingo = functions.https.onRequest(app);
module.exports = {
   lingo
} 