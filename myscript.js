let elements = 0;

const container = document.querySelector('.container');
const btn = document.createElement('button');
btn.innerHTML = 'Number of Elements';
container.appendChild(btn);
const grid = document.createElement('grid');
grid.classList.add('grid');
container.appendChild(grid);

const button = document.querySelector('button');
button.addEventListener('click', function (){
    grid.textContent = "";
   elements =  parseInt(prompt('Please enter number of elements'));
   if (elements > 100 ){
    elements = parseInt(prompt('Please enter a number less than 100'));
   }
   for (let i = 0; i < elements; i++){
    const row = document.createElement('div');
    row.classList.add('row')
    grid.appendChild(row);
    for (let j = 0; j < elements; j++){
        const div = document.createElement('div');
        div.classList.add('box');
        row.appendChild(div);
    }
}

const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('click', function () {
        box.style.backgroundColor = 'black';
    });
});

});

