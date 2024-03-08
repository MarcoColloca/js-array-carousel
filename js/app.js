console.log ('JS Trial')

//// Array degli indirizzi delle immagini
let imagesArray = [
    './img/01.webp',
    './img/03.webp',
    './img/02.webp',
    './img/04.webp',
    './img/05.webp',
];

//// Costante che corrisponde all'object con la classe "items-conteiner"
const itemsContainerDOMElement = document.querySelector('.items-container')
//console.log(itemsContainerDOMElement)

//// Variabile che corrisponde allo status iniziale del contenuto di "items-container"
let itemsHTML = '';

//// Ciclo for che permette di identificare i vari elementi all'interno dell'Array degli indirizzi delle immagini
for (let i = 0; i < imagesArray.length; i++) {

    //// Costante che corrisponde al singolo elemento all'interno dell'Array
    const imgSrc = imagesArray[i];
    //console.log(imgSrc)

    //// Costante che corrispodne al contenuto che andrà inserito all'interno dell'objext "items-container"
    const sliderItemHTML = `
    <div class="item">
        <img src="${imgSrc}">
    </div>
    `;

    //// Operazione di inserimento degli elementi presenti nell'Array all'interno della variabile che corrisponde al contenuto dell'objext "items-container"
    itemsHTML += sliderItemHTML;
}
//// Operazione di ugaglianza che cambia effettivamente il contenuto all'interno dell'HTML dell'Objext "items-container"
itemsContainerDOMElement.innerHTML = itemsHTML


//// Costante che raccoglie tutte le classi all'interno del documento all'interno di un Array-like object
const divItemList = document.getElementsByClassName('item')
//console.log(divItemList)

//// Variabile che corrisponde al primo elemento all'interno dell'Array-like Object delle classi
let activeItemIndex = 0;

//// Aggiunta della classe active al primo elemento dell'Array-like Object
divItemList[activeItemIndex].classList.add('active')


//// Costante che corrisponde all'object con la classe "next"
const nextDOMElement = document.querySelector('.next')


//// EventListener (Click) che permette di navigare all'interno del Carousel
nextDOMElement.addEventListener('click', function(){

    //// Condizione SE che permette di avanzare nel Carousel se la posizione dell'oggetto attivo è inferiore rispetto alla lunghezza del carousel -1
    if(activeItemIndex < (divItemList.length - 1)){
        divItemList[activeItemIndex].classList.remove('active');

        activeItemIndex++;

        divItemList[activeItemIndex].classList.add('active')
    //// ALTRIMENTI che permette di ritornare al primo elemento nel caso la posizione dell'elemento attivo sia uguale alla lunghezza del carousel -1
    }else{

        divItemList[activeItemIndex].classList.remove('active');

        activeItemIndex-=(divItemList.length - 1);

        divItemList[activeItemIndex].classList.add('active')
    }

})


//// Costante che corrisponde all'object con la classe "prev"
const prevDOMElement = document.querySelector('.prev')

//// EventListener (Click) che permette di navigare all'interno del Carousel
prevDOMElement.addEventListener('click', function(){

    //// Condizione SE che permette di retrocedere nel Carousel se la posizione dell'oggetto attivo è superiore rispetto a 0 (la prima posizione del Array-like Object)
    if(activeItemIndex > 0){
        divItemList[activeItemIndex].classList.remove('active');

        activeItemIndex--;
    
        divItemList[activeItemIndex].classList.add('active')
    //// ALTRIMENTI che permette di ritornare all'ultimo elemento dell'Array-like Object nel caso la posizione dell'elemento attivo sia a 0
    }else{

        divItemList[activeItemIndex].classList.remove('active');

        activeItemIndex+=(divItemList.length - 1);

        divItemList[activeItemIndex].classList.add('active')
    }


})