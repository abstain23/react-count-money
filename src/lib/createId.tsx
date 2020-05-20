let id:number = parseInt(window.localStorage.getItem('idMax') || '0')

const createId = ():number => {
  ++id
  window.localStorage.setItem('idMax',id.toString())
  return id
}

export default createId