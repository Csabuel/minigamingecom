document.querySelector('.js-delivery-pickup').addEventListener('click',() => {
    deleveryType('pickUpp');
});
document.querySelector('.js-delivery-sameday').addEventListener('click',() => {
    deleveryType('sameDay');
});
document.querySelector('.js-delivery-shiphome').addEventListener('click',() => {
    deleveryType('shipHome');
});

function deleveryType(type){
    result = '';
    if(type === 'pickUpp'){
        result = 'Pick up in-store';
        
    } else if(type === 'sameDay'){
        result = 'Same Day Delivery';
    } else if(type === 'shipHome'){
        result = 'Ship to Home';
    }

    document.querySelector('.js-delivery-type').innerHTML = result;
}