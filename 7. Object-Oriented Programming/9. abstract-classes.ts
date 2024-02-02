abstract class UserModel {
  public constructor(name: string, email: string) {
    this._id = Math.random()
    this._name = name
    this._email = email
  }

  private _id: number
  protected _name: string
  protected _email: string

  public getId = (): number => this._id

  abstract getName(): string
  abstract getEmail(): string
  abstract update(name?: string, email?: string): void
}

class User extends UserModel {
  public getName = () => this._name
  public getEmail = () => this._email

  public update(name?: string, email?: string) {
    this._name = name || this._name
    this._email = email || this._email
  }
}

// const user1 = new UserModel() // Can't create instance from abstract classes
const user1 = new User("Jeff", "jeff@gmail.com")
console.log(user1.getName())
