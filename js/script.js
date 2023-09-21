const button = document.querySelector('#btn');
let current = 2

button.addEventListener('click', () => {
    let boxes = [...document.querySelectorAll('.container-content .box-container .box')]
    for(let i = current; i < current + 8; i++) {
        boxes[i].style.display = 'block'
        console.log(i)
    }
    current += 8

    if(current >= boxes.length) {
        button.style.display = 'none'
    }
})


