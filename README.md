# json+chart+PDF

# 📦 Relatório de Estoque Industrial com JSON, Gráfico e PDF

Este projeto demonstra uma aplicação **simples e funcional** para controle e visualização de dados de estoque em um ambiente industrial, utilizando tecnologias **puras do front-end**: HTML, CSS e JavaScript, com bibliotecas externas.

## 🔧 Funcionalidades

- ✅ Carrega dados de estoque de um arquivo `.json`
- 📊 Gera gráficos interativos com a biblioteca **Chart.js**
- 🖨️ Cria e exporta um **relatório em PDF** com o gráfico e os dados
- 💡 100% executado no navegador, sem necessidade de servidor

---

## 📁 Estrutura dos Dados (estoque.json)

O arquivo `estoque.json` contém a lista de peças em estoque:

```json
[
  {
    "nome": "Peça 1",
    "quantidade": 10,
    "local": "Armazém A"
  },
  {
    "nome": "Peça 2",
    "quantidade": 5,
    "local": "Armazém B"
  }
]
