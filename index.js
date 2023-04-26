const exemplo = document.getElementById('exemplo')
let resultado = '';
let i = 0;
do {
   i += 1;
   resultado += i + ' ';
   console.log(i)
} while (i < 5);
exemplo.innerHTML = resultado