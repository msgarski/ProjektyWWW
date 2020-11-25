function nieOkey(item,itemValError){
    itemValError.innerHTML = 'pole obowiązkowe';
    itemValError.classList.add('invalid-feedback');
    itemValError.classList.remove('valid-feedback');
    item.classList.add('is-invalid');
    item.classList.remove('is-valid');
}