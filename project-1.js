// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
  quote: `"The best way to find yourself is to lose yourself in the service of others."`,
  person : 'Abraham Lincoln'
},
  {
  quote: `"The best way to find yourself is to lose yourself in the service of others."`,
  person : 'Merdi Kab'
},
  {
  quote: `"The best way to find yourself is to lose yourself in the service of others."`,
  person : 'Johny Deep'
},
  {
  quote: `"If you look at what you have in life, you will always have more."`,
  person : 'Basam Ditrix'
},
  {
  quote: `"The best way to find yourself is to lose yourself in the service of others."`,
  person : 'Aime BLaise'
},
  {
  quote: `"The best way to find yourself is to lose yourself in the service of others."`,
  person : 'Muggy Perrie'
},
  {
  quote: `"The best way to find yourself is to lose yourself in the service of others."`,
  person : 'Maitre Gims'
},
  {
  quote: `"The best way to find yourself is to lose yourself in the service of others."`,
  person : 'shalom Nyerere'
},
  {
  quote: `"The best way to find yourself is to lose yourself in the service of others."`,
  person : 'Iradukunda Alain'
},
  {
  quote: `"The best way to find yourself is to lose yourself in the service of others."`,
  person : 'Serge Chauvin'
},
  {
  quote: `"The best way to find yourself is to lose yourself in the service of others."`,
  person : 'Arther Brutoh'
},
  {
  quote: `"Our lives begins to end the day we become silent about things that matter."`,
  person : 'Wardah Ing'
},
  {
  quote: `"The best way to find yourself is to lose yourself in the service of others."`,
  person : 'Agasaro Sabah'
},
  {
  quote: `"The journey of a thousand miles begins with one step."`,
  person : 'Aliah Ibrahim'
},
  {
  quote: `"The best way to find yourself is to lose yourself in the service of others."`,
  person : 'Hunk folks'
},
];

btn.addEventListener('click',function(){

  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;

})

