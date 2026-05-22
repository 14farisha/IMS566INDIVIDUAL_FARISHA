// Login 
function loginUser() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "admin" && pass === "1234") {
    window.location.href = "dashboard.html";
    return false;
  } else {
    document.getElementById("errorMsg").innerText = "Invalid username or password!";
    return false;
  }
}

// Chart.js
new Chart(document.getElementById("attendanceChart"), {
  type: 'bar',
  data: {
    labels: ['Minggu 1','Minggu 2','Minggu 3','Minggu 4','Minggu 5','Minggu 6','minggu 7'],
    datasets: [{
      label: 'Kehadiran (%)',
      data: [90,85,88,92,80,60,40],
      backgroundColor: ['#FDB3CA','#A9DFE2','#5C6898','#D1D5FA','#A9DFE2','#FDB3CA','#5C6898']
    }]
  }
});

// Carta Prestasi Kursus
new Chart(document.getElementById("performanceChart"), {
  type: 'pie',
  data: {
    labels: ['Web Design','Database','Networking','Programming'],
    datasets: [{
      data: [80,70,60,90],
      backgroundColor: ['#FDB3CA','#A9DFE2','#5C6898','#D1D5FA']
    }]
  }
});





