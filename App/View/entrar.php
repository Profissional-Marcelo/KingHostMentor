<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Host Mentor - Conecte-se</title>
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="stylesheet" href="../../Assets/css/entrar.css" media="all">
    <link rel="stylesheet" href="../../Assets/css/entrarMQ.css">
</head>
<body>
    <header>
             <div class="container">
                 <a href="paginaInicial.php"><img src="../../Assets/img/back.png" alt="botão voltar" id="back"></a>
                 <span id="burguer" class="material-icons">menu</span>
             </div>
           
            
            <menu class="janelaMenu" id="janelaMenuId">
                <ul class="modal">
                    <li><a href="paginaInicial.php">Voltar<span class="material-icons">home</span></a></li>
                    <li><a href="registro.php">Cadastrar<span class="material-icons">person</span></a></li>
                </ul>
                <p>Meus eternos agradecimentos por ter acompanhado esa página desde o começo!!!</p>
            </menu>
    </header>
    <main>
        <section id="login">
                <div id="imagem">
                </div>
            <div id="formulario">
                <h1>Faça login</h1>
                <p>Seja bem-vindo(a) novamente! Faça login para acessar sua conta ou cadastre-se <a href="registro.php">aqui.</a></p>
                <form action="login.php" method="post" autocomplete="on">
                    <div class="campo">
                        <span class="material-icons">person</span>
                        <input type="email" name="login" id="ilogin" placeholder="Seu e-mail" autocomplete="email" required maxlength="30">
                        <label for="ilogin">Login</label>
                    </div>
                    <div class="campo">
                        <span class="material-icons">vpn_key</span>
                        <input type="password" name="senha" id="isenha" placeholder="sua senha" autocomplete="current-password" required minlength="6" maxlength="20">
                        <label for="isenha">Senha</label>
                    </div>
                    <input type="submit" value="Entrar">
                    <a href="recuperarSenha.php" class="botao">Esqueci a senha <span class="material-icons">mail</span></a>
                </form>
            </div>
        </section>
    </main>
    <script src="../js/entrar.js">
        
    </script>
</body>
</html>