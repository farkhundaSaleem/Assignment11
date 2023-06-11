var form = document.getElementById("signup-form");
  
   
form.addEventListener("submit", function(event) {
  event.preventDefault();


  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  
  var formDataDiv = document.getElementById("form-data");
  formDataDiv.innerHTML = "<p>Name: " + name + "</p>" +
                          "<p>Email: " + email + "</p>" +
                          "<p>Password: " + password + "</p>";
  
 
  form.reset();
});




function toggleContent() {
  var content = document.querySelector('.content');
  var button = document.getElementById('readMoreBtn');

  if (content.style.height === '100px') {
    content.style.height = 'auto'; // Set height to auto to show the full content
    button.innerHTML = 'Read less';
  } else {
    content.style.height = '100px'; // Set the height back to the initial value
    button.innerHTML = 'Read more';
  }
}









var studentData = [];

var studentForm = document.getElementById('studentForm');
studentForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var grade = document.getElementById('grade').value;

  
  var student = {
    name: name,
    age: age,
    grade: grade
  };

  studentData.push(student); // Add student to the data array
  displayStudentTable(); // Refresh the table
  studentForm.reset(); // Reset the form fields
});

function displayStudentTable() {
  var table = document.getElementById('studentTable');
  table.innerHTML = ''; // Clear the table body

  for (var i = 0; i < studentData.length; i++) {
    var student = studentData[i];

    var row = table.insertRow();

    var nameCell = row.insertCell();
    nameCell.textContent = student.name;

    var ageCell = row.insertCell();
    ageCell.textContent = student.age;

    var gradeCell = row.insertCell();
    gradeCell.textContent = student.grade;

    var actionsCell = row.insertCell();
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteStudent.bind(null, i));
    actionsCell.appendChild(deleteButton);

    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', showEditForm.bind(null, i));
    actionsCell.appendChild(editButton);
  }
}

function deleteStudent(index) {
  studentData.splice(index, 1);
  displayStudentTable(); 
}

function showEditForm(index) {
  var editForm = document.getElementById('editForm');
  editForm.classList.remove('hidden-form');

  var editIndex = document.getElementById('editIndex');
  editIndex.value = index;

  var student = studentData[index];

  var editName = document.getElementById('editName');
  editName.value = student.name;

  var editAge = document.getElementById('editAge');
  editAge.value = student.age;

  var editGrade = document.getElementById('editGrade');
  editGrade.value = student.grade;
}

function cancelEdit() {
  var editForm = document.getElementById('editForm');
  editForm.classList.add('hidden-form');
  editForm.reset();
}

var editForm = document.getElementById('editForm');
editForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  var editIndex = document.getElementById('editIndex').value;
  var editName = document.getElementById('editName').value;
  var editAge = document.getElementById('editAge').value;
  var editGrade = document.getElementById('editGrade').value;

  
  studentData[editIndex].name = editName;
  studentData[editIndex].age = editAge;
  studentData[editIndex].grade = editGrade;

  displayStudentTable(); 
  cancelEdit(); 
});

displayStudentTable(); 





// modal

// Modal Functions
function openModal(imagePath) {
  var modal = document.getElementById('modal');
  var modalImg = document.getElementById('modal-img');

  modal.classList.remove('modal-close');
  modal.classList.add('modal-open');
  modal.style.display = 'block';
  modalImg.src = imagePath;
}

function onClosedImagModal() {
  var modal = document.getElementById('modal');

  modal.classList.remove('modal-open');
  modal.classList.add('modal-close');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 550);
}

// Zoom Functions
function zoomIn() {
  var modalImg = document.getElementById('modal-img');
  var currentSize = parseFloat(window.getComputedStyle(modalImg).width);
  var newSize = currentSize + 10;
  modalImg.style.width = newSize + 'px';
}

function zoomOut() {
  var modalImg = document.getElementById('modal-img');
  var currentSize = parseFloat(window.getComputedStyle(modalImg).width);
  var newSize = currentSize - 10;
  modalImg.style.width = newSize + 'px';
}







