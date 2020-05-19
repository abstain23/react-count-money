let id = 0

const createId = ():number => {
  ++id
  return id
}

export default createId