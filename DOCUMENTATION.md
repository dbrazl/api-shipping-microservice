# API Documentation

## Índice

- [Introdução](#introdução)
- [Rotas](#rotas)
  - [Expedição](#expedição)
    - [GET /health](#get-health)
    - [GET /address/{zipCode}](#get-addresszipcode)
- [Versionamento](#versionamento)
- [Licença](#licença)

## Introdução

Bem-vindo a documentação da API. Esta API permite você a verificar endereços via o CEP. As rotas são desenhadas para serem RESTful e retornam respostas JSON.

## Rotas

### Expedição

#### GET /health

Retorna o estado atual do servidor. Se estiver online, retorna HTTP Status **OK**.

**Exemplo de Requisição:**

```http
GET /api/v1/shipping/health HTTP/1.1
Host: localhost:3000
```

#### GET /address/{zipCode}

Retorna o endereço relacionado ao CEP informado.

**Path Parameters:**

- `zipCode`: O CEP a ser pesquisado.

**Exemplo de Requisição:**

```http
GET /api/v1/shipping/address/01310200 HTTP/1.1
Host: api.example.com
```

**Exemplo de Resposta:**

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

## Versionamento

A API usa versionamento para manter a compatibilidade retroativa. A atual versão é a `v1`. Todos os endpoints devem ser prefixados com o número da versão.

```http
GET /api/v1/... HTTP/1.1
```

## Licença

O projeto está sobre a licença MIT License. Veja o [LICENSE.md](./LICENSE) para mais detalhes.
