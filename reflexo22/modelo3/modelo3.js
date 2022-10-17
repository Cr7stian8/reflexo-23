function comprar(){
    let tamanho = document.getElementById("tamanho");
    if(tamanho.value == "p"){
        window.location.href = "https://mpago.la/17pH8dM";
    }
    else if(tamanho.value == "m"){
        window.location.href = "https://mpago.la/23ZVkjS";
    }
    else{
        window.location.href = "https://mpago.la/2rkUJ77";
    }
}