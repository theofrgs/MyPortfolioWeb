import AuthController from "./AuthController"

export default class NatifController extends AuthController {

    static async login(email, password) {
        const rslt = app.post(`/auth/login/email/`, { email: email, password: password })

        console.log(rslt)
        return rslt
    }

    static async signin(email, password) {
        const rslt = app.post(`/auth/signin/email/`, { email: email, password: password })

        console.log(rslt)
        return rslt
    }
}
