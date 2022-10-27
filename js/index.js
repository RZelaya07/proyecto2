var valorActual = 0;


const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');

boton1.addEventListener('click', function onClick(event) {
    cambiarColor();
});

boton2.addEventListener('click', function onClick(event) {
//document.body.style.color = 'darkgreen';
cambiarColor();
});

boton3.addEventListener('click', function onClick(event) {
//document.body.style.color = 'darkgreen';
cambiarColor();
});

document.getElementById('principal').innerHTML = valorActual;
function aumentar(){
    console.log("Llama a aumentar");
    valorActual+= 1;
    document.getElementById('principal').innerHTML = valorActual;
}

function restar(){
    console.log("Llama a aumentar");
    valorActual-= 1;
    document.getElementById('principal').innerHTML = valorActual;
}

function reset(){
    console.log("Llama a aumentar");
    valorActual = 0;
    //return valorActual;
    document.getElementById('principal').innerHTML = valorActual;
}

function cambiarColor(){
    if(valorActual >0){
        document.getElementById('principal').style.color = "#1b8f36";
    }else if(valorActual == 0){
        document.getElementById('principal').style.color = "#1b4d8f";
    }else{
        document.getElementById('principal').style.color = "#8f1b1b";
    }
}