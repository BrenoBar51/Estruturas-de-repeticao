const exemplo = document.getElementById('exemplo')
/*let resultado = ''
let i = 0
do {
   i += 1;
   resultado += i + '';
   console.log(i)
} while (i < 5)*/
/*Array = [2, 4, 6, 8, 10]
for (let x = 0; x <= 10; x++){
   exemplo.innerHTML += x * 2 + ' '
   console.log(x)
}
for(let x = 1; x <= 10; x++){
   if(x % 2 === 0){
      console.log(x, 'par')
      exemplo.innerHTML += x + ' '
   }
   else{
      console.log(x)
   }
}*/
for (x = 10; x <= 10 && x > 0; x--){
   console.log(x)
   exemplo.innerHTML += x + ' '
}