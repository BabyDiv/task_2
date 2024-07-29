function createRow() {
  var numRows = document.getElementById("myTable").tBodies[0].rows.length;
  
  var newRow = document.createElement("TR");
  
  newRow.setAttribute("id", "row_" + numRows);
  
  var cell1 = document.createElement("TD");
  var cell2 = document.createElement("TD");
  var cell3 = document.createElement("TD");
  var cell4 = document.createElement("TD");
  var cell5 = document.createElement("TD");


  cell1.innerHTML = "<label for='text'>Capability</label><input type='text'>";
  cell2.innerHTML = "<form><label for='type'>Type</label><select required='' name='capability_commitments' class='capability_commitments' id='capability_commitments_type_1'><option value='resource'>Resource</option><option value='competence'>Competence</option><option value='habit' selected=''>Habit</option></select></form>";
  cell3.innerHTML = "<label for='approach'>Approach</label><input type='text'>";
  cell4.innerHTML = "<label for='date'>Start date</label><input type='date' id='start' class='start' 'name='trip-start' value='2024-07-26' min='2024-07-26' max='2025-07-26'>";
  cell5.innerHTML = "<label for='delete'>Delete</label><button class='delete-btn'>Delete</button>";

  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);
  newRow.appendChild(cell4);
  newRow.appendChild(cell5);
  
  document.getElementById("myTable").tBodies[0].appendChild(newRow);
}

  document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete-btn')) {
        const row = event.target.closest('tr');
        if (row) {
          row.remove();
        }
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navList = document.getElementById('nav-list');
    
    burgerMenu.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
    
    window.addEventListener('click', (event) => {
      if (!burgerMenu.contains(event.target) && !navList.contains(event.target)) {
        navList.classList.remove('show');
      }
    });
  });