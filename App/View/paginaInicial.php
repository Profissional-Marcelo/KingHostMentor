<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Host Mentor</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="shortcut icon" href="../../Assets/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../../Assets/css/index.css" media="all">
    <link rel="stylesheet" href="src/css/indexMQ.css">
</head>
<body>
<header>
    <span id="burguer" class="material-icons">menu</span>
    <menu id="lista">
        <ul id="menuPrincipal">
            <li>
                <button id="btnWhois" class="botaoPrincipal">Domínio</button>
                <ul id="menuDominio" class="subMenu">
                    <li>
                        <button id="btnWhois" class="subBotao">Whois Internacional</button>
                        <ul class="abrirComo">
                            <li><a href="https://www.whois.com/whois/" target="frame">iframe</a></li>
                            <li><a href="https://www.whois.com/whois/" target="_blank" class="externo">Externo</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://registro.br/tecnologia/ferramentas/whois/" target="_blank" id="btnRegistro" class="externo subBotao">Registro BR</a>
                    </li>
                    <li>
                        <button id="btnDns" class="subBotao">DNS Lockup</button>
                            <ul id="menuDns" class="abrirComo">
                                <li><a href="https://www.nslookup.io/" target="frame">iframe</a></li>
                                <li> <a href="https://www.nslookup.io/" target="_blank" class="externo">Externo</a></li>
                            </ul>
                    </li>
                </ul>
                <button id="btnEmail" class="botaoPrincipal">E-mail</button>
                <ul id="menuEmail" class="subMenu">
                    <button>E-mails Teste</button>
                    <ul class="abrirComo">
                        <li><a href="https://conta.uol.com.br/login?t=bol&env=visitante&dest=https://bmail.uol.com.br/login/check_session" target="_blank" class="externo">Bol</a></li>
                        <li> <a href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&ec=GAlASw&hl=pt_BR&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-854889320%3A1695866776372903&theme=glif" target="_blank" class="externo">Gmail</a></li>
                        <li><a href="https://mail.terra.com.br/" target="_blank" class="externo">Terra</a></li>
                        <li><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=16&ct=1695866899&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f0%2f%3fnlp%3d1%26state%3d1%26redirectTo%3daHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC9pbmJveC8%26RpsCsrfState%3d56e7a0e4-b2d1-65d9-b530-b72a0ae903e2&id=292841&aadredir=1&whr=hotmail.com&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015" target="_blank" class="externo">Outlook</a></li>
                        <li><a href="https://login.yahoo.com/?.src=ym&pspid=159600001&activity=mail-direct&.lang=pt-BR&.intl=br&.done=https%3A%2F%2Fmail.yahoo.com%2Fd" target="_blank" class="externo">Yahoo</a></li>
                    </ul>
                </ul>
            </li>
        </ul>
    </menu>
    <span class="botoesInforme">
        <a href="#" id="entrar">Entrar  <span class="material-icons">person</span></a>
        <a href="#" id="registrar">Registrar</a>
    </span>
</header>
   
    <script src="src/js/jquery.js"></script>
    <script src="src/js/script.js"></script>
    </script>
</body>

</html>