<h1 align="center">📚 Documentação da API</h1>

![Banner](https://github-dbrazl.s3.us-east-1.amazonaws.com/api-shipping-microservice/banner.svg?v=1.0.0)

<p align="center">
  Bem-vindo a documentação da API. Esta API permite você verifique endereços via o CEP. As rotas são desenhadas para serem RESTful e retornam respostas JSON.
</p>
<br>

## 📑 Índice

- [Rotas](#rotas)
  - [Expedição](#expedição)
    - [GET /health](#get-health)
    - [GET /address/{zipCode}](#get-addresszipcode)
- [Versionamento](#versionamento)

## 🛤️ Rotas

### Expedição

#### GET /health

<p align="justify">
  Retorna o estado atual do servidor. Se estiver online, retorna HTTP Status <strong>OK</strong>.
</p>

<p align="justify">
  <strong>Exemplo de Requisição:</strong>
</p>

```http
GET /api/v1/shipping/health HTTP/1.1
Host: localhost:3000
```

#### GET /address/{zipCode}

<p align="justify">
  Retorna o endereço relacionado ao CEP informado.
</p>

<p align="justify">
  <strong>Path Parameters:</strong>
</p>

- `zipCode`: O CEP a ser pesquisado.

<p align="justify">
  <strong>Exemplo de Requisição:</strong>
</p>

```http
GET /api/v1/shipping/address/01310200 HTTP/1.1
Host: api.example.com
```

<p align="justify">
  <strong>Exemplo de Resposta:</strong>
</p>

```json
{
  "neighborhood": "Bela Vista",
  "zipCode": "01310-200",
  "city": "São Paulo",
  "complement": "de 1512 a 2132 - lado par",
  "street": "Avenida Paulista",
  "state": "SP"
}
```

## 📦 Versionamento

<p align="justify">
  A API usa versionamento para manter a compatibilidade retroativa. A atual versão é a <i>v1</i>. Todos os endpoints devem ser prefixados com o número da versão.
</p>

```http
GET /api/v1/... HTTP/1.1
```
