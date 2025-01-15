
function calcularDiaria(chale, nPessoas) {
    console.log(chale, nPessoas)
    // Obtém os elementos de entrada para check-in e check-out
    var checkin = document.getElementById('checkin');
    var checkout = document.getElementById('checkout');
    var resultadoDiv = document.getElementById('resultado');

    // Limpa a mensagem anterior
    resultadoDiv.textContent = "";

    // Verifica se os campos têm valores válidos
    if (!checkin.value || !checkout.value) {
        resultadoDiv.textContent = "Por favor, preencha as datas de check-in e check-out.";
        resultadoDiv.style.color = "red";
        return;
    }

    // Converte as datas em objetos Date
    var date1 = new Date(checkin.value);
    var date2 = new Date(checkout.value);

    // Verifica se a data de check-out é anterior à de check-in
    if (date2 <= date1) {
        resultadoDiv.textContent = "A data de check-out deve ser posterior à data de check-in.";
        resultadoDiv.style.color = "red";
        return;
    }

    // Calcula a diferença em dias
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // Verifica se o número de diárias é maior ou igual a 2
    if (diffDays >= 2) {
        // Calcula o valor total com base na diária
        var diaria = 190;
        if (chale == "chale2") {
            diaria = 420;
        }
        var resultado = diffDays * diaria;
        if (chale == 'chale2') {
            var mimino = 420
            if (nPessoas > 4) { 
                var acima = nPessoas - 4
                var maximo = 90 * acima
                resultado = diffDays * (mimino + maximo);


            }

        }
        // Exibe o resultado na div
        resultadoDiv.textContent = `Total de diárias: ${diffDays}, Valor total: R$ ${resultado.toFixed(2)}`;
        resultadoDiv.style.color = "blue";
    } else {
        resultadoDiv.textContent = "A estadia mínima é de 2 diárias.";
        resultadoDiv.style.color = "red";
    }

    // Exibe o resultado no console
    console.log("Resultado =", diffDays >= 2 ? resultado : "Estadia mínima não atendida");
}
