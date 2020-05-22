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
app.get('/ProductsCategory', async (req, res) =>{
    try{
        let categoriasProdutos = [];
        let getProductCategories = await produtos.get().then(snapshot => {
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
app.get('/ServicesCategory', async (req, res) =>{
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
        let mensagem = `Usuário com cpf:${pessoaFisica.cpf} cadastrado com sucesso`;
        // método que cria o documento na coleção
        let createpessoaFisica = await pf.doc(pessoaFisica.cpf)
        .set(pessoaFisica)
        .then(res.send(200).send(mensagem)).catch(err); 
    }
    catch(err){
        res.status(500).send(err.message);
    }
});
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
        let mensagem = `Usuário com CNPJ:${pessoaJuridica.cnpj} cadastrado com sucesso`;
        let createPessoaJuridica = await pj.doc(pessoaJuridica.cnpj)
        .set(pessoaJuridica)
        .then(res.send(200).send(mensagem)).catch(err); 
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
        // If de pessoa Fisica
        if(tipoPessoa === 'pf'){
            let cpf = req.body.cpf;
            let addAddres = await pf.doc(cpf).update(localizacao).then(res.status(200).send("Endereço cadastrado com Sucesso!"));
        }
        // If de pessoa Jurídica
        if(tipoPessoa === 'pj'){
            let cnpj = req.body.cnpj;
            let addAddress = await pj.doc(cnpj)
            .update(localizacao).then(res.status(200).send("Endereço cadastrado com Sucesso!"));
        }
    }
    catch(err){
        res.status(400).send(err.message);
    }

});
app.put('/addProductToUser', async(req, res) => {
    try{
        let tipoPessoa = req.body.tipoPessoa;
        let produtos = req.body.produtos;
        if(tipoPessoa === 'pf'){
            let cpf = res.body.cpf;
            let addProduct = await pf.doc(cpf)
            .update(produtos)
            .then(res.status(200).send("Produtos adicionados com Sucesso!"));
        }
        if(tipoPessoa === 'pj'){
            let cnpj = res.body.cnpj;
            let addProduct = await pf.doc(cnpj)
            .update(produtos)
            .then(res.status(200).send("Produtos adicionados com Sucesso!"));
        }
    }
    catch(err){
        res.send(400).send(err.message)
    }
});
app.put('/addServiceToUser', async(req, res) => {
    try{
        let tipoPessoa = req.body.tipoPessoa;
        let servicos = req.body.servicos;
        if(tipoPessoa === 'pf'){
            let cpf = res.body.cpf;
            let addServicePF = await pf.doc(cpf)
            .update(servicos)
            .then(res.status(200).send("Serviços adicionados com Sucesso!"));
        }
        if(tipoPessoa === 'pj'){
            let cnpj = res.body.cnpj;
            let addServicePJ = await pf.doc(cnpj)
            .update(servicos)
            .then(res.status(200).send("Serviços adicionados com Sucesso!"));
        }
    }
    catch(err){
        res.send(400).send(err.message)
    }
});


module.exports = {
   app
} 