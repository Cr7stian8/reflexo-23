function comprar(){
    let tamanho = document.getElementById("tamanho");
    if(tamanho.value == "p"){
        window.location.href = "https://mpago.la/1ymBqsw";
    }
    else if(tamanho.value == "m"){
        window.location.href = "https://mpago.la/2nzneVb";
    }
    else{
        window.location.href = "https://mpago.la/1wVnteE";
    }
}