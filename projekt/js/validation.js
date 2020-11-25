function validCenaNetto(){
    //document.getElementById('inputCenaNetto');
    let item = document.querySelector('#inputCenaNetto');
    let itemVal = item.value;
    let itemValError = document.querySelector('#inputCenaNetto_error');

    if(itemVal.length === 0){
        nieOkey(item,itemValError);
    }
    else{
        okey(item,itemValError);
    }
}
function okey(item,itemValError){
    itemValError.innerHTML = 'ok';
    itemValError.classList.add('invalid-feedback');
    itemValError.classList.remove('valid-feedback');
    item.classList.add('is-valid');
    item.classList.remove('is-invalid');
}
