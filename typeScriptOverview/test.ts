type Player = {
  name: String,
  age?: Number  
}

const nico: Player = {
  name: "nico"
}

const lynn: Player = {
  name: "lynn",
  age: 12
}

function playerMaker(name: string): Player {
  return {
    name: name
  }
}

const david = playerMaker("david")
nico.age = 12

const playerMaker2 = (name: string): Player => ({name})
