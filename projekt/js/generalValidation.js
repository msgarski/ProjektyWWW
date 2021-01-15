function nieOkey(item,itemValError, message){
    itemValError.innerHTML = message;
    itemValError.classList.add('invalid-feedback');
    itemValError.classList.remove('valid-feedback');
    item.classList.add('is-invalid');
    item.classList.remove('is-valid');
}

function okey(item,itemValError,message){
    itemValError.innerHTML = message;
    itemValError.classList.add('valid-feedback');
    itemValError.classList.remove('invalid-feedback');
    item.classList.add('is-valid');
    item.classList.remove('is-invalid');
}

function allOkey(item,itemValError,message){
    itemValError.innerHTML = message;
    itemValError.classList.add('valid-feedback');
    itemValError.classList.remove('invalid-feedback');
    item.classList.add('is-valid');
    item.classList.remove('is-invalid');
}

function allNoOkey(item,itemValError, message){
    itemValError.innerHTML = message;
    itemValError.classList.add('invalid-feedback');
    itemValError.classList.remove('valid-feedback');
    item.classList.add('is-invalid');
    item.classList.remove('is-valid');
}

function checkboxOkey(itemValError, message){
    itemValError.innerHTML = message;
    //itemValError.classList.add('valid-feedback');
    //itemValError.classList.remove('invalid-feedback');
}

function checkboxNieOkey(itemValError, message){
    itemValError.innerHTML = message;
     itemValError.classList.add('invalid-fieldset');
    // itemValError.classList.remove('valid-feedback');
}