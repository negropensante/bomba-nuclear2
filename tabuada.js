const frm = document.querySelector("form")
const resp = document.querySelector("pre")


//ouvinte
frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    let resposta =""  //variavel do tipo String, para concatenar a resposta
//cria um laço de repetição
    for(let i =  1; 1 <= 10; i++){
        resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n"
    }
    resp.innerText = resposta

})

  
