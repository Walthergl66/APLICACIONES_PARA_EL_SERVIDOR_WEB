import {ConsultAll, ConsultById, CrearVista, insertUser, userDelete, userUpdate} from './crud'
import { iniciar } from './database'

async function main() {
    await iniciar()
    const newUser = await insertUser('Juan', 'juenitogmail.com', '123456')
    
    const vista = await CrearVista("vista reporte de produccion", newUser.id);
    console.log(vista);

    const vistaDelete = await userDelete(vista!.id);
    console.log("Vista eliminada ", vistaDelete)

    const user = await ConsultAll();
    console.log("Consulta general ", user)
    // console.log(juan)

    const userOne = await ConsultById(newUser.id);
    console.log("COnsulta individual ", userOne)

    const useUpdate = await userUpdate(newUser.id, 'pepito', 'pepitogmail.com', '123456')
    console.log("dato actualizado ", useUpdate)

    const useDelete = await userDelete(newUser.id)
    console.log("usuario eliminado ", useDelete)

    
}

main()
    // .then(() => {
    //     console.log("Aplicacion iniciada correctamente")
    // })
    // .catch((error) => {
    //     console.log("Error en la aplicacion: ", error)
    // })