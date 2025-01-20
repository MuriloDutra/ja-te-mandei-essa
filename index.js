let main = document.querySelector('main')
let envelope = document.querySelector('.envelope')
let letter = document.querySelector('.letter')

envelope.addEventListener('click', () => {
    main.classList.toggle('open-letter')
})