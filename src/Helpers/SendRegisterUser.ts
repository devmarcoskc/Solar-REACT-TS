import { RegisterDataType } from "../Types/types";
import { UserDataInfoType } from "../Types/types";

export const RegisterUser = async (data: RegisterDataType) => {
    if(data) {
        let Users:UserDataInfoType[] = [];

        if(localStorage.getItem('Users') === null) {
            localStorage.setItem('Users', JSON.stringify(Users));
        }

        Users = JSON.parse(localStorage.getItem('Users') || '[]');

        let CheckIfUserAlreadyExists = Users.some((user) => {
            if(user.email === data.email || user.password === data.password) {
                return true;
            }
        });

        if(CheckIfUserAlreadyExists) {
            return false;
        };

        let NewUserToPush: UserDataInfoType = {
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
            confirmpassword: data.confirmpassword,
            cartItem: []
        }
        
        Users.push(NewUserToPush); 
        localStorage.setItem('Users', JSON.stringify(Users));

        return true;
    }
}