/*Instrução de instalação*/
-> Abra seu terminal ou prompt de comando e execute o seguinte comando para instalar a CLI NativeScript a partir do npm , que é o gerenciador de pacotes Node.js.

-> npm install -g nativescript

->Após concluir a configuração deve haver dois comandos disponível no comando de terminal / prompt: tns(abreviação de T elerik N ative S cript) e nativescript. Os dois comandos são idênticos, então você provavelmente vai querer ficar com o menor tns.

Vá em frente e verifique se a instalação foi bem-sucedida executando o tnsseu terminal ou prompt de comando. Você deve ver uma longa lista de comandos que começam com esta seção:

$ tns
# NativeScript CLI
┌─────────┬─────────────────────────────────────────────────────────────────────┐
│ Usage   │ Synopsis                                                            │
│ General │ $ tns <Command> [Command Parameters] [--command <Options>]          │
│ Alias   │ $ nativescript <Command> [Command Parameters] [--command <Options>] │
└─────────┴─────────────────────────────────────────────────────────────────────┘

IniciarConfiguração da CLI

Configuração rápida
Etapa 1: instalar o Node.js
Etapa 2: Instalar a CLI NativeScript
Etapa 3: instalar o aplicativo NativeScript Playground
Etapa 4: Aprenda o básico
Configuração completa
Etapa 1: Instale o Node.js e a CLI NativeScript
Etapa 2: instalar os requisitos iOS e Android
Etapa 3: verificar a configuração
Limitações da instalação rápida
Configuração da interface da linha de comandos
Com a interface de linha de comando NativeScript de código aberto e um IDE ou editor de texto de sua escolha, você pode criar, desenvolver, armazenar e criar seus aplicativos localmente, gratuitamente e de forma anônima.

A CLI NativeScript permite criar aplicativos de duas maneiras diferentes.

A Configuração rápida permite criar e desenvolver aplicativos NativeScript sem instalar nenhuma dependência do iOS ou Android em sua máquina local e é perfeita para começar.
A Instalação completa orienta você na instalação das dependências necessárias para compilar aplicativos iOS e Android localmente. Você precisará concluir a configuração completa para usar determinados plugins NativeScript e criar aplicativos para a App Store e o Google Play.
DICA : Você pode ler sobre as limitações da configuração rápida abaixo .

Configuração rápida
Etapa 1: instalar o Node.js
A CLI do NativeScript é criada no Node.js e, como tal, você precisa ter o Node.js instalado para usar o NativeScript.

Para verificar se você possui o Node.js instalado, abra um terminal ou prompt de comando e execute node --version. Se houver um erro, acesse https://nodejs.org/, faça o download e instale a distribuição mais recente “LTS” (suporte a longo prazo) e reinicie o terminal ou o prompt de comando.

DICA :

Se você estiver no macOS e usar o Homebrew , poderá instalar a versão Node.js LTS como alternativa executando brew update(para baixar as atualizações mais recentes) e depois brew install node@8no seu terminal.
A CLI do NativeScript suporta uma ampla variedade de versões do Node.js. Por isso, se você já possui o Node.js. instalado, deve estar pronto. Se, por acaso, você estiver executando uma versão não suportada, o tns doctorcomando será executado momentaneamente e sinalizará o problema para que você possa atualizar.
NOTA : Usuários de Mac, lembre-se de que pode ser necessário adicionar o caminho node@8/binmanualmente. Se você executar node --versione receber um erro "comando não encontrado", execute echo 'export PATH="/usr/local/opt/node@8/bin:$PATH"' >> ~/.bash_profilee reinicie o seu terminal.

Etapa 2: Instalar a CLI NativeScript
Abra seu terminal ou prompt de comando e execute o seguinte comando para instalar a CLI NativeScript a partir do npm , que é o gerenciador de pacotes Node.js.

npm install -g nativescript
NOTA :

Se você estiver no macOS e receber um erro do EACCES, precisará executar novamente o comando anterior com sudo- ou seja, sudo npm install -g nativescript- ou reservar um momento para corrigir suas permissões de npm, para que não precise de direitos de administrador para instalar globalmente os pacotes npm.
Após concluir a configuração deve haver dois comandos disponível no comando de terminal / prompt: tns(abreviação de T elerik N ative S cript) e nativescript. Os dois comandos são idênticos, então você provavelmente vai querer ficar com o menor tns.

Vá em frente e verifique se a instalação foi bem-sucedida executando o tnsseu terminal ou prompt de comando. Você deve ver uma longa lista de comandos que começam com esta seção:

$ tns
# NativeScript CLI
┌─────────┬─────────────────────────────────────────────────────────────────────┐
│ Usage   │ Synopsis                                                            │
│ General │ $ tns <Command> [Command Parameters] [--command <Options>]          │
│ Alias   │ $ nativescript <Command> [Command Parameters] [--command <Options>] │
└─────────┴─────────────────────────────────────────────────────────────────────┘

-> Etapa 3: instalar o aplicativo NativeScript Playground
A configuração rápida da CLI NativeScript permite desenvolver seus aplicativos localmente e testá-los em um dispositivo físico Android ou iOS. Isso permite alguns fluxos de trabalho bastante interessantes, como o desenvolvimento de aplicativos iOS em máquinas de desenvolvimento Windows ou Linux.

Para ativar esse fluxo de trabalho e concluir sua configuração, faça o download e instale o aplicativo NativeScript Playground no seu dispositivo móvel. Você pode procurar por "NativeScript Playground" na iOS App Store ou no Google Play ou usar os links abaixo.

Ios -> https://apps.apple.com/us/app/nativescript-playground/id1263543946?ls=1

Android -> https://play.google.com/store/apps/details?id=org.nativescript.play


-> Feito a instalação acesse 

cd hackingRio

...\hackingRio\  Digite "tns preview"

->Você verá um código QR no seu terminal

->Em seguida, abra o aplicativo NativeScript Playground no seu dispositivo iOS ou Android.

No aplicativo Playground, toque na opção Digitalizar código QR e digitalize o código QR que aparece no seu terminal ou no prompt de comandos.

Após a digitalização, você deverá ver seu aplicativo no seu dispositivo.

Agora que você tem o aplicativo no seu dispositivo, poderá notar que o tns previewcomando no seu terminal ou prompt de comando nunca terminou. Ou seja, você não pode digitar seu terminal.

Fontes: https://docs.nativescript.org/angular/start/cli-basics
https://market.nativescript.org/

