import { IUser } from "../../interfaces";

const mockedUser: IUser = {
  id: 1,
  username: 'UserTest',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
}

const mockedUnencryptedPassword = 'secret_admin'

const mockedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NDUwODQ0MCwiZXhwIjoxNjc0NTMwMDQwfQ.1snol1cy5G6-3E3PZ7m9NPwhy4kQOcrwWiz677V_n98"

export { mockedUser, mockedUnencryptedPassword, mockedToken };