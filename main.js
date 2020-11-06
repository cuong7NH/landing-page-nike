



// handel btn size

const sizeButtons = document.querySelectorAll('.size-wrapper > div');

function removeActiveSize() {
    for(let i = 0; i < sizeButtons.length; i++) {
        sizeButtons[i].classList.remove('active');
    }
}

sizeButtons.forEach(sizeButton => {
    sizeButton.addEventListener('click', () => {
        removeActiveSize();
        sizeButton.classList.add('active')
    });
});


// --------------------------


// handel select shoe


const selectShoes = document.querySelectorAll('.slide-control-item');
const shoeName = document.querySelector('.product-name h2');
const shoePrice = document.querySelector('.product-price');
const shoeImg = document.querySelector('#shoeImgPng');
const bcColor = document.querySelector('.img-col');
const moreImages = document.querySelectorAll('.more-images img');


function removeActiveShoe() {
    for(let i = 0; i < selectShoes.length; i++) {
        selectShoes[i].classList.remove('active');
    }
    
}

const shoesInfo = [
    {
        shoeName: 'Nike ZoomX Vaporfly',
        shoePrice: '230'
    },
    {
        shoeName: 'Nike Zoom Fly 3',
        shoePrice: '250'
    },

    {
        shoeName: 'Nike Air Max Alpha TR 3',
        shoePrice: '195'
    },

    {
        shoeName: 'Nike Air Zoom SuperRep',
        shoePrice: '255'
    }

];
const shoesImg = [
    'img/shoe-red.png',
    'img/shoe-green.png',
    'img/shoe-black.png',
    'img/shoe-blue-1.png'
];
const bcColorArray = [
    'linear-gradient(to top right, #e19e95, #fd835c)',
    'linear-gradient(to top right, #6b6d68, #629f2a)',
    'linear-gradient(to top right, #cdcbd3, #171617)',
    'linear-gradient(to top right, #32519a, #4967af)'
];
const shoeColor = [
    'red',
    'green',
    'black',
    'blue'
]
for(let i = 0; i < selectShoes.length; i++) {
    selectShoes[i].addEventListener('click', () => {
        removeActiveShoe();
        selectShoes[i].classList.add('active');
        shoeName.textContent = shoesInfo[i].shoeName;
        shoePrice.innerHTML = `<span>$</span>${shoesInfo[i].shoePrice}`;
        shoeImg.removeAttribute('src');
        shoeImg.setAttribute('src', `${shoesImg[i]}`);
        bcColor.style.backgroundImage = `${bcColorArray[i]}`;
        for(let j = 0; j < moreImages.length; j++) {
            moreImages[j].removeAttribute('src');
            moreImages[j].setAttribute('src', `img/shoe-${shoeColor[i]}-${j+1}.jpg`);
        }

    });
}



// handle model

const modalCloseBtn = document.querySelector('#modal-close');
const modalContainer = document.querySelector('#modal');
const modalImg = document.querySelector('#modal-content');
console.log(moreImages);



modalCloseBtn.addEventListener('click', ()=> {
    console.log('close');
    modalContainer.classList.remove('modal--active');
});

moreImages.forEach(moreImage => {
    moreImage.addEventListener('click', () => {
        modalContainer.classList.add('modal--active');
        const src = moreImage.getAttribute('src');
        modalImg.setAttribute('src', src);
    })
});