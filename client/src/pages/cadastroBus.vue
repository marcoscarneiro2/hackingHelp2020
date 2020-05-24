<template>
    <div id="app" class="mt-12">
  <v-app id="inspire" class="mt-12">
    <v-row justify="center" class="mt-12">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              ref="nomeempresa"
              v-model="nameempresa"
              :rules="[() => !!nomeempresa || 'Preencha o campo']"
              :error-messages="errorMessages"
              label="Nome da empresa"
              placeholder="lingo "
              required
            ></v-text-field>
             <v-text-field
              ref="cnpj"
              v-model="cnpj"
              :rules="[() => !!cnpj || 'Preencha o campo']"
              :error-messages="errorMessages"
              label="cnpj da empresa"
              placeholder="XXXXX-X/XX – Padaria do bairro"
              required
            ></v-text-field>
             <v-text-field
              ref="Telefone"
              v-model="Telefone"
              :rules="[() => !!Telefone || 'Preencha o campo']"
              :error-messages="errorMessages"
              label="Telefone da empresa"
              placeholder="(021) 8457-1254"
              required
            ></v-text-field>
            <v-text-field
              ref="endereço"
              v-model="address"
              :rules="[
                () => !!address || 'Preencha o campo',
                () => !!address && address.length <= 25 || 'Campo de enderço excede o limite de 25 caractes',
                addressCheck
              ]"
              label="Endereço"
              placeholder="Rua Pequiri"
              counter="25"
              required
            ></v-text-field>
            <v-text-field
              ref="city"
              v-model="city"
              :rules="[() => !!city || 'Preencha o campo', addressCheck]"
              label="Cidade"
              placeholder="Rio de janeiro"
              required
            ></v-text-field>
            <v-text-field
              ref="estado"
              v-model="state"
              :rules="[() => !!estado || 'Preencha o campo']"
              label="Estado"
              required
              placeholder="Rio de Janeiro"
            ></v-text-field>
            <v-text-field
              ref="cep "
              v-model="cep"
              :rules="[() => !!cep || 'Preencha o campo']"
              label="cep"
              required
              placeholder="21215-110"
            ></v-text-field>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>

           <v-switch
            v-model="switch1"
           :label="`Não possuo empresa`"
      ></v-switch>

            <v-spacer></v-spacer>
       
            <v-btn color="primary" text @click="submit">Cadastrar</v-btn>
         
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</div>
</template>

<script>
export default {
     data () {
    return {
      switch1: true,
    }
  },
}
</script>