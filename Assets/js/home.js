const burguer = document.querySelector('span#burguer')
burguer.addEventListener('click', clicar)

function clicar(){
    let menu = document.querySelector('menu#lista')
    if (menu.style.display == 'none'){
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    }
}



$("#btnDominio").click(()=>{
    $("#menuEmail").hide();
    $("#menuIntranet").hide();
    $("#menuEncurtador").hide();
    $("#menuRede").hide();
    $('#menuVideos').hide();
    $("#menuDominio").toggle();
});

$("#btnEmail").click(()=>{
    $("#menuDominio").hide();
    $("#menuIntranet").hide();
    $("#menuEncurtador").hide();
    $("#menuRede").hide();
    $('#menuVideos').hide();
    $("#menuEmail").toggle();
});

$("#btnIntranet").click(()=>{
    $("#menuEmail").hide();
    $("#menuDominio").hide();
    $("#menuEncurtador").hide();
    $("#menuRede").hide();
    $('#menuVideos').hide();
    $("#menuIntranet").toggle();
});

$("#btnEncurtador").click(()=>{
    $("#menuEmail").hide();
    $("#menuDominio").hide();
    $("#menuIntranet").hide();
    $("#menuRede").hide();
    $('#menuVideos').hide();
    $("#menuEncurtador").toggle();
});

$("#btnRede").click(()=>{
    $("#menuEmail").hide();
    $("#menuDominio").hide();
    $("#menuIntranet").hide();
    $("#menuEncurtador").hide();
    $('#menuVideos').hide();
    $("#menuRede").toggle();
});

$("#btnVideos").click(()=>{
    $("#menuEmail").hide();
    $('#menuDominio').hide();
    $('#menuIntranet').hide();
    $('#menuEncurtador').hide();
    $('#menuRede').hide();
    $('#menuVideos').toggle();
});


//SUBMENU

//DOMINIO
$("#btnWhois").click(()=>{
    $("#menuDns").hide();
    $("#menuWhois").toggle();
});

$("#btnDns").click(()=>{
    $("#menuWhois").hide();
    $("#menuDns").toggle();
});

//E-MAIL
$("#btnBlock").click(()=>{
    $("#menuMailsTest").hide();
    $("#menuBlock").toggle();
});

$("#btnMailsTest").click(()=>{
    $("#menuBlock").hide();
    $("#menuMailsTest").toggle();
});


//Rede
$("#btnMeuIp").click(()=>{
    $("#menuProxy").hide();
    $("#menuMeuIp").toggle();
});

$("#btnProxy").click(()=>{
    $("#menuMeuIp").hide();
    $("#menuProxy").toggle();
})
//Youtube
$("#btnVideoUm").click(()=>{
    $("#menuVideoDois").hide();
    $("#menuVideoUm").toggle();
});

$("#btnVideoDois").click(()=>{
    $("#menuVideoUm").hide();
    $("#menuVideoDois").toggle();
});

//Abrir iframe nos vídeos
$(".iframeVideo").click(()=>{
    $("#section-video").toggle();
})

//GameQuiz

$("#btnGameQuiz").click(()=>{
    $("#menuQuiz").toggle();
});