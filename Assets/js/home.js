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
    $("#menuInfranet").hide();
    $("#menuEncurtador").hide();
    $("#menuRede").hide();
    $("#menuDominio").toggle();
});

$("#btnEmail").click(()=>{
    $("#menuDominio").hide();
    $("#menuInfranet").hide();
    $("#menuEncurtador").hide();
    $("#menuRede").hide();
    $("#menuEmail").toggle();
});

$("#btnInfranet").click(()=>{
    $("#menuEmail").hide();
    $("#menuDominio").hide();
    $("#menuEncurtador").hide();
    $("#menuRede").hide();
    $("#menuInfranet").toggle();
});

$("#btnEncurtador").click(()=>{
    $("#menuEmail").hide();
    $("#menuDominio").hide();
    $("#menuIntranet").hide();
    $("#menuRede").hide();
    $("#menuEncurtador").toggle();
});

$("#btnRede").click(()=>{
    $("#menuEmail").hide();
    $("#menuDominio").hide();
    $("#menuInfranet").hide();
    $("#menuEncurtador").hide();
    $("#menuRede").toggle();
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