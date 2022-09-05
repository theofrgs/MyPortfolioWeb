import AuthController from "./AuthController"

export default class GoogleController extends AuthController {

    static async login(autorizationCode) {
        const rslt = app.post(`/auth/login/google/`, { autorizationCode: autorizationCode })

        console.log(rslt)
        return rslt
    }

    static async signin(autorizationCode) {
        const rslt = app.post(`/auth/signin/google/`, { autorizationCode: autorizationCode })

        console.log(rslt)
        return rslt
    }
}
