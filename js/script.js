const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const logo = document.getElementById('logo')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
  logo.classList.toggle('hidden')
})