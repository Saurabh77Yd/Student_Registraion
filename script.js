var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}
// Takeing all form value
function readFormData() {
  var formData = {};
  formData["studentName"] = document.getElementById("studentName").value;
  formData["stu_ID"] = document.getElementById("stu_ID").value;
  formData["email"] = document.getElementById("email").value;
  formData["con_Num"] = document.getElementById("con_Num").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("studentsList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.studentName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.stu_ID;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.email;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.con_Num;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onClick="onEdit(this)"><i class="fa-regular fa-pen-to-square"></i></a>
                       <a onClick="onDelete(this)"><i class="fa-solid fa-trash"></i></a>`;
}

// Reset input value after submit form
function resetForm() {
  document.getElementById("studentName").value = "";
  document.getElementById("stu_ID").value = "";
  document.getElementById("email").value = "";
  document.getElementById("con_Num").value = "";
  selectedRow = null;
}

// Edit button all value in form
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("studentName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("stu_ID").value = selectedRow.cells[1].innerHTML;
  document.getElementById("email").value = selectedRow.cells[2].innerHTML;
  document.getElementById("con_Num").value = selectedRow.cells[3].innerHTML;
}
// Update the value
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.studentName;
  selectedRow.cells[1].innerHTML = formData.stu_ID;
  selectedRow.cells[2].innerHTML = formData.email;
  selectedRow.cells[3].innerHTML = formData.con_Num;
}
// Dleete item from table
function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("studentsList").deleteRow(row.rowIndex);
    resetForm();
  }
}
// Check for required feild
function validate() {
  isValid = true;
  if (document.getElementById("studentName").value == "") {
    isValid = false;
    document
      .getElementById("studentNameValidationError")
      .classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("studentNameValidationError")
        .classList.contains("hide")
    )
      document
        .getElementById("studentNameValidationError")
        .classList.add("hide");
  }
  return isValid;
}
