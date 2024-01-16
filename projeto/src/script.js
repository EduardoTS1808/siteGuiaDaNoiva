const petulas = document.querySelectorAll('.petulas');
const getRandomNumber = (min, max ) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
petulas.forEach(petula => {
    petula.style = `--petula-delay:${getRandomNumber(0, 3500)}ms`
})