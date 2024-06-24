$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const employeeNumber = urlParams.get('id');
  console.log("Employee Number in URL:", employeeNumber);

  if (employeeNumber) {
      $.ajax({
          url: `https://kerbau.odaje.biz/getstaffbyid.php?id=${employeeNumber}`,
          method: 'GET',
          success: function(response) {
              console.log("Response from getstaffbyid.php:", response);
              const data = JSON.parse(response);
              console.log("Parsed Data:", data);
              if (JSON.parse(data[0]).status === 1) {
                  const staffData = JSON.parse(data[1]);
                  $('#staff-details').html(
                      `<div class="panel panel-default">
                          <div class="panel-heading"><strong>Employee Number:</strong> ${staffData.employeeNumber}</div>
                          <div class="panel-body">
                              <p><strong>Name:</strong> ${staffData.firstName} ${staffData.lastName}</p>
                              <p><strong>Extension:</strong> ${staffData.extension}</p>
                              <p><strong>Email:</strong> ${staffData.email}</p>
                              <p><strong>Office Code:</strong> ${staffData.officeCode}</p>
                              <p><strong>Job Title:</strong> ${staffData.jobTitle}</p>
                          </div>
                      </div>`
                  );
              } else {
                  $('#staff-details').html('<div class="alert alert-warning">No data found for the given employee number.</div>');
              }
          },
          error: function() {
              $('#staff-details').html('<div class="alert alert-danger">Error fetching staff details.</div>');
          }
      });
  } else {
      $('#staff-details').html('<div class="alert alert-danger">Invalid employee number.</div>');
  }
});