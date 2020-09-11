const calculateTransformValue = (targetElement, containerElement) => {
  // If it's the "total" element, return specific value to show the total illustration
  if (targetElement.getAttribute('data-twin-id') === 'total') {
    return 'translate3d(0, 0, 0) scale(.8)'
  }

  const targetDimensions = targetElement.getBoundingClientRect()
  const containerDimensions = containerElement.getBoundingClientRect()

  // Get all values necessary for the calculations.
  const containerTop = containerDimensions.top
  const containerHeight = containerDimensions.height
  const containerWidth = containerDimensions.width

  const targetTop = targetDimensions.top
  const targetX = targetDimensions.x
  const targetHeight = targetDimensions.height
  const targetWidth = targetDimensions.width

  // Calculate the container center point, calculated from the top.
  const containerCenterFromWindowTop = containerTop + containerHeight / 2
  // Calculate the target center point, calculated from the top.
  const targetCenterFromHeight = targetTop + targetHeight / 2

  // Calculate the amount of px the element need to move (from the top)
  // to bring the target element in the center of the box.
  const moveY = Math.round(
    containerCenterFromWindowTop - targetCenterFromHeight
  )

  // Calculate the container center point, calculated from the left.
  const singleContainerMargin = (window.innerWidth - containerWidth) / 2
  const containerCenterFromWindowLeft =
    containerWidth / 2 + singleContainerMargin
  // Calculate the target center point, calculated from the left.
  const targetCenterFromWidth = targetX + targetWidth / 2

  // Calculate the amount of px the element need to move (from the left)
  // to bring the target element in the center of the box.
  const moveX = Math.round(
    containerCenterFromWindowLeft - targetCenterFromWidth
  )

  return `translate3d(${moveX}px, ${moveY}px, 0)`
}

const store = {}

export const move = (id) => () => {
  store[id].element.style.opacity = 1
  store[id].containerElement.style.transform = store[id].transformValue
}

export const dim = (id) => () => {
  store[id].element.style.opacity = 0.3
}

export const enhancer = (element) => {
  const containerElement = document.querySelector(
    '.illustration-container__list'
  )

  const id = element.getAttribute('id')
  store[id] = {
    element,
    transformValue: calculateTransformValue(element, containerElement),
    containerElement,
  }
}
