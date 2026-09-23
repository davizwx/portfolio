function site() {
    let nome;
    let result;
    
    nome = prompt("Qual é o seu nome ?");
    result = window.document.getElementById('resultado');
    result.InnerHTML = `<p>Olá,  $(nome)! É um prazer te conhecer </p>`;
        
    
    
}