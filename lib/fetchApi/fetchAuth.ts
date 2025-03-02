import axiosBase from "./base";
import { RegisterUserType } from "./zodTypesSchemas/auth";

export async function postRegister(data: RegisterUserType) {
    axiosBase.post("/auth/register", data, { withCredentials: false });
}
