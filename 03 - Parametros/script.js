// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);


console.log(btnStyles.backgroundColor);
console.log(btnStyles.margin);
console.log(btnStyles.color);
console.log(btnStyles.border);

/*Jeito mais dificil, porém é o que ele quer...

cont {backgroundColor, margin, color} = btnStyles;

console.log(backgroungColor);
console.log(margin);
console.log(color);
*/

// ______________________________________________________ //

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];




// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const { cor: Bobcor } = cachorro;
console.log(Bobcor)