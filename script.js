function calcular(){
     let nota1trim = Number(prompt("digite a nota do primeiro trimestre:"))
     let nota2trim = Number(prompt("digite a nota do segundo trimestre:"))

     let resultado = 180-(nota1trim+nota2trim);
    alert("VoCê precisa de"  + resultado +" ponto para passar");
    if(resultado>=0){
    alert("VoCê passou! Curta a sua vida");
    } else{
      alert("VoCê precisa de"  + resultado +" ponto para passar");  
    }
}