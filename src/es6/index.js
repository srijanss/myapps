import printMe from './print.js'

const component = () => {
  const element = document.createElement('div')
  const btn = document.createElement('button')

  btn.innerHTML = 'Click'
  btn.onclick = printMe
  element.appendChild(btn)

  return element
}

document.body.appendChild(component())
