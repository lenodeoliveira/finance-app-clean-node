import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 id no name is provided', () => {
    const sut = new SignUpController()
    const httpRequest: any = {
      body: {
        email: 'any_mail@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
