<template>
	<Page actionBarHidden="true" >
		<FlexboxLayout class="page">
			<StackLayout class="form">

       <!--TELA DE CADASTRO--> 
				<image src="https://i.imgur.com/JlHamfi.png" width="300" />
				<!--<Label class="header" text="LINGO" /> -->

				<StackLayout class="input-field" marginBottom="25">
					<TextField class="input" hint="Email" keyboardType="email" autocorrect="false" autocapitalizationType="none" v-model="user.email"
					 returnKeyType="next" @returnPress="focusPassword" fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

				<StackLayout class="input-field" marginBottom="25">
					<TextField ref="senha" class="input" hint="senha" secure="true" v-model="user.password" :returnKeyType="isLoggingIn ? 'done' : 'next'"
					 @returnPress="focusConfirmPassword" fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>

				<StackLayout v-show="!isLoggingIn" class="input-field">
					<TextField ref="confirmSenha" class="input" hint="Confirmar senha" secure="true" v-model="user.confirmPassword" returnKeyType="done"
					 fontSize="18" />
					<StackLayout class="hr-light" />
				</StackLayout>
        <!------------------------>

				<Button :text="isLoggingIn ? 'Log In' : 'Sign Up'" @tap="submit" class="btn btn-primary m-t-20" />
				<Label v-show="isLoggingIn" text="Esqueceu sua senha ?" class="login-label" @tap="forgotPassword" />
			</StackLayout>

			<Label class="login-label sign-up-label" @tap="toggleForm">
	          <FormattedString>
	            <Span :text="isLoggingIn ? 'Não tem cadastro? ' : 'Voltar para Login'" />
	            <Span :text="isLoggingIn ? 'Cadastrar' : ''" class="bold" />
	          </FormattedString>
	        </Label>
		</FlexboxLayout>
	</Page>
</template>

<script>
// Serviço de autentificação de usuario
const userService = {
    register(user) {
        return Promise.resolve(user);
    },
    login(user) {
        return Promise.resolve(user);
    },
    resetPassword(email) {
        return Promise.resolve(email);
    }
};


const HomePage = {
    template: `
<Page>
	<Label class="m-20" textWrap="true" text="Logado"></Label>
</Page>
`
};
const axios = require('axios');
export default {
    data() {
        return {
            isLoggingIn: true,
            user: {
                email: "",
                password: "",
                confirmPassword: ""
            }
        };
    },
    methods: {
        toggleForm() {
            this.isLoggingIn = !this.isLoggingIn;
        },

        submit() {
            if (!this.user.email || !this.user.password) {
                this.alert(
                    "Por favor, preencha os campos acima"
                );
                return;
            }
            if (this.isLoggingIn) {
                this.login();
            } else {
                this.register();
            }
        },

        login() {
            userService
                .login(this.user)
                .then(() => {
                    this.$navigateTo(HomePage);
                })
                .catch(() => {
                    this.alert("Seu login não foi encontrado");
                });
        },

        register() {
            if (this.user.password != this.user.confirmPassword) {
                this.alert("Confirmação de senha não confere");
                return;
            }

            userService
                .register(this.user)
                .then(() => {
                    this.alert("Conta criada com sucesso");
                    this.isLoggingIn = true;
                })
                .catch(() => {
                    this.alert(
                        "Ocorreu um erro ao criar conta"
                    );
                });
        },

        forgotPassword() {
            prompt({
                title: "Esqueceu a senha",
                message:
                    "Digite o endereço de e-mail que você usou para se registrar no LINGO para redefinir sua senha.",
                inputType: "email",
                defaultText: "",
                okButtonText: "Ok",
                cancelButtonText: "Cancel"
            }).then(data => {
                if (data.result) {
                    userService
                        .resetPassword(data.text.trim())
                        .then(() => {
                            this.alert(
                                "Sua senha foi resetada com sucesso, cheque sua caixa de email para as instruções"
                            );
                        })
                        .catch(() => {
                            this.alert(
                                "Ocorreu um erro ao resetar sua senha"
                            );
                        });
                }
            });
        },

        focusPassword() {
            this.$refs.password.nativeView.focus();
        },
        focusConfirmPassword() {
            if (!this.isLoggingIn) {
                this.$refs.confirmPassword.nativeView.focus();
            }
        },

        alert(message) {
            return alert({
                title: "Lingo",
                okButtonText: "OK",
                message: message
            });
        }
    }
};
</script>

<style scoped>
	.page {
		align-items: center;
		flex-direction: column;
	}

	.form {
		margin-left: 30;
		margin-right: 30;
		flex-grow: 2;
		vertical-align: middle;
	}

	.logo {
		margin-bottom: 12;
		height: 90;
		font-weight: bold;
	}

	.header {
		horizontal-align: center;
		font-size: 25;
		font-weight: 600;
		margin-bottom: 70;
		text-align: center;
		color: #D51A1A;
	}

	.input-field {
		margin-bottom: 25;
	}

	.input {
		font-size: 18;
		placeholder-color: #A8A8A8;
	}

	.input-field .input {
		font-size: 54;
	}

	.btn-primary {
		height: 50;
		margin: 30 5 15 5;
		background-color: rgb(13, 7, 124);
    color: white;
		border-radius: 5;
		font-size: 20;
		font-weight: 600;
	}

	.login-label {
		horizontal-align: center;
		color: #A8A8A8;
		font-size: 16;
	}

	.sign-up-label {
		margin-bottom: 20;
	}

	.bold {
		color: #000000;
	}
</style>
