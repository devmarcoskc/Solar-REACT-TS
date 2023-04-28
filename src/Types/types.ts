export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    AboutUs = "aboutus",
    HowWeWork = "howwework",
    SolarPanels = "solarpanels",
    Simulation = "simulation",
    ContactUs = "contactus"
}

export type SimulationType = {
    name: string;
    email: string;
    value: number;
    lat: string;
    lon: string;
}

export type LoginDataType = {
    email: string;
    password: string;
}

export type RegisterDataType = {
    name: string;
    lastname: string;
    email: string;
    password: string;
    confirmpassword: string;
}

export type ReducerActionType = {
    type: string;
    payload: {
        [key: string]: any;
    }
}

export type UserDataInfoType = {
    name: string;
    lastname: string;
    email: string;
    password: string;
    confirmpassword: string;
    cartItem: string[];
}
