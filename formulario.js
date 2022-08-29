import app from "./farebase.js"
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToFormulario(subscription) {
    const db = getFirestore(app)    
    const testeFormularioCollection = collection(db, 'teste-formulario')
    const docRef = await addDoc(testeFormularioCollection, subscription)
    return docRef.id
}
