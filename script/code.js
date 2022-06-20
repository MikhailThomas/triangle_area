let base = document.getElementById('base');
let height = document.getElementById('height');
let answer = document.getElementById('answer')

answer.addEventListener('click',()=> {
    answer.value=((base.value * height.value)/2);
})