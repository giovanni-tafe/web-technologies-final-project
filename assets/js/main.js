let mainMenu = document.getElementById('mainMenu')
let menuToggle = document.getElementById('menuToggle')

menuToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('hidden')
});