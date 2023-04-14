import { Injectable } from '@nestjs/common'

@Injectable({})
export class AuthService {
    signup() {
        return { msg: 'I have SIGNED UP' }
    }
    signin() {
        return { msg: 'I have SIGNED IN' }
    }
}
