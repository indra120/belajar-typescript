class User {
  public constructor(name: string, email: string) {
    this._id = Math.random()
    this._name = name
    this._email = email
  }

  private _id: number
  protected _name: string
  protected _email: string

  public getId(): number {
    return this._id
  }
  public getName(): string {
    return this._name
  }
  public getEmail(): string {
    return this._email
  }

  public update(name?: string, email?: string): void {
    if (name) {
      this._name = name
    }
    if (email) {
      this._email = email
    }
  }
}

class UserProfile extends User {
  public constructor(name: string, email: string, bio?: string) {
    super(name, email) // super refers to constructor in parent class
    this._bio = bio || ""
    // console.log(this._id) // Can't access private property of parent class
  }

  protected _bio: string

  public getBio(): string {
    return this._bio
  }

  public update(name?: string, email?: string, bio?: string): void {
    this._name = name || this._name
    this._email = email || this._email
    this._bio = bio || this._bio
  }
}

const user1 = new User("Indra", "ip69@gmail.com")
// console.log(user1._id, user1._name, user1._email) // Error
console.log(user1.getId(), user1.getName(), user1.getEmail())
user1.update("Jeff")
console.log(user1.getName())

const user2=new UserProfile('John','john@doe.com')
user2.update('Josh')
user2.update('','','Just a random guy')
console.log(user2.getBio())
