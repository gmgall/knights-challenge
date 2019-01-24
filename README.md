# Knights Challenge

Esse repositório contém um projeto resposta ao desafio [Knights Challenge](challenge.md)

## Executando a aplicação node.js

Para executar é necessário:

1) clonar esse repositório

```
$ git clone https://github.com/gmgall/knights-challenge.git
$ cd knights-challenge
```

2) definir as variáveis de ambiente

Para o banco desse projeto, usei o plano gratuito da [mLab](https://mlab.com).

Use MONGODB_URI e PORT para definir a string de conexão ao MongoDB e a porta, respectivamente.

```
$ export MONGODB_URI='mongodb://user:pass@host.mlab.com:41218/knights-challenge'
$ export PORT=1234 # Opcional, por padrão usa a 8000
```

3) execute a aplicação

```
$ node app.js
```

## Testando a API

Usei o comando `curl` para enviar requisições à API e o módulo `json.tool` para imprimir JSON formatado.

### Obtendo todos os guerreiros

Use o comando

```
$ curl -s -H "Content-Type: application/json" -X GET http://localhost:8000/knights | python -m json.tool
```
Exemplo de resposta
```
[
    {
        "__v": 0,
        "_id": "5c48fead5e22476990f31a69",
        "attributes": {
            "_id": "5c48fead5e22476990f31a6c",
            "charisma": 0,
            "constitution": 0,
            "dexterity": 0,
            "intelligence": 0,
            "strength": 0,
            "wisdom": 0
        },
        "birthday": "1878-07-19T03:00:00.000Z",
        "keyAttribute": "strength",
        "name": "Iakov Iourovski",
        "nickname": "IA2",
        "weapons": [
            {
                "_id": "5c48fead5e22476990f31a6b",
                "attr": "strength",
                "equipped": true,
                "mod": 3,
                "name": "gun"
            },
            {
                "_id": "5c48fead5e22476990f31a6a",
                "attr": "strength",
                "equipped": true,
                "mod": 3,
                "name": "riffle"
            }
        ]
    },
    {
        "__v": 0,
        "_id": "5c491950933f1625aa8c0059",
        "attributes": {
            "_id": "5c491950933f1625aa8c005b",
            "charisma": 0,
            "constitution": 0,
            "dexterity": 0,
            "intelligence": 0,
            "strength": 0,
            "wisdom": 0
        },
        "birthday": "1987-05-11T03:00:00.000Z",
        "keyAttribute": "strength",
        "name": "Guilherme Gall4",
        "nickname": "gmgall4",
        "weapons": [
            {
                "_id": "5c491950933f1625aa8c005a",
                "attr": "strength",
                "equipped": true,
                "mod": 3,
                "name": "pen"
            }
        ]
    }
]
```

### Criando um novo guerreiro

Crie um arquivo chamado `data.json` com o conteúdo abaixo
```
{
    "name": "Robespierre",
    "nickname": "Incorruptible",
    "birthday": "1758-05-06T03:00:00.000Z",
    "weapons": [
        {
            "name": "guillotine",
            "mod": 3,
            "attr": "strength",
            "equipped": true
        }
    ],
    "attributes": {
        "strength": 0,
        "dexterity": 0,
        "constitution": 0,
        "intelligence": 0,
        "wisdom": 0,
        "charisma": 0
    },
    "keyAttribute": "strength"
}

```

E use o comando abaixo para criar um guerreiro
```
$ curl -s -d "@data.json" -H "Content-Type: application/json" -X POST http://localhost:8000/knights | python -m json.tool

```
Exemplo de resposta
```
{
    "__v": 0,
    "_id": "5c4921a494ef1a2c51a7160f",
    "attributes": {
        "_id": "5c4921a494ef1a2c51a71611",
        "charisma": 0,
        "constitution": 0,
        "dexterity": 0,
        "intelligence": 0,
        "strength": 0,
        "wisdom": 0
    },
    "birthday": "1758-05-06T03:00:00.000Z",
    "keyAttribute": "strength",
    "name": "Robespierre",
    "nickname": "Incorruptible",
    "weapons": [
        {
            "_id": "5c4921a494ef1a2c51a71610",
            "attr": "strength",
            "equipped": true,
            "mod": 3,
            "name": "guillotine"
        }
    ]
}
```

### Apagando um guerreiro

Use um comando como o abaixo para apagar um guerreiro
```
$ curl -s -H "Content-Type: application/json" -X DELETE http://localhost:8000/knights/5c491950933f1625aa8c0059 | python -m json.tool
```
Exemplo de resposta
```
{
    "__v": 0,
    "_id": "5c491950933f1625aa8c0059",
    "attributes": {
        "_id": "5c491950933f1625aa8c005b",
        "charisma": 0,
        "constitution": 0,
        "dexterity": 0,
        "intelligence": 0,
        "strength": 0,
        "wisdom": 0
    },
    "birthday": "1987-05-11T03:00:00.000Z",
    "keyAttribute": "strength",
    "name": "Guilherme Gall4",
    "nickname": "gmgall4",
    "weapons": [
        {
            "_id": "5c491950933f1625aa8c005a",
            "attr": "strength",
            "equipped": true,
            "mod": 3,
            "name": "pen"
        }
    ]
}
```

### Mudando o apelido de um guerreiro

Use um comando como o abaixo para mudar o apelido de um guerreiro (obs.: não estou criando um arquivo separado com o corpo da requisição porque aqui trata-se um JSON muito simples)

```
$ curl -d '{ "nickname":"Candeia de Arras" }' -H "Content-Type: application/json" -X PUT http://localhost:8000/knights/5c49219d94ef1a2c51a7160c | python -m json.tool
```
Exemplo de resposta
```
{
    "__v": 0,
    "_id": "5c49219d94ef1a2c51a7160c",
    "attributes": {
        "_id": "5c49219d94ef1a2c51a7160e",
        "charisma": 0,
        "constitution": 0,
        "dexterity": 0,
        "intelligence": 0,
        "strength": 0,
        "wisdom": 0
    },
    "birthday": "1758-05-06T03:00:00.000Z",
    "keyAttribute": "strength",
    "name": "Robespierre",
    "nickname": "Incorruptible",
    "weapons": [
        {
            "_id": "5c49219d94ef1a2c51a7160d",
            "attr": "strength",
            "equipped": true,
            "mod": 3,
            "name": "guillotine"
        }
    ]
}
```

### Obtendo um guerreiro específico

Use um comando como o abaixo
```
$ curl -s -H "Content-Type: application/json" -X GET http://localhost:8000/knights/5c48fead5e22476990f31a69 | python -m json.tool
```
Exemplo de resposta
```
{
    "__v": 0,
    "_id": "5c48fead5e22476990f31a69",
    "attributes": {
        "_id": "5c48fead5e22476990f31a6c",
        "charisma": 0,
        "constitution": 0,
        "dexterity": 0,
        "intelligence": 0,
        "strength": 0,
        "wisdom": 0
    },
    "birthday": "1878-07-19T03:00:00.000Z",
    "keyAttribute": "strength",
    "name": "Iakov Iourovski",
    "nickname": "IA2",
    "weapons": [
        {
            "_id": "5c48fead5e22476990f31a6b",
            "attr": "strength",
            "equipped": true,
            "mod": 3,
            "name": "gun"
        },
        {
            "_id": "5c48fead5e22476990f31a6a",
            "attr": "strength",
            "equipped": true,
            "mod": 3,
            "name": "riffle"
        }
    ]
}
```

