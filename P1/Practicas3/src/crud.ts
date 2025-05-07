import {AppDataSource} from "./data-source";
import { user } from "./models/user";

export const insertUser = async (name: string, email: string, password: string) => {
    const user1 = new user();
    user1.name = name;
    user1.email = email;
    user1.password = password;
    AppDataSource.manager.insert
    return await AppDataSource.manager.save(user1);
}