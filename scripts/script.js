let cantidad = 0;
let salario = 0;
let extra = 0;

function Calcular(){

    cantidad = document.getElementById('cantidad').value; 
    
console.log(cantidad)
if(cantidad>=1 && cantidad<=40){
    salario = cantidad * 16000
    document.getElementById('salario').value = salario;
    document.getElementById('salarioextra').value = 0;
    document.getElementById('total').value = salario;
}
else{
    extra = cantidad - 40;
    salario = (extra * 20000) + (40*16000)
    document.getElementById('salario').value = 40*16000;
    document.getElementById('salarioextra').value = extra*20000;
    document.getElementById('total').value = salario;
}
 

}