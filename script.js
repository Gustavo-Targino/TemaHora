 function load () {
    //Mostrar hora
    var agora = new Date()
    var horaAtual = agora.getHours()
    var showHour = window.document.getElementById('showHour')
    showHour.innerHTML = `<p>Agora são ${horaAtual} horas.</p>`
    var imagemHora = window.document.getElementById('imageHour')
    //Imagem hora DIA
    if (horaAtual>=5 && horaAtual<=12) {
        window.document.body.classList.add('dayLight')
        imagemHora.innerHTML = '<img src="./assets/Imagem_da_manhã.png" alt="Foto da tarde entre as montanhas.">'
    }
    //Imagem hora TARDE
    else if (horaAtual>=13 && horaAtual<=17) {
        window.document.body.classList.add('afternoonLight')
        imagemHora.innerHTML= '<img src="./assets/Imagem_da_tarde.png" alt="Foto da tarde entre as montanhas.">'
    }
    //Imagem hora NOITE
    else {
        window.document.body.classList.add('nightLight')
        imagemHora.innerHTML = '<img src="./assets/Imagem_da_noite.png" alt="Foto da noite nas montanhas">'
    }
 }
 


 
