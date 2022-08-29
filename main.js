
import { subscribeToFormulario } from "./formulario.js"


const txtNome = document.getElementById('nome')
const txtSobrenome = document.getElementById('sobrenome')

const btnSubscribe = document.getElementById('btn')

btnSubscribe.addEventListener('click', async () =>{
    const subscription = {
        nome: txtNome.value,
        sobrenome: txtSobrenome.value

    }

    //Salvar no banco de dados!
    const subscriptionId = await subscribeToFormulario(subscription)
    console.log(`Inscrito ${subscriptionId}`)
})