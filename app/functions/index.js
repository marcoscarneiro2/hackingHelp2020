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

app.get('/getAll', async (req, res) => {
    try{
        let listPessoaFisica = [];
        let listPessoaJuridica = [];
        let getAllPessoaFisica = await pf.get().then(snapshot => {
            snapshot.forEach(doc => {
                listPessoaFisica.push(doc.data())
            })
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
app.post('/createPessoaFisica', async (req, res) => {
    try{
      
        let pessoaFisica = {
            cpf: req.body.cpf,
            nome: req.body.nome,
            telefone: req.body.telefone,
 //           endereco: localizacao,
            email: req.body.email,
 //           resumo: req.body.resumoProfissional,
            senha: req.body.senha
        }; 
        let mensagem = `Usuário com cpf:${pessoaFisica.cpf} cadastrado com sucesso`;
        pf.doc(pessoaFisica.cpf)
        .set(pessoaFisica)
        .then(res.send(200).send(mensagem)).catch(err); 
    }
    catch(err){
        res.status(500).send(err.message);
    }
});
app.put('/addAdress', async (req, res) => {
    let tipoPessoa = req.body.tipoPessoa;
    let cpf = req.body.cpf;
    let localizacao = {
            endereco: req.body.endereco,
            numero: req.body.endNumero,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            uf: req.body.uf,
            cep: req.body.cep
        }; 
    if(tipoPessoa === 'pf'){
        pf.doc(cpf).set(localizacao)
    }
})


module.exports = {
   app
} 