function validCenaNetto(){
    let item = document.querySelector('#inputCenaNetto');
    let itemValError = document.querySelector('#inputCenaNetto_error');
    let pattern = /^(\d*([.]?(?=\d+))\d+)$/;

    if(item.value.length === 0){
        nieOkey(item,itemValError,"pole musi być uzupełnione");
        return false;
    }
    else{
        if(item.value.length <= 10){
            if(item.value.match(pattern)){
                let v = parseFloat(item.value);
                item.value = v.toFixed(2);
                okey(item,itemValError,"wydaje się ok");
                return true;
            }
            else{
                nieOkey(item,itemValError,"używasz niedozwolonych znaków przy zapisie ceny");
            }
        }
        else{
            nieOkey(item,itemValError,"cena towaru wydaje się przesadnie duża");
        }
    }
    return false;
}

function validInputName(){
    let item = document.querySelector('#inputName');
    let itemValError = document.querySelector('#inputName_error');
    let pattern = /^[A-Za-z]+$/;

    if(item.value.length === 0){
        nieOkey(item,itemValError,"pole musi być uzupełnione");
    }
    else{
        if(item.value.length <= 10){
            //if(spr){
                if(item.value.match(pattern)){
                    okey(item,itemValError,"wydaje się ok");
                    return true;
                }
                else{
                    nieOkey(item,itemValError,"nazwa powinna składać się jedynie z liter");
                    return false;
                }
            //}
        }
        else{
            nieOkey(item,itemValError,"nazwa powinna mieeć długość do 10-ciu znaków");
            return false;
        }
    }
    return false;
}

function isValueInTable(){
    // checking name for avoid redundant:
    let spr = true;
    let item = document.querySelector('#inputName');
    let itemValError = document.querySelector('#inputName_error');
    if(item.value.length ===0){
        nieOkey(item,itemValError,"pole musi być uzupełnione");
    }
    $("#myTable tr td:nth-child(1)").each(function() {

        if (this.innerText === item.value) {
            //let errMsg = "user already exists in the list";
            nieOkey(item, itemValError, 'Nazwa się powtarza, taki produkt już istnieje');
            spr = false;
            return false;
        }
        else{
            if(item.value.length != 0){
                okey(item,itemValError,'');
                spr = true;
                return true;
            }

        }
    });
    if(spr){
        return true;
    }
    else{
        return false;
    }
}

function validCode(){
    let item = document.querySelector('#inputKod');
    let itemValError = document.querySelector('#inputKod_error');
    let pattern = /^[A-Za-z0-9]{2}-[A-Za-z0-9]{2}$/;

    if(item.value.length === 0){
        nieOkey(item,itemValError,"pole musi być uzupełnione");
        return false;
    }
    else{
        if(item.value.length === 5){
            if(item.value.match(pattern)){
                okey(item,itemValError,"wydaje się ok");
                return true;
            }
            else{
                nieOkey(item,itemValError,"kod towaru nie powinien posiadać znaków specjalnych");
            }
        }
        else{
            nieOkey(item,itemValError,"kod towaru powinien mieć format: xx-xx, twój jest za długi");
        }
    }
    return false;
}

function validVat(){
    let item = document.querySelector('#inputVat');
    let itemValError = document.querySelector('#inputVat_error');
    let pattern = /^(\d{1,2})$/;
    let pattern2 = /\%+$/;

    if(item.value.length === 0){
        nieOkey(item,itemValError,"pole musi być uzupełnione");
        return false;
    }
    else{
        if(item.value.match(pattern)){
            okey(item,itemValError,"wydaje się ok");

            return true;
        }
        else{
            if(item.value.match(pattern2)){
                nieOkey(item,itemValError,"proszę podać stawkę bez znaku %")
            }
            else
                nieOkey(item,itemValError,"proszę podać tylko liczby");
        }
    }
    return false;
}

function validBrutto(){
    let net = document.querySelector('#inputCenaNetto');
    let vat = document.querySelector('#inputVat');
    let brutto = document.querySelector('#inputCenaBrutto');

     let cenaBrutto = (((parseFloat(net.value)*parseFloat(vat.value))/100) + parseFloat(net.value)).toFixed(2);
     brutto.value = cenaBrutto.toString();
}

function validKategoria(){
    let item = document.querySelector('#inputKategoria');
    let itemValError = document.querySelector('#inputKategoria_error');

    if((item.value==="1")||(item.value==="2")||(item.value==="3")){
        okey(item,itemValError,"wydaje się ok");
        return true;
    }
    else{
        nieOkey(item,itemValError,"pole nie może być puste");
        return false;
    }
}

function validOpcja(){
    // funkcja już nieaktualna, ponieważ stosuję podobną, lepszą
    let itemValError = document.querySelector('#checkboxOpcja_error');
    let opcja = 0;
    itemValError.value = 'nic tu nie ma';
    if(document.getElementById('customSwitch1').checked ===true) {opcja +=1}
    if(document.getElementById('customSwitch2').checked ===true) {opcja +=1}
    if(document.getElementById('customSwitch3').checked ===true) {opcja +=1}
    if(document.getElementById('customSwitch4').checked ===true) {opcja +=1}
    if(document.getElementById('customSwitch5').checked ===true) {opcja +=1}
    if(opcja >= 2){
        //itemValError.innerHTML = 'jest ok';
        checkboxOkey(itemValError, 'wydaje się ok');
        return true;
    }
    else{
        //itemValError.innerHTML = 'zaznacz 2 opcje';
        checkboxNieOkey(itemValError,'zaznacz przynajmniej dwie opcje');
        return false;
    }
}

function validOpcja2(){
    let item = document.querySelector('#inputOpcje');
    let itemValError = document.querySelector('#checkboxOpcja_error');
    let opcja = 0;
    itemValError.value = 'nic tu nie ma';

    let opcjeArr = document.getElementsByClassName("inputOpcje");
    for(let k=0; k < opcjeArr.length; k++){
        if(opcjeArr[k].checked === true)
            opcja+=1;
    }
    if(opcja >= 2){
        //itemValError.innerHTML = 'jest ok';
        checkboxOkey(itemValError, 'wydaje się ok');
        return true;
    }
    else{
        //itemValError.innerHTML = 'zaznacz 2 opcje';
        checkboxNieOkey(itemValError,'zaznacz przynajmniej dwie opcje ');
        return false;
    }
}

function validAll(){
    let item = document.getElementById('#button');
    let itemValError = document.getElementById('#button_error');
    let wynik = 0;
    if(validCenaNetto()){wynik +=1;}
    if(validInputName()){wynik += 1;}
    if(isValueInTable()){wynik += 1;}
    if(validCode()){wynik += 1;}
    if(validVat()){wynik += 1;}
    if(validKategoria()){wynik += 1;}
    if(validOpcja2()){wynik += 1;}
    if(wynik === 7){
        return true;
    }
    else{
        return false;
    }

}

function validAllAfterEditing(){
    let item = document.getElementById('#button');
    let itemValError = document.getElementById('#button_error');
    let wynik = 0;
    if(validCenaNetto()){wynik +=1;}
    if(validInputName()){wynik += 1;}
    //if(isValueInTable()){wynik += 1;}
    if(validCode()){wynik += 1;}
    if(validVat()){wynik += 1;}
    if(validKategoria()){wynik += 1;}
    if(validOpcja2()){wynik += 1;}

    if(wynik === 6){
        return true;
    }
    else{
        return false;
    }
}

function getKategoria(){
    let item = document.querySelector('#inputKategoria');

    switch(item.value){
        case "1":
            return 'odzież';
            break;
        case "2":
            return 'kosmetyki';
            break;
        case "3":
            return 'żywność';
            break;
    }
}

function getOcena(){
    if(document.getElementById('exampleRadios1').checked ===true) {return 1;}
    if(document.getElementById('exampleRadios2').checked ===true) {return 2;}
    if(document.getElementById('exampleRadios3').checked ===true) {return 3;}
    if(document.getElementById('exampleRadios4').checked ===true) {return 4;}
    if(document.getElementById('exampleRadios5').checked ===true) {return 5;}
}

function getOpcje(){
    let sumaOpcji = '';

    if(document.getElementById('customSwitch1').checked ===true) {sumaOpcji+='1,';}
    if(document.getElementById('customSwitch2').checked ===true) {sumaOpcji+='2,';}
    if(document.getElementById('customSwitch3').checked ===true) {sumaOpcji+='3,';}
    if(document.getElementById('customSwitch4').checked ===true) {sumaOpcji+='4,';}
    if(document.getElementById('customSwitch5').checked ===true) {sumaOpcji+='5,';}
    sumaOpcji = sumaOpcji.slice(0,-1);
    return sumaOpcji;
}

function clearAll(){
    document.getElementById('inputName').value = "";
    document.getElementById('inputKod').value = "";
    document.querySelector('#inputCenaNetto').value = "";
    document.querySelector('#inputVat').value = "";
    document.querySelector('#inputCenaBrutto').value = "";
    document.querySelector('#inputKategoria').value = "";
    document.getElementById('customSwitch1').checked = false;
    document.getElementById('customSwitch2').checked = false
    document.getElementById('customSwitch3').checked = false;
    document.getElementById('customSwitch4').checked = false;
    document.getElementById('customSwitch5').checked = false;

    document.getElementById('exampleRadios5').checked = true;
    let etykiety = ['#inputName', '#inputKod', '#inputCenaNetto', '#inputVat', '#inputKategoria', '#inputOpcje'];
    let errory = ['#inputName_error', '#inputKod_error', '#inputCenaNetto_error', '#inputVat_error', '#inputKategoria_error', '#checkboxOpcja_error'];

    for(let i=0; i<etykiety.length-1; i++){
        let item = document.querySelector(etykiety[i]);
        //alert(etykiety[i]);
        let itemValError = document.querySelector(errory[i]);
        okey(item,itemValError,'');
    }
    let item = document.querySelector(etykiety[5]);
    //alert(etykiety[i]);
    let itemValError = document.querySelector(errory[5]);
    checkboxNieOkey(itemValError,'');
}

function sortowanie(sel){
    if(sel.value === 'nazwaA'){$("#myTable").trigger("sorton",[ [[0,0]] ]);}
    if(sel.value === 'nazwaZ'){$("#myTable").trigger("sorton",[ [[0,1]] ]);}
    if(sel.value === 'cenaA'){$("#myTable").trigger("sorton",[ [[4,0]] ]);}
    if(sel.value === 'cenaZ'){$("#myTable").trigger("sorton",[ [[4,1]] ]);}
    if(sel.value === 'ocenaA'){$("#myTable").trigger("sorton",[ [[7,0]] ]);}
    if(sel.value === 'ocenaZ'){$("#myTable").trigger("sorton",[ [[7,1]] ]);}

}

function deleteRow(){
    // Delete a row
    $("#myTable").delegate('button.remove', 'click' ,function() {
        let t = $('#myTable');
        $(this).closest('tr').remove();
        t.trigger('update');
        setTimeout(function() {
            alert("usunięto jeden rekord!");
        },1)
        return false;
    });
}

function editRow(){
    $("#myTable").delegate('button.edit', 'click', function() {
        let curRow = $(this).closest('tr');
        //let col1 = curRow.find('td:eq(0)').text();
        document.getElementById('inputName').value = curRow.find('td:eq(0)').text();
        document.querySelector('#inputKod').value = curRow.find('td:eq(1)').text();
        document.querySelector('#inputCenaNetto').value = curRow.find('td:eq(2)').text();
        document.querySelector('#inputVat').value = curRow.find('td:eq(3)').text();
        validBrutto();
        // kategoria:
        switch(curRow.find('td:eq(5)').text()){
            case "odzież":
                document.querySelector('#inputKategoria').value = 1;
                break;
            case "kosmetyki":
                document.querySelector('#inputKategoria').value = 2;
                break;
            case "żywność":
                document.querySelector('#inputKategoria').value = 3;
                break;
        }
        //opcje:
        let opcjeZtabeli = curRow.find('td:eq(6)').text();
        let opcjeDoZaznaczenia = opcjeZtabeli.split(',');

        // czyszczenie starych odznaczeń, aby się nie nałożyły:
        for(let k=1; k<=5; k++){
            let customSwitchId = 'customSwitch' + k;
            document.getElementById(customSwitchId).checked = false;
        }
        for(let i=0; i<opcjeDoZaznaczenia.length; i++){
            let customSwitchId = 'customSwitch' + opcjeDoZaznaczenia[i];
            document.getElementById(customSwitchId).checked = true;
        }
        // ocena:
        let ktoryRadio = 'exampleRadios' + curRow.find('td:eq(7)').text();
        document.getElementById(ktoryRadio).checked =true;

        document.getElementById("button").style.visibility = 'hidden';
        //document.getElementById("button").disabled = true;
        document.getElementById("buttonEdit").style.visibility = 'visible';

        // getting id of current row and sending it to localstorage:
        let rowId = curRow.index();
        window.localStorage.setItem('editingRowId', JSON.stringify(rowId));
        return false;
    });
    $('#myTable').trigger("update");
}

function refreshRow(){
    let rowIndex = JSON.parse(window.localStorage.getItem('editingRowId'));
    let editedRow = document.getElementById('myTable').rows[rowIndex+1];
    if(validAll()){
        editedRow.cells[0].innerHTML = document.getElementById('inputName').value;
        editedRow.cells[1].innerHTML = document.getElementById('inputKod').value;
        editedRow.cells[2].innerHTML = document.getElementById('inputCenaNetto').value;
        editedRow.cells[3].innerHTML = document.getElementById('inputVat').value;
        editedRow.cells[4].innerHTML = document.getElementById('inputCenaBrutto').value;
        editedRow.cells[5].innerHTML = getKategoria();
        editedRow.cells[6].innerHTML = getOpcje();
        editedRow.cells[7].innerHTML = getOcena();
    }

    // document.getElementById('myTable').rows[rowIndex+1].cells[0].innerHTML = document.getElementById('inputName').value;
    document.getElementById("buttonEdit").style.visibility = 'hidden';
    //document.getElementById("button").disabled = true;
    document.getElementById("button").style.visibility = 'visible';
    clearAll();
}

function refreshRow2(){
    let rowIndex = JSON.parse(window.localStorage.getItem('editingRowId'));
    let oldValue = document.getElementById('myTable').rows[rowIndex+1].cells[0].innerHTML;
    let newValue = document.getElementById('inputName').value;
    if(oldValue === newValue){
        if(validAllAfterEditing()){
            document.getElementById("myTable").deleteRow(rowIndex+1);
            $('#myTable').trigger('update');
            wprowadzaniePoEdycji();
            localStorage.removeItem('editingRowId');
        }
    }
    else{
        document.getElementById("myTable").deleteRow(rowIndex+1);
        $('#myTable').trigger('update');
        wprowadzanie();
        localStorage.removeItem('editingRowId');
    }
    // document.getElementById('myTable').rows[rowIndex+1].cells[0].innerHTML = document.getElementById('inputName').value;
    document.getElementById("buttonEdit").style.visibility = 'hidden';
    //document.getElementById("button").disabled = true;
    document.getElementById("button").style.visibility = 'visible';
    //clearAll();
    return false;
}

function wprowadzanie(){
    //alert('przed');
        if(validAll()){
            //alert('po valid all');
            // add row
            var row = '<tr><td>'+document.getElementById('inputName').value+'</td>' +
                '<td>'+document.getElementById('inputKod').value+'</td>' +
                '<td>'+document.getElementById('inputCenaNetto').value+'</td>' +
                '<td>'+document.getElementById('inputVat').value+'</td>' +
                '<td>'+document.getElementById('inputCenaBrutto').value+'</td>' +
                '<td>'+getKategoria()+'</td>' +
                '<td>'+getOpcje()+'</td>' +
                '<td>'+getOcena()+'</td>' +
                '<td>fotka.jpg</td>' +
                '<td><button type="button" class="basket" title="toBasket">DO KOSZYKA</button>' +
                '<button type="button" class="edit" title="toEdition" onclick="editRow()">EDYCJA</button>' +
                '<button type="button" class="remove" title="Remove this row" onclick="deleteRow()">USUŃ</button></td></tr>',

                $row = $(row),

                resort = true;
            clearAll();

            $('#myTable')
                .find('tbody').append($row)
                .trigger('addRows', [$row, resort]);
            return true;
        }
        return false;
}

function wprowadzaniePoEdycji(){
    // add row
    var row = '<tr><td>'+document.getElementById('inputName').value+'</td>' +
        '<td>'+document.getElementById('inputKod').value+'</td>' +
        '<td>'+document.getElementById('inputCenaNetto').value+'</td>' +
        '<td>'+document.getElementById('inputVat').value+'</td>' +
        '<td>'+document.getElementById('inputCenaBrutto').value+'</td>' +
        '<td>'+getKategoria()+'</td>' +
        '<td>'+getOpcje()+'</td>' +
        '<td>'+getOcena()+'</td>' +
        '<td>fotka.jpg</td>' +
        '<td><button type="button" class="basket" title="toBasket">DO KOSZYKA</button>' +
        '<button type="button" class="edit" title="toEdition" onclick="editRow()">EDYCJA</button>' +
        '<button type="button" class="remove" title="Remove this row" onclick="deleteRow()">USUŃ</button></td></tr>',

        $row = $(row),

        resort = true;
    clearAll();

    $('#myTable')
        .find('tbody').append($row)
        .trigger('addRows', [$row, resort]);
    return true;
}

function validAmountInBasket(cell){
    if(cell.innerHTML){
        if(cell.innerHTML < 0){
            cell.innerHTML = 0;
        }
    }
    else{
        cell.innerHTML = 0;
    }
    // tutaj może usuwanie wiersza z zerową wartością

    return false;
}

function sumowanieIlosciTowarow(){
    let tabela = document.getElementById('basketTable');
    //let tabelaBody = tabela.getElementsByTagName('tr');
    let iloscWierszy = tabela.rows.length-1;
    let sum = 0;
    for(let i = 1; i <= iloscWierszy; i++){
        sum += (parseFloat(tabela.rows[i].cells[2].innerHTML) * parseFloat(tabela.rows[i].cells[1].innerHTML));
    }
    return sum;
}

function sumowanieKosztow(){
    let sumaKosztow = sumowanieIlosciTowarow() + getCostOfDelivery();
    document.querySelector('#price').value = sumaKosztow;
    //document.getElementById("price").innerHTML = toString(sum);
}

function doTabeliKoszyka(itemInBasket){
    var row = '<tr><td>'+itemInBasket.name+'</td>' +
        '<td>'+itemInBasket.cenaBrutto+'</td>' +
        '<td contenteditable="true" onblur="validAmountInBasket(this); sumowanieKosztow()">'+itemInBasket.liczbaSztuk+'</td></tr>',

        $row = $(row),
        resort = true;

    $('#basketTable')
        .find('tbody').append($row)
        .trigger('addRows', [$row, resort]);
    return false;
}

function wprowadzanieDoKoszyka(){
    // tutaj powinno być czyszczeniestarego koszyka
    let tabela = document.getElementById("basketTable");
    for(let i=0; i<tabela.rows.length; i++){
        if(tabela.rows.length >1){
            tabela.deleteRow(1);
        }

    }


    let storageItems = window.localStorage.getItem('koszyk');

    if(storageItems){
        $('#exampleModal').modal('show');
        let kosz = JSON.parse(storageItems);
        for(let i = 0; i<kosz.length; i++){
            doTabeliKoszyka(kosz[i]);
            sumowanieKosztow();
        }
    }
    else{
        alert('Koszyk jest pusty - Kup coś...');
        $('#exampleModal').modal('hide');
    }
}

function czyszczenieStorage(){
    if(!sumowanieIlosciTowarow()){
        alert('Transakcja anulowana - wybrano zerowe ilości artykułów');
    }
    else{
        alert('Zakup dokonany pomyślnie. Dziękujemy.');
    }
    localStorage.removeItem('koszyk');
}

function getCostOfDelivery(){
    let cost = document.querySelector('#opcjeDostawy').value;
    switch(cost){
        case "1":
            return 15;
            break;
        case "2":
            return 20;
            break;
        case "3":
            return 0;
            break;
    }


}

