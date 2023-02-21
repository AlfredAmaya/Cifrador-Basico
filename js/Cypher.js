var textarea_input = document.getElementById('textarea_input');
var textarea_output = document.getElementById('textarea_output')

var btn_descifrar = document.getElementById('boton_descifrar');
var btn_cifrar = document.getElementById('boton_cifrar');
var btn_copy = document.getElementById('boton_copiar');

var img_output = document.getElementById('imagen_output');


btn_descifrar.addEventListener("click",descifrar_texto);
btn_cifrar.addEventListener("click",cifrar_texto);
btn_copy.addEventListener("click",copiar_texto);

function cifrar_texto(){
   let input = textarea_input.value;
    input = input.toLowerCase();
   let output 


    img_output.style.width = '0%';
    img_output.style.visibility = 'hidden';
    
    textarea_output.style.width='90%';
    textarea_output.style.height='90%';

    (input.length);
    output = input.replace(/a/g,"AI").replace(/e/g,"ENTER").replace(/i/g,"IMES").replace(/o/g,"OBER").replace(/u/g,"UFAT");
    console.log(output);
    textarea_output.value = output.toLowerCase();

}

function descifrar_texto(){
    let input = textarea_input.value;
    input = input.toLowerCase();
   let output 


    img_output.style.width = '0%';
    img_output.style.visibility = 'hidden';
    
    textarea_output.style.width='90%';
    textarea_output.style.height='90%';

    (input.length);
    output = input.replace(/ai/g,"A").replace(/enter/g,"E").replace(/imes/g,"I").replace(/ober/g,"O").replace(/ufat/g,"U");
    console.log(output);

    textarea_output.value = output.toLowerCase();
}

function copiar_texto(){
    navigator.clipboard.writeText(textarea_output.value)
}