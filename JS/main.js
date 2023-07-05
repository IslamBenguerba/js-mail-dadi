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
