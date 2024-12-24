
function calcularDiaria() {
    var checkin = document.getElementById('checkin')
    console.log(checkin.value)
    var checkout = document.getElementById('checkout')
    console.log(checkout.value)
    calcularDiaria

    var date1 = new Date(checkin.value);
    var date2 = new Date(checkout.value);
    console.log(date1, '****', date2)
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    // alert(diffDays);



    var diaria = 190
    var resultado = diffDays * diaria
   

    if (diffDays >= 2) {
        console.log('ok')
    }

    else if (diffDays <= 2)
        console.log('erro')


    console.log('resultado =', resultado)


 



    // exibir resultado na tela
    document.appendChild



}

