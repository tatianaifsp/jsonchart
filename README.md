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

# 📦 Relatório de Estoque com Gráfico e PDF

Este projeto é uma aplicação web simples que carrega dados de estoque de um arquivo JSON, exibe os dados em um **gráfico de barras** com **Chart.js**, e gera um **relatório em PDF** com **jsPDF** contendo o gráfico e a lista de itens.

---

## 📊 Gráficos com Chart.js

A biblioteca [**Chart.js**](https://www.chartjs.org/) permite criar **gráficos interativos e responsivos** com apenas algumas linhas de código JavaScript.

Neste projeto, usamos um **gráfico de barras** para exibir visualmente as **quantidades em estoque** de cada peça.

### Outros tipos de gráficos suportados:

- 📈 Linha (`line`)
- 🍕 Pizza (`pie`)
- 🎯 Radar (`radar`)
- 🔵 Dispersão (`scatter`)

📘 **Documentação oficial do Chart.js:**  
🔗 [https://www.chartjs.org/docs/latest/](https://www.chartjs.org/docs/latest/)

---

