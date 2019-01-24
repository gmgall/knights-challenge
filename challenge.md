# Knights Challenge

O desafio __Knights__ visa a construção de um portal utilizando:

  * Angular 2+ | Vue.js
  * NodeJS (express)
  * MongoDB | Redis

## Requisitos

### [GET] /knights

Exibe a lista com todos os __knights__.

#### [GET] /knights?filter=heroes

Exibe uma lista contendo apenas os guerreiros que se tornaram heróis.

### [POST] /knights

Cria um novo __knight__.

### [GET] /knights/:id

Mostra informações de um __knight__

### [DELETE] /knights/:id

Remove um guerreiro. Esse guerreiro deve entrar no **Hall of Heroes**.

### [UPDATE] /knights/:id

Permite alterar o apelido.

## Regras

### Lista de Knights

A lista deve ter:

  * Nome: Nome do __knight__
  * Idade: Anos corridos desde o nascimento
  * Armas: Quantidade de armas
  * Atributo: Atributo chave do __knight__
  * Ataque: Poder de ataque ([Como calcular](#ataque))
  * Exp: Experiência ([Como calcular](#experiencia))

| Nome | Idade | Armas | Atributo | Ataque | Exp |
|------|-------|-------|----------|--------|-----|
| Sr. Morte | 300 | 2 | Strength | 22 | 25904 |

### Knight

O knight deve seguir o esquema abaixo:

```json
{
  "name": "",
  "nickname": "",
  "birthday": "",
  "weapons": [
    {
      "name": "sword",
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
    "charisma": 0,
  },
  "keyAttribute": "strength"
}
```

#### Experiência

Um __knight__ só começa seu treinamento a partir dos 7 anos de idade. Antes
disso, sua experiência de combate é 0.

A experiência de um __knight__ é dada por:

```node
exp = Math.floor((age - 7) * Math.pow(22, 1.45))
```

#### Ataque

O ataque de um __knight__ é dado por:

```node
attack = 10 + mod(keyAttr) + equippedWeapon.mod
```

##### Modificadores de atributos

Os valores dos atributos devem ser ajustados seguindo a tabela abaixo.

| Valor   | Mod |
|---------|-----|
| 0 - 8   | -2  |
| 9 - 10  | -1  |
| 11 - 12 |  0  |
| 13 - 15 | +1  |
| 16 - 18 | +2  |
| 19 - 20 | +3  |

