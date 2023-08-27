
"use strict";


// function perfumitos (img){
//     img= `${img}`;
//     return [img];
//     // img =  `<img class="imagen" src="perfumes/${i}.jpg" style="margin:10px ;box-shadow: 2px 1px 10px black;">;`
// }

let perfumes = document.querySelector(".perfumes");


// let documentFragment = document.createDocumentFragment();



// const createPerfume = () => {
            
        
        
        
//         perfumes.appendChild(div);
      
        
// };
const cargarMasPerfumes = entry => {
    if (entry[0].isIntersecting) cargarPerfumes(12);
}

let options = {
    rootMargin: "-260px"
}

const observer = new IntersectionObserver(cargarMasPerfumes, options);

let contador = 1;

const cargarPerfumes = (num) => {
   
    let documentFragment = document.createDocumentFragment();
   
    for(let i = 1; i <= num; i++) {

        if(contador <= 50) {

            let div = document.createElement("DIV");
        
        div.classList.add("perfume");
        
        div.innerHTML = `<img src='perfumes/${contador}.jpg'>`;

        documentFragment.appendChild(div);
        
        

        contador++;

        

        if (i == num-1) observer.observe(div);
        

        } 
        
        
      
        
        
    }
    perfumes.appendChild(documentFragment);
}

cargarPerfumes(12);




























// for (var i = 1; i <= 50; i++) {
        
        
//         let div = document.createElement("DIV");
        
        

//         div.classList.add("perfume");
        
//         div.innerHTML = `<img src='perfumes/${i}.jpg'>`;

        
//         documentFragment.appendChild(div);


        
//     }

// perfumes.appendChild(documentFragment);
