let productsHTML =' ';

let selectedItem =[];

function openSelectedItem(){
    console.log(selectedItem);
    selectedItem.forEach((product) => {
    
        productsHTML +=`
    <div class="product-page">
        <div class="product-img"><img src="${product.image}"></div>
        <div class="product-right"> 
            <div class="product-buy">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-stars">
                    <i class="fa-solid fa-star fa-xs" ></i>
                    <i class="fa-solid fa-star fa-xs" ></i>
                    <i class="fa-solid fa-star fa-xs" ></i>
                    <i class="fa-solid fa-star fa-xs" ></i>
                    <i class="fa-solid fa-star fa-xs" ></i>
                </div>
                <h4 class="product-price">$${(product.priceCents / 100).toFixed(2)}</h4>
                <p>Conditon: <Strong>${product.condition}</Strong></p>
                <p class="product-shipping-method">Shipping method: <span class="js-delivery-type">Please choose a method for shipping</span></p>
                <div class="shipping-buttons">
                    <button class="js-delivery-pickup">
                        <div><i class="fa-solid fa-location-dot fa-lg"></i></div>
                        <p>Pick up in-store</p>
                        <p>Not Available</p>
                    </button>
                    <button class="js-delivery-sameday">
                        <div><i class="fa-solid fa-clock fa-lg"></i></div>
                        <p>Same Day Delivery</p>
                        <p>Not Available</p>
                    </button>
                    <button class="js-delivery-shiphome">
                        <div><i class="fa-solid fa-truck-fast fa-lg"></i></div>
                        <p>Ship to Home</p>
                        <p>1-3 day shipping</p>
                    </button>
                </div>
                <h5 class="free-shipping">FREE Shipping on orders $99+</h5>
                <button  class="add-to-cart-button js-add-to-cart" data-product-id="${product.id}">Add to Cart</button>    
            </div>
            <div class="product-description"></div>
        </div>

    </div>

    `;
});
document.querySelector('.js-more-info').innerHTML = productsHTML;
productsHTML = '';

}




let popularProductsHTML ='';

productOptions.forEach((option) =>{
    popularProductsHTML +=`
    <div>
        <div class="popular-products-product" onclick="displayChoosenItem('${option.id}')" id="${option.id}">
            <div class="product-picture">
               <a href="#results" class="scroll-link"><img src="${option.image}" alt=""></a> 
            </div>
            <p>${option.name}</p>
        </div>
    </div>
    `;
});

let itemsIds ='';

function findThisId(id) {

    selectedItem[0] = itemsIds.find(findID);

    function findID(itemsIds){
        return itemsIds.id === id;
    }

    openSelectedItem();

}


function displayChoosenItem(item){

    switch (item){
        case 'id-01':
            products = cpu.slice();
            break;
        case 'id-02':
            products = cards.slice();
            break;       
        case 'id-03':
            products = storage.slice();
            break;       
        case 'id-04':
            products = boards.slice();
            break;       
        case 'id-05':
            products = cooling.slice();
            break;       
        case 'id-06':
            products = power.slice();
            break;       
        case 'id-07':
            products = memory.slice();
            break;       
        case 'id-08':
            products = cases.slice();
            break;       
    }
    updateDisplay();

    itemsIds = products;
    
}

function updateDisplay() {
    let loadItems = '';

products.forEach((item) =>{
    loadItems +=`
    <div class="product-item ${item.id}  ">
        <div class="product-promotion"><span style:"opacity:${item.offer}">OFFER</span></div>
            <div class="product-item-img )" ">
                <img src="${item.image}"  alt="">
            </div>
            <div class="product-item-name">
                 <p class="name-paragraph">${item.name}</p>
            </div>
            <div class="product-item-star">
                <p>${item.star}</p>
            </div>
            <div class="product-item-price">
                <p>$${(item.priceCents / 100).toFixed(2)}</p>
            <a href="#item-selected" class="scroll-link">
            <button class="add-to-cart-button" onclick="findThisId('${item.id}')">More info</button>
            </a>
        </div>
    </div>
    `;
});
    
    document.querySelector('.js-product-item').innerHTML = loadItems;
    document.querySelector('.js-results').innerHTML = products.length;
};


document.querySelector('.js-popular').innerHTML = popularProductsHTML;




// Make the scroll smooth


document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.scroll-link');
  
    for (let i = 0; i < scrollLinks.length; i++) {
      scrollLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute('href'));
  
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    }
  });