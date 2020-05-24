<template>
  <v-app id="inspire">
    <v-content class="mt-12">
      <v-window v-model="step" class="mt-6">
        <v-window-item :value="1">
        <v-container
        class="fill-height mt-6"
        fluid
  
      >
        <v-row
        class="mt-12"
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="#0296CC" 
                dark
                flat
                
              >
                <v-toolbar-title >Cadastre-se</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    v-model="email"
                    prepend-icon='fas fa-user'
                    type="email"
                  ></v-text-field>
                  <v-text-field
                    label="Senha"
                    v-model="senha1"
                    prepend-icon="fas fa-lock"
                    type="password"
                  ></v-text-field>
                  <v-text-field
                    v-model="senha2"
                    label="Confirme sua Senha"
                    prepend-icon="fas fa-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="cadastrar" color="#0296CC" >Cadastrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-alert
      v-model="alert"
      dismissible
      color="cyan"
      border="left"
      elevation="2"
      colored-border
    >
     Senhas não são iguais ou campos vazios
    </v-alert>
      </v-container>
      </v-window-item>

      <v-window-item :value="2">
        <v-container class="mt-12">
          <v-row align="center" class="my-6" justify="center">
            <h1>Complete seu Cadastro</h1>
          </v-row>
          <v-row align="center" class="my-6" justify="center">
              <v-btn color="#0296CC"  @click="step++">Adoraria!</v-btn>
          </v-row>
          <v-row align="center" class="my-6" justify="center">
            <v-btn color="#0296CC"  to="/perfil">Agora não!</v-btn>
          </v-row>
        </v-container>
      </v-window-item>
      <v-window-item :value="3">
         <v-container class="mt-12">
          <v-row align="center" class="my-6" justify="center">
            <h1>Você Possui...</h1>
          </v-row>
          <v-row align="center" class="my-6" justify="center">
              <v-btn color="#0296CC"  @click="step++">CPF?!</v-btn>
          </v-row>
          <v-row align="center" class="my-6" justify="center">
            <v-btn color="#0296CC" @click="step=step+2">CNPJ?</v-btn>
          </v-row>
        </v-container>
      </v-window-item>
      <v-window-item :value="4">
        <v-app id="inspire">
    <v-row justify="center" >
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              v-model="nomecompleto"
              :rules="[() => !!nomecompleto || 'Preencha o campo']"
              label="Nome Completo"
              placeholder="José da Silva "
              required
            ></v-text-field>
             <v-text-field
              ref="cnpj"
              v-model="cnpj"
              :rules="[() => !!cnpj || 'Preencha o campo']"
              label="CPF"
              placeholder="XXX.XXX.XXX-XX"
              required
            ></v-text-field>
             <v-text-field
              ref="Telefone"
              v-model="telefone"
              :rules="[() => !!telefone || 'Preencha o campo']"
              label="Whatsapp/Telefone "
              placeholder="(XX)XXXXX-XXXX"
              required
            ></v-text-field>
            <v-text-field
              ref="cep "
              v-model="cep"
              :rules="[() => !!cep || 'Preencha o campo']"
              label="cep"
              required
              placeholder="XXXXX-XXX"
            ></v-text-field>
            <v-text-field
              v-model="state"
              :rules="[() => !!state || 'Preencha o campo']"
              label="Estado"
              required
              placeholder="Rio de Janeiro"
            ></v-text-field>
             <v-text-field
              ref="city"
              v-model="city"
              :rules="[() => !!city || 'Preencha o campo']"
              label="Cidade"
              placeholder="Rio de janeiro"
              required
            ></v-text-field>
              <v-text-field
              ref="neighbor"
              v-model="neighbor"
              :rules="[() => !!neighbor || 'Preencha o campo']"
              label="bairro"
              placeholder="Rio de janeiro"
              required
            ></v-text-field>
            <v-text-field
              ref="endereço"
              v-model="address"
              :rules="[() => !!address || 'Preencha o campo']"
              label="Endereço"
              placeholder="Rua Pequiri"
              required
            ></v-text-field>
           <v-text-field
              ref="numero"
              v-model="addressNumber"
              :rules="[() => !!addressNumber || 'Preencha o campo']"
              label="Nª"
              placeholder="50"
              required
            ></v-text-field>
            
          </v-card-text>
          <v-card-actions>
        <v-row align="center" justify="center" class="ma-auto">
              <v-btn color="#0296CC" outlined width="50%" @click="step--">Voltar</v-btn>
              <v-btn color="#0296CC" outlined width="50%" @click="criarPF">Cadastrar</v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
      </v-window-item>
      <v-window-item :value="5">
 <v-app id="inspire">
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              v-model="nomeempresa"
              :rules="[() => !!nomeempresa || 'Preencha o campo']"
              label="Nome da empresa"
              placeholder="lingo "
              required
            ></v-text-field>
             <v-text-field
              ref="cnpj"
              v-model="cnpj"
              :rules="[() => !!cnpj || 'Preencha o campo']"
              label="cnpj da empresa"
              placeholder="XXXXX-X/XX – Padaria do bairro"
              required
            ></v-text-field>
             <v-text-field
              ref="Telefone"
              v-model="telefone"
              :rules="[() => !!telefone || 'Preencha o campo']"
              label="Telefone da empresa"
              placeholder="(XX) XXXXX-XXXX"
              required
            ></v-text-field>
            <v-text-field
              ref="cep "
              v-model="cep"
              :rules="[() => !!cep || 'Preencha o campo']"
              label="cep"
              required
              placeholder="XXXXX-XXX"
            ></v-text-field>
               <v-text-field
              v-model="state"
              :rules="[() => !!state || 'Preencha o campo']"
              label="Estado"
              required
              placeholder="Rio de Janeiro"
            ></v-text-field>
              <v-text-field
              ref="city"
              v-model="city"
              :rules="[() => !!city || 'Preencha o campo']"
              label="Cidade"
              placeholder="Rio de janeiro"
              required
            ></v-text-field>
             <v-text-field
              ref="neighbor"
              v-model="neighbor"
              :rules="[() => !!neighbor || 'Preencha o campo']"
              label="bairro"
              placeholder="Rio de janeiro"
              required
            ></v-text-field>
            <v-text-field
              ref="endereço"
              v-model="address"
              :rules="[
                () => !!address || 'Preencha o campo']"
              label="Endereço"
              placeholder="Rua Pequiri"
              required
            ></v-text-field>
          <v-text-field
              ref="numero"
              v-model="addressNumber"
              :rules="[
                () => !!addressNumber || 'Preencha o campo']"
              label="Nª"
              placeholder="50"
              required
            ></v-text-field>
         
          </v-card-text>
          <v-row align="center" justify="center" class="ma-2">
              <v-btn color="#0296CC" outlined width="50%" @click="step=step-2">Voltar</v-btn>
              <v-btn color="#0296CC" outlined width="50%" @click="criarPJ">Cadastrar</v-btn>
            </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
      </v-window-item>
       <v-window-item :value="6">
        <v-container class="mt-12">
          <v-row align="center" class="my-6" justify="center">
            <h1>Você Fornece Produtos?</h1>
          </v-row>
          <v-row align="center" class="ma-6" justify="center">
             <v-combobox
          v-model="selectProdutos"
          :itemsProdutos="itemsProdutos"
          label="O que você vende?"
          multiple
          chips
        ></v-combobox>
          </v-row>
          <v-row align="center" class="my-6" justify="center">
            <v-btn color="#0296CC" @click="addProductCategory">Salvar?</v-btn>
          </v-row>
        </v-container>
      </v-window-item>
       <v-window-item :value="7">
            <v-container class="mt-12">
          <v-row align="center" class="my-6" justify="center">
            <h1>Você Fornece Serviços?</h1>
          </v-row>
          <v-row align="center" class="ma-6" justify="center">
             <v-combobox
          v-model="selectServicos"
          :itemsServicos="itemsServicos"
          label="Digite aqui que serviços você realiza"
          multiple
          chips
        ></v-combobox>
          </v-row>
          <v-row align="center" class="ma-6" justify="center">
            <v-btn color="#0296CC" @click="addServiceCategory">Salvar</v-btn>
          </v-row>
        </v-container>
      </v-window-item>
      <v-window-item :value="8">
        
      </v-window-item>
    </v-window>
      
    </v-content>
  </v-app>
</template>

<script>
import axios from "axios";
  export default {
      data(){
        return{
          selectProdutos:[],
          itemsProdutos:[],
          selectServicos:[],
          itemsServicos:[],
          step: 1,
          email:null,
          senha1:null,
          senha2:null,
          alert:false,
          nomecompleto:null,
          nomeempresa:null,
          cnpj:null,
          cpf:null,
          telefone:null,
          cep:null,
          state:null,
          city:null,
          neighbor:null,
          address:null,
          addressNumber:null,
          addressCheck:null,
        }
      },
      methods:{
        cadastrar(){
          if(this.senha1===this.senha2 && this.email && this.email != '' && this.senha1 && this.senha2 ){
           axios.post('https://us-central1-hackingriolingo.cloudfunctions.net/lingo/createUser',{email:this.email,password:this.senha1})
            this.step++
          }else{
            this.email=null;
            this.senha1=null;
            this.senha2=null
            this.alert=!this.alert
          }
        },
        criarPJ(){
          axios.post('https://us-central1-hackingriolingo.cloudfunctions.net/lingo/createPessoaJuridica',{
            nome:this.nomeempresa,
            cnpj:this.cnpj,
            telefone:this.telefone,
            endereco:this.address,
            endNumero:this.addressNumber,
            bairro:this.neighbor,
            cidade:this.city,
            uf:this.state,
            cep:this.cep
          }).then(response => {
            if(response.status === "200"){
              this.step++
            }
          })        

        },
        criarPF(){

          axios.post('https://us-central1-hackingriolingo.cloudfunctions.net/lingo/createPessoaFisica',{
            nome:this.nomecompleto,
            cpf:this.cpf,
            telefone:this.telefone,
            endereco:this.address,
            endNumero:this.addressNumber,
            bairro:this.neighbor,
            cidade:this.city,
            uf:this.state,
            cep:this.cep
          }).then(response => {
            if(response.status === "200"){
              this.$router.replace({name:"Perfil"})
            }
          })
        },
        addServiceCategory() {
          axios.put('https://us-central1-hackingriolingo.cloudfunctions.net/lingo/createPessoaJuridica',{
            categoriasServicos:this.selectServicos,
            cpf:this.cpf
          })
           },

        addProductCategory() {
          axios.put('https://us-central1-hackingriolingo.cloudfunctions.net/lingo/createPessoaJuridica',{
            categoriasProdutos:this.selectProdutos
          })
           }
      }
}
</script>