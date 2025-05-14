<script>
    // Pega o elemento canvas com id 'meuGrafico' e acessa o contexto 2D para desenhar
    const ctx = document.getElementById('meuGrafico').getContext('2d');

    // Cria o gráfico usando a biblioteca Chart.js
    const meuGrafico = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico: 'bar' = barras verticais (colunas)

        data: {
            labels: ['Peça 1', 'Peça 2', 'Peça 3'], // Nomes que aparecem no eixo X

            datasets: [{
                label: 'Quantidade em estoque', // Nome do conjunto de dados (legenda)
                data: [10, 5, 3], // Quantidades de cada peça (aparece no eixo Y)

                // Cor de preenchimento das barras
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],

                // Cor da borda das barras
                borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],

                borderWidth: 1 // Espessura da borda das barras
            }]
        },

        options: {
            responsive: true, // Faz o gráfico se ajustar automaticamente ao tamanho da tela

            scales: {
                y: {
                    beginAtZero: true // Faz o eixo Y começar do zero, mesmo que os dados sejam maiores
                }
            }
        }
    });
</script>
