import {insertUser} from './crud'
import { iniciar } from './database'

async function main() {
    await iniciar()
    const juan = await insertUser('Juan', 'juenitogmail.com', '123456')
    console.log(juan)
}

main()
    .then(() => {
        console.log("Aplicacion iniciada correctamente")
    })
    .catch((error) => {
        console.log("Error en la aplicacion: ", error)
    })