



function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

function carregar(){
    const h1 = document.getElementById('pergunta')
    const op1 = document.getElementById('option1')
    const op2 = document.getElementById('option2')
    const op3 = document.getElementById('option3')
    const op4 = document.getElementById('option4')

    let aleatorio = getRandomNumber(1, 2)
    switch (aleatorio) {
      case 1:
        h1.innerHTML = "Em caso do cliente não passar a senha de atendimento, podemos fazer...?"

        op1.innerHTML = "Nada, o cliente que se vire!"
        op2.innerHTML = "Mandamos um link de recuperação via CPF ou CNPJ, onde o cliente insere seus dados que passaram por uma análise que leva em média 24 horas."
        op3.innerHTML = "Xingamos o cliente para que ele aprenda a não cometer o mesmo erro."
        op4.innerHTML = "Ajudamos o cliente a tirar suas dúvidas e até passamos a senha caso o mesmo pergunte."

      break;
      case 2:
        h1.innerHTML = "Oque é SMTP transacional?"
        op1.innerHTML = "Não existe na King Host"
        op2.innerHTML = "Permite disparo de e-mails ilimitados"
        op3.innerHTML = "Serve para disparar e-mail quando uma situação específica for acionada por meio de uma API."
        op4.innerHTML = "Substitui o e-mail marketing"
      break;
    
    }
}

