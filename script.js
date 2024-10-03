const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const changeBy = document.getElementById('changeBy');
const value = document.querySelector('.value');
const reset = document.getElementById('reset');

increment.addEventListener('click', ()=> {
    value.textContent = +value.textContent + changeBy.valueAsNumber;
});

decrement.addEventListener('click', () => {
    value.textContent = parseInt(value.textContent) - parseInt(changeBy.value);
  });
  
  reset.addEventListener('click', () => {
    value.textContent = 0;
  });