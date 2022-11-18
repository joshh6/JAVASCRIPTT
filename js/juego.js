const casilla = document.querySelectorAll('.casillas')
const mira = document.querySelector('.mira')
const tiempo = document.querySelector('#tiempo')
const score = document.querySelector('#puntuacion')

let resultado = 0
let posicion
let tiempoRestante = 20
let idtiempo = null

function casillaRandom() {
  casilla.forEach(square => {
    square.classList.remove('mira')
  })

  let casillaRandom = casilla[Math.floor(Math.random() * 9)]
  casillaRandom.classList.add('mira')

  posicion = casillaRandom.id
}

casilla.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == posicion) {
      resultado++
      score.textContent = resultado
      posicion = null
    }
  })
})

function movMira() {
  idtiempo = setInterval(casillaRandom, 600)
}

movMira()

function cuentaRegresiva() {
  tiempoRestante--
  tiempo.textContent = tiempoRestante

  if (tiempoRestante == 0) {
    clearInterval(idContadorRegresivo)
    clearInterval(idtiempo)
  }

}

let idContadorRegresivo = setInterval(cuentaRegresiva, 1000)

