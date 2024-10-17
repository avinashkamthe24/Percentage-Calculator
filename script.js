const calculate1Button = document.getElementById('calculate1');
const calculate2Button = document.getElementById('calculate2');
const calculate3Button = document.getElementById('calculate3');

calculate1Button.addEventListener('click', calculate1);
calculate2Button.addEventListener('click', calculate2);
calculate3Button.addEventListener('click', calculate3);

function calculate1() {
  const x = parseFloat(document.getElementById('x').value.replace(/[.,]/g, '.'));
  const y = parseFloat(document.getElementById('y').value.replace(/[.,]/g, '.'));
  const result = (x / 100) * y;
  document.getElementById('result1').textContent = `Result: ${result.toFixed(2)}`;
}

function calculate2() {
  const x = parseFloat(document.getElementById('x2').value.replace(/[.,]/g, '.'));
  const y = parseFloat(document.getElementById('y2').value.replace(/[.,]/g, '.'));
  const result = (x / y) * 100;
  document.getElementById('result2').textContent = `Result: ${result.toFixed(2)}%`;
}

function calculate3() {
  const x = parseFloat(document.getElementById('x3').value.replace(/[.,]/g, '.'));
  const y = parseFloat(document.getElementById('y3').value.replace(/[.,]/g, '.'));
  const result = ((y - x) / x) * 100;
  document.getElementById('result3').textContent = `Result: ${result.toFixed(2)}%`;
}