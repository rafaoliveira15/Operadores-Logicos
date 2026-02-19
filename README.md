# 📘 Operadores Lógicos em JavaScript

Projeto educacional desenvolvido para demonstrar, de forma prática e interativa, o funcionamento dos principais operadores lógicos em JavaScript.

Cada operador possui uma página HTML independente com campos para entrada de valores numéricos e exibição detalhada do resultado das condições avaliadas.

---

## 🎯 Objetivo

Este projeto tem como finalidade:

- Demonstrar o funcionamento dos operadores lógicos `&&`, `||` e `!`
- Explicar como condições booleanas são combinadas
- Permitir testes práticos digitando diferentes valores
- Exibir o resultado lógico em tempo real
- Reforçar o entendimento de expressões booleanas

---

## 🧠 Operadores Abordados

| Operador | Nome | O que faz |
|----------|------|-----------|
| && | E lógico | Retorna `true` somente se todas as condições forem verdadeiras |
| \|\| | OU lógico | Retorna `true` se pelo menos uma condição for verdadeira |
| ! | NÃO lógico | Inverte o valor lógico (`true` vira `false` e vice-versa) |

---

## 📂 Estrutura do Projeto

```
📁 operadores-logicos-js
│
├── index(&&).html              → Operador &&
├── index2.html    → Operador ||
├── index(!).html  → Operador !
│
└── script1.js            → Lógica de verificação
│
└── script2.js            → Lógica de verificação
│
└── script3.js            → Lógica de verificação
```

Cada página possui sua própria lógica aplicada ao operador correspondente.

---

## 🔎 Operador && (E Lógico)

### ✔ Funcionamento

- O usuário digita três números
- O sistema verifica se cada número é maior que 5
- O operador `&&` combina as três condições

```javascript
const resultado = c1 && c2 && c3;
```

### 🔎 Regra

O operador `&&` retorna `true` apenas se **todas** as condições forem verdadeiras.

### 🧪 Exemplo

Valores digitados:

6, 7, 8  

Resultado:

true  

Se um dos valores for menor ou igual a 5, o resultado será:

false  

---

## 🔎 Operador || (OU Lógico)

### ✔ Funcionamento

- O sistema verifica se cada número é menor que 5
- O operador `||` combina as condições

```javascript
const resultado = c1 || c2 || c3;
```

### 🔎 Regra

O operador `||` retorna `true` se **pelo menos uma** condição for verdadeira.

### 🧪 Exemplo

Valores digitados:

2, 10, 15  

Resultado:

true  

Porque pelo menos um número é menor que 5.

---

## 🔎 Operador ! (Negação Lógica)

### ✔ Funcionamento

- O sistema verifica se o número é maior que 5
- O operador `!` inverte o valor lógico

```javascript
!c1
```

### 🔎 Regra

O operador `!` transforma:

- `true` → `false`
- `false` → `true`

### 🧪 Exemplo

Se:

```javascript
n1 > 5  // true
```

Então:

```javascript
!true   // false
```

---

## 🛠️ Tecnologias Utilizadas

- HTML5  
- JavaScript (Vanilla JS)  
- Manipulação do DOM  
- Operadores lógicos  
- Conversão de tipos com `Number()`  

---

## 📚 Conceitos Trabalhados

- Expressões booleanas  
- Combinação de condições  
- Operadores lógicos  
- Manipulação dinâmica do DOM  
- Conversão de valores  
- Estrutura de funções  

---

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/operadores-logicos-js.git
```

2. Abra qualquer arquivo `.html` no navegador.

Não é necessário servidor ou instalação adicional.

---

## 👩‍💻 Autora

**Rafaela Oliveira** 💙

Estudante de Desenvolvimento de Sistemas  

