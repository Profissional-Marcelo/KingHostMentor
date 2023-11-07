function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function carregar() {
  const h1 = document.getElementById('pergunta');
  const op1 = document.getElementById('option1');
  const op2 = document.getElementById('option2');
  const op3 = document.getElementById('option3');
  const op4 = document.getElementById('option4');

  let respostaCorreta;
  
  op1.addEventListener('click', responder);
  op2.addEventListener('click', responder);
  op3.addEventListener('click', responder);
  op4.addEventListener('click', responder);

  function responder() {
    if (respostaCorreta === 1) {
      op1.classList.add('correto');
      op2.classList.add('errado');
      op3.classList.add('errado');
      op4.classList.add('errado');
    } 
    if (respostaCorreta === 2) {
      op1.classList.add('errado');
      op2.classList.add('correto');
      op3.classList.add('errado');
      op4.classList.add('errado');
    } 
    if (respostaCorreta === 3) {
      op1.classList.add('errado');
      op2.classList.add('errado');
      op3.classList.add('correto');
      op4.classList.add('errado');
    } 
    if (respostaCorreta === 4) {
      op1.classList.add('errado');
      op2.classList.add('errado');
      op2.classList.add('errado');
      op4.classList.add('correto');
    } 
    
    setTimeout(gerarNovaPergunta, 2000);
  }

  function gerarNovaPergunta() {
    let aleatorio = getRandomNumber(1, 3);
    op1.classList.remove('correto', 'errado');
    op2.classList.remove('correto', 'errado');
    op3.classList.remove('correto', 'errado');
    op4.classList.remove('correto', 'errado');

    switch (aleatorio) {
      case 1:
        h1.innerHTML = "Em caso do cliente não passar a senha de atendimento, podemos fazer...?"
        op1.innerHTML = "Nada, o cliente que se vire!";
        op2.innerHTML = "Mandamos um link de recuperação via CPF ou CNPJ, onde o cliente insere seus dados que passaram por uma análise que leva em média 24 horas.";
        op3.innerHTML = "Xingamos o cliente para que ele aprenda a não cometer o mesmo erro.";
        op4.innerHTML = "Ajudamos o cliente a tirar suas dúvidas e até passamos a senha caso o mesmo pergunte.";
        respostaCorreta = 2;
        break;
      case 2:
        h1.innerHTML = "O que é SMTP transacional?"
        op1.innerHTML = "Não existe na King Host"
        op2.innerHTML = "Permite disparo de e-mails ilimitados"
        op3.innerHTML = "Serve para disparar e-mail quando uma situação específica for acionada por meio de uma API."
        op4.innerHTML = "Substitui o e-mail marketing"
        respostaCorreta = 3;
        break;
      case 3:
        h1.innerHTML = "Após apontarmos os DNS na Registro BR, qual o período de propagação DNS, para que tudo comece a funcionar?"
        op1.innerHTML = "Cerca de 24 horas"
        op2.innerHTML = "Cerca de 48 horas"
        op3.innerHTML = "Nada, é instantâneo"
        op4.innerHTML = "Poucas HORAS"
        respostaCorreta = 1;
        break;
    }
  }

  gerarNovaPergunta();
}
