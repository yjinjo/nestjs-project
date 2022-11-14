abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickname: string
  ) { }

  abstract getNickName(): void

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Player extends User {
  getNickName(): void {
    console.log(this.nickname);
  }
}


const nico = new Player("nico", "las", "니꼬")
nico.getFullName()
