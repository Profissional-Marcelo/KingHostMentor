



function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

function carregar(){
    const h1 = document.getElementById('pergunta')
    let aleatorio = getRandomNumber(1, 5)
    switch (aleatorio) {
      case 1:
        h1.innerHTML = "Em caso do cliente não passar a senha de atendimento, podemos fazer...?"
        "Nada, o cliente que se vire!"
        ""
      break;
      case 2:
        h1.innerHTML = "Pergunta 2"
      break;
      case 3:
        h1.innerHTML = "Pergunta 3"
      break;
      case 4:
        h1.innerHTML = "Pergunta 4"
      break;
      case 5:
        h1.innerHTML = "Pergunta 5"
      break;
    
    }
}

