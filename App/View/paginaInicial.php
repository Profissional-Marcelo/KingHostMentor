<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Host Mentor</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="shortcut icon" href="../../Assets/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../../Assets/css/home.css" media="all">
    <link rel="stylesheet" href="../../Assets/css/homeMQ.css">
</head>

<body>
    <header>
        <span id="burguer" class="material-icons">menu</span>
        <menu id="lista">
            <ul id="menuPrincipal">
                <li>
                    <button id="btnDominio">Dominio</button>
                    <ul id="menuDominio" class="menuDominio">
                        <li>
                            <button id="btnWhois">Whois Internacional</button>
                            <ul id="menuWhois" class="">
                                <li><a href="https://www.whois.com/whois/" target="frame">iframe</a></li>
                                <li><a href="https://www.whois.com/whois/" target="_blank">Externo</a></li>
                            </ul>
        
        
                        </li>
                        <li>
                            <a href="https://registro.br/tecnologia/ferramentas/whois/" target="_blank" id="btnRegistro" class="externo">Registro BR </a>
        
        
                        </li>
                        <li>
                            <button id="btnDns">DNS Lookup</button>
                            <ul id="menuDns" class="">
                                <li><a href="https://www.nslookup.io/" target="frame">iframe</a></li>
                                <li> <a href="https://www.nslookup.io/" target="_blank">Externo</a></li>
                            </ul>
        
        
                        </li>
                    </ul>
                </li>
                <li>
                    <button id="btnEmail">E-mail</button>
                    <ul id="menuEmail">
                        <li>
                            <button id="btnBlock">Block List</button>
                            <ul id="menuBlock" class="">
                                <li><a href="https://mxtoolbox.com/blacklists.aspx" target="frame">iframe</a></li>
                                <li> <a href="https://mxtoolbox.com/blacklists.aspx" target="_blank">Externo</a></li>
                            </ul>
                        </li>
                        <li>
                            <button id="btnMailsTest" class="externo">E-mails Teste </button>
                            <ul id="menuMailsTest" class="">
                                <li><a href="https://conta.uol.com.br/login?t=bol&env=visitante&dest=https://bmail.uol.com.br/login/check_session" target="_blank">Bol</a></li>
                                <li> <a href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&ec=GAlASw&hl=pt_BR&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-854889320%3A1695866776372903&theme=glif" target="_blank">Gmail</a></li>
                                <li><a href="https://mail.terra.com.br/" target="_blank">Terra</a></li>
                                <li><a href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=16&ct=1695866899&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f0%2f%3fnlp%3d1%26state%3d1%26redirectTo%3daHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC9pbmJveC8%26RpsCsrfState%3d56e7a0e4-b2d1-65d9-b530-b72a0ae903e2&id=292841&aadredir=1&whr=hotmail.com&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015" target="_blank">Outlook</a></li>
                                <li><a href="https://login.yahoo.com/?.src=ym&pspid=159600001&activity=mail-direct&.lang=pt-BR&.intl=br&.done=https%3A%2F%2Fmail.yahoo.com%2Fd" target="_blank">Yahoo</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <button id="btnIntranet">Intranet</button>
                    <ul id="menuIntranet" class=".menuIntranet">
                        <li>
                            <a href="https://intranet.kinghost.com.br:56001/" target="_blank" class="externo">Home</a>
                        </li>
                        <li>
                            <a href="https://intranet.kinghost.com.br:56001/kinghost.cgi" target="_blank" class="externo">Busca</a>
                        </li>
                        <li>
                            <a href="https://intranet.kinghost.com.br:56001/gerencia.queue.php" target="_blank" class="externo">Fila</a>
                        </li>
                        <li>
                            <a href="https://intranet.kinghost.com.br/kinghost.cgi?ficha=PREENCHAAQUI" target="_blank" class="externo">Pré-ID</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <button id="btnEncurtador">Encurtador</button>
                    <ul id="menuEncurtador" >
                        <li><a href="#" target="_blank" onclick="iniciar()" class="externo">Iniciar</a></li>
                        <li><a href="#" target="_blank" onclick="abrirRecursos()" class="externo">Abrir Recursos</a></li>
                        <li><a href="https://get.teamviewer.com/suporte-kinghost" target="_blank" class="externo">Team Viewer</a></li>
                    </ul>
                </li>
                <li>
                    <button id="btnRede">Rede</button>
                    <ul id="menuRede">
                        <li>     
                             <button id="btnMeuIp">Meu IP</button>
                                <ul id="menuMeuIp" class="">
                                    <li><a href="https://meuip.com.br/" target="frame">iframe</a></li>
                                    <li> <a href="https://meuip.com.br/" target="_blank">Externo</a></li>
                                </ul>
                        </li>
                        <li>
                            <a href="https://intranet.kinghost.com.br:56001/infra/si/bloqueio-ip.php" target="_blank" class="externo">Bloqueio KH</a>
                        </li>
                        <li>
                            <button id="btnProxy">Proxys</button>
                            <ul id="menuProxy">
                               <li>
                                <a href="https://www.proxysite.com/pt/" target="frame">Proxy Site <span class="sigla">(iframe)</span></a><a href="https://www.proxysite.com/pt/" target="_blank"> <span class="sigla">- (externo)</span></a>
                               </li>
                               <li>
                                <a href="http://kproxy.com/" target="frame">KProxy <span class="sigla">(iframe)</span></a>
                                <a href="http://kproxy.com/" target="_blank">- <span class="sigla">(externo)</span></a>
                               </li>
                               <li>
                                <a href="https://translate.google.com.br/?hl=pt-BR" target="_blank" class="externo">Tradutor</a>
                               </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <button id="btnVideos">Vídeos</button>
                    <ul id="menuVideos" class="">
                        <li>
                            <button id="btnVideoUm">Atendimentos na prática</button>
                            <ul id="menuVideoUm">
                                <li><a href="https://www.youtube.com/embed/ASbI3RPJCzw?si=EgIsHHTjx0FNDraC" target="video" class="iframeVideo">iframe</a></li>
                                <li><a href="https://www.youtube.com/watch?v=ASbI3RPJCzw" class="iframeVideo" target="_blank">Externo</a></li>
                            </ul>
                            <button id="btnVideoDois">
                                Atendimentos na prática v2
                            </button>
                            <ul id="menuVideoDois">
                                <li><a href="https://www.youtube.com/embed/iJHR3FW8OX8?si=Jmm_RTJOBHTXFuUP" target="video" class="iframeVideo">iframe</a></li>
                                <li><a href="https://www.youtube.com/embed/iJHR3FW8OX8?si=Jmm_RTJOBHTXFuUP" target="_blank">externo</a></li>
                            </ul>
        
                        </li>
                </li>
            </ul>
        </menu>
        <span class="botoesInforme">
            <a href="entrar.php" id="entrar">Entrar <span class="material-icons">person</span></a>
            <a href="#" id="registrar">Registrar</a>
        </span>
    </header>
    <main>
        <section id="section-iframe">
            <iframe name="frame" frameborder="1"></iframe>
        </section>
        <button id="btnGameQuiz"><img src="../../Assets/img/console-G.png" alt="Game Quiz" class="console"></button>
        <section id="section-gameQuiz">
            
            <ul id="menuQuiz" class="">
                <section class="container">
                    <li><a href="gameQuiz.php"><img src="../../Assets/img/btnJogar.png" alt=""></a></li>
                    <li> <a href="#" target=""><img src="../../Assets/img/btnPlacar.png" alt=""></a></li>
                </section>
            </ul>
        </section>
        <section id="section-video">
            <iframe name="video" frameborder="0"></iframe>
        </section>
        <section id="section-passos">

        </section>
        <section id="section-mapa">

        </section>
    </main>
    <script src="../../Assets/js/jquery.js"></script>
    <script src="../../Assets/js/home.js"></script>
    </script>
</body>

</html>

