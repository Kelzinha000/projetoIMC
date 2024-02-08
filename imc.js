const pesoEmKg = document.getElementById('pesoEmKg')
const alturaEmMetros = document.getElementById('alturaEmMetros')

const btn = document.getElementById('btn')
const respostaIMC = document.getElementById('respostaIMC')
const classImc = document.getElementById('classImc')


btn.addEventListener('click', function(){
    peso = Number(pesoEmKg.value)
    altura = Number(alturaEmMetros.value)
    let imc = ( peso /(altura * altura) )
      
   
    if(peso === 0 || isNaN(peso)){
        alert(`Por favor, digite seu peso novamente!`)
        return
    } else if (altura === 0 || isNaN(altura)){
        alert(`Por favor, digite seu altura novamente!`)
        return

        
    }
     if(imc > 40){
       document.getElementById("classImc").innerText=`Obesidade grau 3` 
 }else if(imc > 40){
    document.getElementById("classImc").innerText=`Obesidade grau 3` 
 }else if(imc >= 35 &&  imc <= 40){
    document.getElementById("classImc").innerText=`Obesidade grau 2` 
 }else if(imc >= 30 &&  imc < 34.9){
    document.getElementById("classImc").innerText=`Obesidade grau 1` 
 }else if(imc >= 25 &&  imc < 29.9){
    document.getElementById("classImc").innerText=`Acima do peso` 
  }else if(imc >= 18.5 && imc < 24.9){
    document.getElementById("classImc").innerText=`Peso normal` 
 }
 else if(imc >= 17 &&  imc < 18.4){
    document.getElementById("classImc").innerText=`Abaixo do peso` 
 }
 else if(imc <= 16.9){ 
    document.getElementById("classImc").innerText=`Muito abaixo do peso`   
  }

   document.getElementById("respostaIMC").innerHTML= `${imc.toFixed(2)}` // mostrar na pagina// inner text apesenta o texto, já o inner text permite texto 
})

