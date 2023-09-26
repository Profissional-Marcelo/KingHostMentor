function abrirRecursos() {
    window.open('https://intranet.kinghost.com.br/kinghost.cgi?ficha=PREENCHAAQUI');
    window.open('https://intranet.kinghost.com.br/');
    window.open('https://www.whois.com/whois/')
    window.open('https://registro.br/tecnologia/ferramentas/whois/')
    window.open('https://www.nslookup.io/')
}

function iniciar() {
    window.open('https://rocketchat.kinghost.net/');
    window.open('https://expert.brasil.adp.com/ipclogin/1/loginform.html?TYPE=33554433&REALMOID=06-000a1470-e058-1656-b22f-441e0bf0d04d&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=-SM-Rzp3MZOuKy1YZE74SjZ3B3L3VgJdxtvy7ol1oAjLuMC6C5YIpcVA5SeL1rGK%2beBY&TARGET=-SM-https%3a%2f%2fexpert%2ebrasil%2eadp%2ecom%2fexpert%2fv4%2ftimesheet');
    window.open('https://owa.exchangehosting.com.br/owa/auth/logon.aspx?url=https%3a%2f%2fowa.exchangehosting.com.br%2fowa%2f&reason=0')
    window.open('https://intranet.kinghost.com.br/')
}

    let botao = window.document.getElementById('botaomenu');
    botao.addEventListener('click', clicar)

    function clicar(){
        let menu = window.document.getElementById('resmenu');
        if (menu.style.display === 'inline-block') {
            menu.style.display = 'none'; // Fecha a barra de menu
        } else {
            menu.style.display = 'inline-block'; // Abre a barra de menu
        }
        
    }
