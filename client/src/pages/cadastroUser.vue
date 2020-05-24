<template >
    <div class="mt-12">
  <v-app class="mt-12">
    <v-row justify="center" class="mt-12">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <v-text-field
              ref="email"
              v-model="name"
              :rules="[() => !!name || 'This field is required']"
              :error-messages="errorMessages"
              label="email"
              placeholder="exemplo@gmail.com"
              required
            ></v-text-field>
            <v-text-field
              ref="senha"
              v-model="senha"
              :rules="[() => !!state || 'Digite sua senha']"
              label="senha"
              required
              placeholder="senha"
            ></v-text-field>
             <v-text-field
              ref="confirmarsenha"
              v-model="senha"
              :rules="[() => !!state || 'confirme a senha']"
              label="confirmar senha"
              required
              placeholder="confirmar senha"
            ></v-text-field>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn text>Cancel</v-btn>
            <v-spacer></v-spacer>
            <v-slide-x-reverse-transition>
              <v-tooltip
                v-if="formHasErrors"
                left
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    class="my-0"
                    @click="resetForm"
                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>Refresh form</span>
              </v-tooltip>
            </v-slide-x-reverse-transition>
            <v-btn color="primary" text @click="cadastro" to="/cadastroBus"> <i class="fas fa-arrow-right"></i></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</div>
</template>