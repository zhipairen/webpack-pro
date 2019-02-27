import './css/index.css';

import test from './js/test';
console.log(test);
import data from './js/test2';
console.log(data);

document.addEventListener('click', function() {
  //异步加载
  import('./js/test').then(res => {
    p.innerHTML = data;
  })
})


