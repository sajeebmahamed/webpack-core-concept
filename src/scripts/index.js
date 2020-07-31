import '../styles/index.scss'

// const h1 = document.getElementById('my-id')
// h1.innerHTML = 'Sajeeb Ahamed'
// console.log(h1);]

let header = document.getElementsByTagName('h1')
let para = document.getElementsByClassName('lead')
// console.log(para);

let btn = document.getElementById('myBtn')
let colors = ['red', 'green', 'blue', 'yello']
let i = 0
btn.addEventListener('click', function() {
    let title =  document.getElementById('my-id')
    title.innerHTML = 'Hey! Man. Whats up??'
    title.style.backgroundColor = colors[i]

    if(i>= colors.length) {
        i = 0
    }
    else {
        i++
    }
})