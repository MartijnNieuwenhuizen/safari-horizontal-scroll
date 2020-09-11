import { move, dim } from './moveOnScroll'

const handleIntersect = (entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute('id')

    if (entry.intersectionRatio >= 0.5) {
      window.requestAnimationFrame(move(id))
    } else {
      window.requestAnimationFrame(dim(id))
    }
  })
}

const createObserver = () => {
  const threshold = [0, 0.5, 1]

  const options = {
    threshold,
  }

  return new IntersectionObserver(handleIntersect, options)
}

export const enhancer = (element) => {
  const observer = createObserver()

  observer.observe(element)
}
