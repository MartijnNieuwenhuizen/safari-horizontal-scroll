const store = {}

export const move = (id) => {
  console.log('id: ', id)
  store[id].style.opacity = 1
}

export const dim = (id) => {
  store[id].style.opacity = 0.3
}

export const enhancer = (element) => {
  const id = element.getAttribute('id')
  store[id] = element
}
