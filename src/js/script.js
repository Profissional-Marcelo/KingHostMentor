//MENU PRINCIPAL

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
    $("#menuRegistro").hide();
    $("#menuDns").hide();
    $("#menuWhois").toggle();
});

$("#btnDns").click(()=>{
    $("#menuRegistro").hide();
    $("#menuWhois").hide();
    $("#menuDns").toggle();
});

$("#btnRegistro").click(()=>{
    $("#menuDns").hide();
    $("#menuWhois").hide();
    $("#menuRegistro").toggle();
});

//E-MAIL
$("#btnBlock").click(()=>{
    $("#menuBol").hide();
    $("#menuGmail").hide();
    $("#menuOutlook").hide();
    $("#menuYahoo").hide();
    $("#menuBlock").toggle();
});

$("#btnBol").click(()=>{
    $("#menuBlock").hide();
    $("#menuGmail").hide();
    $("#menuOutlook").hide();
    $("#menuYahoo").hide();
    $("#menuBol").toggle();
});

$("#btnGmail").click(()=>{
    $("#menuBlock").hide();
    $("#menuBol").hide();
    $("#menuOutlook").hide();
    $("#menuYahoo").hide();
    $("#menuGmail").toggle();
});

$("#btnOutlook").click(()=>{
    $("#menuBlock").hide();
    $("#menuBol").hide();
    $("#menuGmail").hide();
    $("#menuYahoo").hide();
    $("#menuOutlook").toggle();
});

$("#btnYahoo").click(()=>{
    $("#menuBlock").hide();
    $("#menuBol").hide();
    $("#menuGmail").hide();
    $("#menuOutlook").hide();
    $("#menuYahoo").toggle();
});

//Youtube
$("#btnVideoUm").click(()=>{
    $("#menuVideoUm").toggle();
});