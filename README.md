<h1 align="center">⚙️ Microserviço de Entrega</h1>
<br>

![Banner](https://github-dbrazl.s3.us-east-1.amazonaws.com/api-shipping-microservice/banner.svg?v=1.0.0)

<p align="center">
  Bem-vindo a API de entrega! Este microserviço foi criado para testar inicialmente a integração com os Correios. Como o serviço SOAP dos Correios está fora do ar, integrei a API com o ViaCEP usando o protocolo REST.
</p>

<br>
<p align="center">
  <img src="https://img.shields.io/badge/autor-@dbrazl-FB8C00?style=flat" alt="Autor: @dbrazl">
</p>
<br>

## 🎯 Objetivo

<p align="justify">
  O objetivo deste repositório é apresentar um estudo de caso de integração para consulta de CEP, projetado inicialmente para o protocolo SOAP e adaptado para o serviço ViaCEP devido à instabilidade dos Correios. A aplicação segue boas práticas de desenvolvimento, com princípios SOLID, injeção de dependência, Clean Code e Clean Architecture, visando uma estrutura sólida e escalável.
</p>

## 🛠 Tecnologias

<p align="justify">
  As tecnologias utilizadas nesse projeto foram:
</p>

![Typescript](https://img.shields.io/badge/Typescript-333333?style=flat&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-333333?style=flat&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-333333?style=flat&logo=express&logoColor=black)
![Zod](https://img.shields.io/badge/Zod-333333?style=flat&logo=zod&logoColor=blue)
![Inversify](https://img.shields.io/badge/Inversify-333333?style=flat&logo=node.js&logoColor=yellow)
![Docker](https://img.shields.io/badge/Docker-333333?style=flat&logo=docker)

## 📥 Instalação

Sigo os passo abaixo para pode instalar o projeto na máquina alvo.

### Passo 1: Download

<p align="justify">
  O primeiro passo é o download do projeto para a máquina alvo. Para isso é necessário que você tenha o Git instalado e uma conta no GitHub.
</p>
<p align="justify">
  Com esses requisitos atendidos, uma das formas de fazer o download dos arquivos do projeto é via SSH. Caso ainda não tenha, cadastre uma chave SSH na máquina alvo e a chave pública no GitHub, e após faça o clone do projeto usando o comando abaixo:
</p>

```bash
  git clone git@github.com:dbrazl/api-shipping-microservice.git
```

### Passo 2: Instalação de pacotes

<p align="justify">
  Para instalar os pacotes do projeto, use o seguinte comando na raiz do projeto:
</p>

```bash
  yarn
```

<p align="justify">
  Certifique-se de ter o yarn instalado.
</p>

## 🚀 Como Rodar

<p align="justify">
  Com a etapa de instalação finalizada, você pode iniciar a aplicação tanto diretamente na máquina alvo, quanto com o auxílio do Docker. Por essa API não se comunicar com outros serviços na mesma arquitetura, como por exemplo, um banco de dados ou outros microserviços, eu recomendo iniciar o projeto diretamente na máquina alvo.
</p>

<p align="justify">
  Para isso, inicie a aplicação rodando o seguinte comando abaixo:
</p>

```bash
  yarn dev
```

<p align="justify">
  Caso prefira usa o Docker, certifique-se que ele está instalado na máquina alvo, e crie uma imagem Docker para aplicação com o comando abaixo:
</p>

```bash
  docker build -f Dockerfile.dev -t shipping-microservice .
```

<p align="justify">
  Você deve estar na raiz do projeto ao rodar o comando. Ele lerá o arquivo Dockerfile e criará uma imagem de nome <strong>shipping-microservice</strong> para o projeto.
</p>

<p align="justify">
  Com a criação da imagem, inicie o container com o comando:
</p>

```bash
  docker run -d -p 3000:3000 --name shipping-microservice shipping-microservice
```

<p align="justify">
  Isso fara que um novo container com nome <strong>shipping-microservice</strong> seja criado a partir da imagem criada anteriormente de mesmo nome, e inicia-lo em segundo plano na porta <strong>3000</strong> da máquina alvo.
</p>

<p align="justify">
  Agora verifique se o container está em execução via:
</p>

```bash
  docker ps
```

<p align="justify">
  Se tudo tiver ocorrido bem, a aplicação estará de pé e poderá ser acessada na porta <strong>3000</strong> da máquina alvo.
</p>

<p align="justify">
  Para desligar o container, você pode usar o comando abaixo:
</p>

```bash
  docker stop shipping-microservice
```

<p align="justify">
  Caso tenha tido problema durante a criação do container, você pode deletá-lo pelo comando abaixo, e recriá-lo seguindo os passos anteriores.
</p>

```bash
  docker rm shipping-microservice
```

<p align="justify">
  O mesmo pode ser feito para a imagem. Caso algo tenha dado errado, use o comando abaixo, e a recrie usando os passos anteriores.
</p>

```bash
  docker rmi shipping-microservice
```

## 📚 Documentação

<p align="justify">
  Siga os links abaixo para ter acesso a(s) documentação(ões) do projeto.
</p>

- [Documentação de API](./docs/API_DOCUMENTATION.md)

## 📬 Contato

<p align="justify">
  Se você tiver dúvidas ou sugestões, pode me encontrar em <a href="mailto:daniel.braz@vyox.io">daniel.braz@vyox.io</a> ou através do <a href="https://www.linkedin.com/in/dbrazl/">LinkedIn</a>.
</p>
