function calcularDiaria(chale, checkinId, checkoutId, resultadoId, hospedesId) {
    const diariaChale1 = 190;
    const diariaChale2Base = 480;
    const custoAdicionalPorPessoa = 120;
    const estadiaMinima = 2;
    const maxHospedes = 8;

    const checkin = document.getElementById(checkinId);
    const checkout = document.getElementById(checkoutId);
    const resultadoDiv = document.getElementById(resultadoId);
    const hospedesAdicionaisInput = hospedesId ? document.getElementById(hospedesId) : null;

    resultadoDiv.textContent = "";

    if (!checkin.value || !checkout.value) {
        return (resultadoDiv.textContent = "Por favor, preencha as datas de check-in e check-out.");
    }

    const dataCheckin = new Date(checkin.value);
    const dataCheckout = new Date(checkout.value);

    if (dataCheckout <= dataCheckin) {
        return (resultadoDiv.textContent = "A data de check-out deve ser posterior à de check-in.");
    }

    const diffDays = Math.ceil((dataCheckout - dataCheckin) / (1000 * 3600 * 24));
    if (diffDays < estadiaMinima) {
        return (resultadoDiv.textContent = `Estadia mínima: ${estadiaMinima} diárias.`);
    }

    const hospedesAdicionais = hospedesAdicionaisInput ? parseInt(hospedesAdicionaisInput.value, 10) || 0 : 0;
    const totalHospedes = 4 + hospedesAdicionais;
    if (totalHospedes > maxHospedes) {
        return (resultadoDiv.textContent = `Máximo permitido: ${maxHospedes} hóspedes.`);
    }

    const valorBase = chale === "chale1" ? diariaChale1 : diariaChale2Base + hospedesAdicionais * custoAdicionalPorPessoa;
    const valorTotal = diffDays * valorBase;

    resultadoDiv.textContent = `Total de diárias: ${diffDays}, Valor total: R$ ${valorTotal.toFixed(2)}`;
}