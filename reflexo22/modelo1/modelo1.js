function comprar(){
    let tamanho = document.getElementById("tamanho");
    if(tamanho.value == "p"){
        window.location.href = "https://mpago.la/117TkGA";
    }
    else if(tamanho.value == "m"){
        window.location.href = "https://mpago.la/2yGXVzJ";
    }
    else{
        window.location.href = "https://mpago.la/2PbrJQo";
    }
}