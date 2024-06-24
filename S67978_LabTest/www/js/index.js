$(document).ready(function() {
  $.ajax({
      url: 'https://kerbau.odaje.biz/getstaff.php',
      method: 'GET',
      success: function(response) {
          console.log("Response from getstaff.php:", response);
          const data = JSON.parse(response);
          let status = false;

          data.forEach(item => {
              const parsedItem = JSON.parse(item);
              console.log("Parsed Item:", parsedItem);
              if (parsedItem.status === 1) {
                  status = true;
              } else if (parsedItem.email) {
                  $('#staff-list').append(
                      `<li class="list-group-item">
                          <a href="javascript:void(0)" id="${parsedItem.employeeNumber}" onclick="showDetails(${parsedItem.employeeNumber})">${parsedItem.email}</a>
                      </li>`
                  );
              }
          });

          if (!status) {
              $('#staff-list').append('<li class="list-group-item">No staff found.</li>');
          }
      },
      error: function() {
          $('#staff-list').append('<li class="list-group-item">Error fetching staff data.</li>');
      }
  });
});

function showDetails(employeeNumber) {
  console.log("Employee Number clicked:", employeeNumber);
  window.location.href = `secondpage.html?id=${employeeNumber}`;
}