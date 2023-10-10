const frm= document.querySelector("form") const resp = document.querySelector("h3")

//ouvinte

frm addEventListener("submit", (e) =>{

e.preventDefault()

const permitida Number (frm.inPermitida.value) let leve permitida + (permitida * 0.2)

const condutor = Number(frm. inCondutor.value)

if(condutor <= permitida) { ⚫resp.innerText = 'Situação: Sem Multa

else if(condutor <- leve)

resp.innerText = "Situação: Multa Leve

else {

resp.innerText = Multa grave