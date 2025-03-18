import api from "./base";
import { LoginUserType, RegisterUserType } from "./zodTypesSchemas/auth";

export async function postRegister(data: RegisterUserType) {
    return api.post("/auth/register", data, { withCredentials: false });
}

export async function postConfirmMail(token: string) {
    const url_token = "/auth/register/" + token;

    return api.post(url_token, null, { withCredentials: false });
}

export async function postLogin(data: LoginUserType) {
    return api.post("/auth/login", data, { withCredentials: true });
}

export async function getAuth(){
    return api.get("/auth", { withCredentials: true })
}

export async function postLogout(){
    return api.post("/auth/logout", { withCredentials: true })
}
