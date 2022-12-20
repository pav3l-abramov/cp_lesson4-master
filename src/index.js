import { MiniMaple } from './miniMaple.js';
document.addEventListener('DOMContentLoaded',setup);


function setup() {
    document.getElementById('diff').onclick = derivate;
}

function derivate(){
  let formula = document.getElementById("function").value;
  let arg = document.getElementById("argument").value;
  if (formula === ''){
    alert("Поле Function пустое!");
    return;
  }
  if (arg === ''){
    alert("Поле arg пустое!");
    return;
  }
    let maple = new MiniMaple(formula,arg);
  printResult(maple.derivativeFunction());
}
function printResult( result ){
    const someDummyDiv = document.createElement('div');
  document.body.appendChild(someDummyDiv);
  someDummyDiv.id = 'generated_div';
  someDummyDiv.textContent = result;
}

