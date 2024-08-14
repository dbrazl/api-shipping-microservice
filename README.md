# 📦 Microserviço de Entrega

![Banner](https://github-dbrazl.s3.amazonaws.com/shipping-microservice-node/banner.jpg)

<center>
  <img src="https://img.shields.io/badge/node-20.15.1-green">
  <img src="https://img.shields.io/badge/typescript-5.5.4-blue">
  <img src="https://img.shields.io/badge/docker-27.0.3-darkcyan">
  <img src="https://img.shields.io/badge/license-MIT-red">
</center>
<div style="padding-bottom: 10px"></div>

Bem-vindo a API de entrega! Este microserviço foi criado para testar inicialmente a integração com os Correios. Como o serviço SOAP dos Correios está fora do ar, integrei a API com o Via CEP usando o protocolo REST.

## 🎯 Objetivo

O objetivo deste repositório é servir como um estudo de caso de integração usando o protocolo SOAP para consulta de CEP. Como o serviço dos Correios está fora do ar, substitui o serviço dos correios pelo Via CEP, alcançando o mesmo objetivo mas sem o uso do protocolo SOAP.

## ⚙️ Como rodar?

Para rodar o projeto, siga os passos abaixo.

### Clonar repositório

Primeiro clone o repositório. Você pode fazer isso via CLI com o comando abaixo.

```bash
git clone git@github.com:dbrazl/shipping-microservice-node.git
```

### Instalar dependências

Instale as dependências. Para isso, use o **yarn**. Bastar usar o comando abaixo.

```bash
yarn
```

### Iniciar o projeto

Para iniciar o microserviço localmente, você pode iniciar tanto com o auxílio do Docker, quanto diretamente em sua máquina. Eu recomendo iniciar o projeto diretamente na sua máquina, já que essa API não se comunica com outros serviços como por exemplo, um banco de dados ou outros microserviços.

#### Inicializar na máquina host

Para iniciar o projeto, rode o comando abaixo. A API irá iniciar localmente na porta **3000** da sua máquina.

```bash
yarn dev
```

Para parar a aplicação use **CTRL + C** no terminal onde a aplicação está rodando.

#### Inicializar em um container

Para iniciar o projeto, primeiro crie uma imagem Docker com o comando abaixo. Você deve estar na raiz do projeto ao rodar o comando abaixo. Ele lerá o arquivo Dockerfile e criará uma imagem para o projeto.

```bash
docker build -f Dockerfile.dev -t shipping-microservice .
```

Com a criação da imagem, inicie o container com o comando:

```bash
docker run -d -p 3000:3000 --name shipping-microservice shipping-microservice
```

Ele irá criar um container e o iniciar em segundo plano na porta **3000** da sua máquina. O **--name** dá nome ao container que é o mesmo da imagem que segue ele no comando acima.

Agora verifique se o container está em execução via:

```bash
docker ps
```

Se tudo tiver ocorrido bem, a aplicação estará de pé e poderá ser acessada na porta **3000** da sua máquina.

Para desligar o container, você pode usar o comando abaixo.

```bash
docker stop shipping-microservice
```

Caso tenha tido problema durante a criação do container, você pode deletá-lo pelo comando abaixo, e recriá-lo seguindo os passos anteriores.

```bash
docker rm shipping-microservice
```

O mesmo pode ser feito para a imagem. Caso algo tenha dado errado, use o comando abaixo, e a recrie usando os passos anteriores.

```bash
docker rmi shipping-microservice
```

## 💻 Design de Software

Adotei os princípios do SOLID, injeção de dependência e o Clean Architecture para o desenvolvimento do microserviço.

## 🛠 Tecnologias Utilizadas

- Typescript
- Node.js
- Docker

## 📬 Contato

Se você tiver dúvidas ou sugestões, pode me encontrar em daniel.braz@vyox.io ou através do [LinkedIn](https://www.linkedin.com/in/dbrazl/).

Espero que este repositório seja útil para estudantes, pesquisadores e profissionais interessados em desenvolver APIs com Node.js. Vamos aprender e evoluir juntos!

## 📜 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo <a href="./LICENSE.md">LICENSE.md</a> para mais detalhes.

---

Obrigado por visitar!
