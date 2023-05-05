import { RegisterDataType } from "../Types/types";

export const CheckUsers = async (email: string, password: string) => {
    let UsersToCheck:RegisterDataType[] = JSON.parse(localStorage.getItem('Users') || '[]');

    let name: string = '';
    let CheckingIfUserExistis = UsersToCheck.some((Users) => {
        if(Users.email === email && Users.password === password) {
            name = Users.name;
            return true;
        }
    });
    
    return {CheckingIfUserExistis, name}
};
