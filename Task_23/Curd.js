
let selectedRow = null;
function onFormsubmit() {
   let  dataform = record();
   if(selectedRow === null){
    insertNewRecord(dataform);

   }else{
   updateRecord(dataform)}
   resetForm();

   return false;
}

function record() {
    let dataform = {};
    dataform["fname"] = document.getElementById("fname").value;
    dataform["InputEmail1"] = document.getElementById("InputEmail1").value;
    dataform["InputPassword1"] = document.getElementById("InputPassword1").value;
    dataform["ageStore"] = document.getElementById("ageStore").value;
    return dataform;
}

function insertNewRecord(data) {
    let table = document.getElementById("tableTect").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.fname;
    let cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.InputEmail1;
    let cell3 =newRow.insertCell(2);
        cell3.innerHTML = data.InputPassword1;
    let cell4 =newRow.insertCell(3);
        cell4.innerHTML= data.ageStore;
    let cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>`
    let cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<a href="#" onClick='onDelete(this)'>Delete</a>`

}

function resetForm(){
    document.getElementById('fname').value = '';
    document.getElementById('InputEmail1').value = '';
    document.getElementById('InputPassword1').value = '';
    document.getElementById('ageStore').value = '';
    selectedRow = null;
}

function onEdit (td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fname').value = selectedRow.cells[0].innerHTML;
    document.getElementById('InputEmail1').value = selectedRow.cells[1].innerHTML;
    document.getElementById('InputPassword1').value = selectedRow.cells[2].innerHTML;
    document.getElementById('ageStore').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.InputEmail1;
    selectedRow.cells[2].innerHTML = formData.InputPassword1;
    selectedRow.cells[3].innerHTML = formData.ageStore;
}


function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('tableTect').deleteRow(row.rowIndex);
        resetForm();
    }
}