
function typeWriter(e) {
    const textoArray = e.innerHTML.split('')
    e.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => e.innerHTML += letra, 100 * i)
    });
}
const texto = document.querySelector('.intro')
typeWriter(texto)

