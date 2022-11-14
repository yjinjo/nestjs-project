type Player<E> = {
  name: string
  extraInfo: E
}

type NicoExtra = {
  favFood: string
}

const nico: Player<NicoExtra> = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi"
  }
}

const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null
}
