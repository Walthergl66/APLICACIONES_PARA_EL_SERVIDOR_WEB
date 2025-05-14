import { View } from "./models/view";
import {AppDataSource} from "./data-source";
import { User } from "./models/user";

export const insertUser = async (name: string, email: string, password: string) => {
    const user1 = new User();
    user1.name = name;
    user1.email = email;
    user1.password = password;
    AppDataSource.manager.insert
    return await AppDataSource.manager.save(user1);
}

export const ConsultAll = async () => {
    return await AppDataSource.manager.find(User);
}

export const ConsultById = async (id: number) => {
    return await AppDataSource.manager.findOne(User, {where: {id}})
}   

export const userUpdate = async (id: number, name: string, email: string, password: string) => {
    const user1 = await ConsultById(id);
    if (user1) {
        user1.name = name;
        user1.email = email;
        user1.password = password;
        return await AppDataSource.manager.save(user1);
    } 
    return "Usuario no encontrado";

}
export const userDelete = async (id: number) => {
    const user1 = await ConsultById(id);
    if (user1) {
        return await AppDataSource.manager.remove(user1);
    } 
    return "Usuario no encontrado";
}

export const CrearVista = async (vista: string, userid:number) => {
    const user = await ConsultById(userid)
    if (user) {
        const newView = new View()
        newView.vista = vista
        newView.users = user
        return await AppDataSource.manager.save((newView))
    }
}

export const viewDelete = async (id: number) => {
    const view1 = await AppDataSource.manager.findOne(View, {where:{id}})
    if (view1) {
        return await AppDataSource.manager.remove(view1);
    } 
    return "Vista no encontrada";
}

