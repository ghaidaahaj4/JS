const clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', () => {
  const counterElement = document.getElementById('counter');
  let currentCount = parseInt(counterElement.textContent);
  currentCount += 1;
  counterElement.textContent = currentCount;
});
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click',()=>{
    const counterElement = document.getElementById('counter');
    counterElement.textContent = 0;
})