// GOAL: stampare a schermo il contenuto di una variabile dentro un h1
// BONUS: utilizzare un data come nome del file immagine in un tag img

function initVue(){
 new Vue({
   el: '#app',
   data : {
    'text':'ciao',
    'immagine' : './img/Roma.jpg'
  }

 });
}









function init(){
  initVue();
}
document.addEventListener('DOMContentLoaded', init);
