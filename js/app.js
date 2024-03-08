console.log ('JS Trial')


let imagesArray = [
    './img/01.webp',
    './img/03.webp',
    './img/02.webp',
    './img/04.webp',
    './img/05.webp',
];

const itemsContainerDOMElement = document.querySelector('.items-container')
//console.log(itemsContainerDOMElement)

let itemsHTML = '';

for (let i = 0; i < imagesArray.length; i++) {

    const imgSrc = imagesArray[i];
    //console.log(imgSrc)

    const sliderItemHTML = `
    <div class="item">
        <img src="${imgSrc}">
    </div>
    `;

    itemsHTML += sliderItemHTML;
}

itemsContainerDOMElement.innerHTML = itemsHTML