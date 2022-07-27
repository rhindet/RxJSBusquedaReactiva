'use strict';
const{fromEvent,of}=rxjs;
const { map,filter,debounceTime,distinctUntilChanged} = rxjs.operators;
window.addEventListener('DOMContentLoaded',inicializar);

function inicializar(e){
  // prepararKeyup$();
   prepararPaises$('krone').subscribe(console.log)
}
function prepararKeyup$(){
    const nInput = document.querySelector('#eInPais');
    const keyup$ = fromEvent(nInput,'keyup')
    .pipe(
        map(e=>e.target.value),
        filter(texto => texto.length >=2),
        debounceTime(1000),
        distinctUntilChanged()
        );
    keyup$.subscribe(console.log);
}

function prepararPaises$(filtro) { 
    const paisesFiltrados = paises
        .map(pais => pais.name)
         .filter(nombre => nombre.toString().toLowerCase().includes(filtro.toString().toLowerCase()));
        
       
    return of(paisesFiltrados);
}