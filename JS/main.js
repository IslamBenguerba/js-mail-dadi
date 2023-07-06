const listaEmail = ['luca.rossi@gmail.com', 'marco,rossi@gmail.com']
let spanEmail = document.getElementById('risultato')
const bottone = document.getElementById('ricerca')
bottone.addEventListener("click", ricerca)

let tuaEmail = document.getElementById('my-email')
let proavaEmail = ''

function ricerca() {

    let proavaEmail = tuaEmail.value
    console.log(proavaEmail)
    for (i = 0; i < listaEmail.length; i++) {
        if (proavaEmail === listaEmail[i]) {
            console.log(`${listaEmail[i]} questa è la ewmail`)
            spanEmail.innerHTML = `la tua email ${proavaEmail} ce`
            break
        } else{
            spanEmail.innerHTML = `non ce la tua email`
        }
    }
    
}
// -----------------------SECONDO ESERCIZIO---------------------------------
const btnNumeri = document.getElementById('btn-numeri')
btnNumeri.addEventListener("click",confronto)
function confronto(){
    const numeroTuo = document.getElementById('numeroin').value
    let numerowriteTuo = document.getElementById('il-tuo-numero')
    let Vincitore = document.getElementById('winner')
    let numeropc =  Math.floor(Math.random()*6 )
    let numerowritePc = document.getElementById('il-numero-pc')
    numerowritePc.innerHTML = `il numero del pc ${numeropc} `
    numerowriteTuo.innerHTML = `il  numero  ${numeroTuo}`
    if (numeroTuo < numeropc){
        Vincitore.innerHTML = `il numero vincente è ${numeropc}`
    }else if (numeroTuo > numeropc){
        Vincitore.innerHTML = `il numero vincente è ${numeroTuo}`
    }

}

