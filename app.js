google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
const navigationbar = document.getElementsByClassName('nav')[0];

/*SE SCROLLO CAMBIA LO SFONDO DEL NAV*/
document.addEventListener('scroll',()=>{
  if(window.scrollY > 500){
    navigationbar.style.backgroundColor = ' #111';
  }
  else {
    navigationbar.style.backgroundColor = 'transparent';
  }
});


var open = false;
const sidebar = document.getElementsByClassName("sidebar")[0];
const blocker = document.getElementsByClassName("blocker")[0];
function Menu(){

    if(open){
      sidebar.style.width = "0%";
      setTimeout('document.getElementsByClassName("fas fa-times fa-2x")[0].className = "fas fa-bars fa-2x";',250);
      open=false;
      //blocker.style.display = "none";
    }
    else {
      sidebar.style.width = "100%";
      setTimeout('document.getElementsByClassName("fas fa-bars fa-2x")[0].className = "fas fa-times fa-2x";',250);
      open=true;
      //blocker.style.display = "block";
    }

}

function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Days', ''],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
        ]);

        var options = {
          title: 'Performance 1',
          curveType: 'function',
          legend: { position: 'none' }
        };

        var chart = new google.visualization.LineChart(document.getElementsByClassName('chart')[0]);
        
        chart.draw(data, options);
        
      //------------------------------------------------------------------------------------------
        
       // Create the data array
       var data = google.visualization.arrayToDataTable([
          ['Days', ''],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
        ]);

        var options = {
          title: 'Performance 2',
          curveType: 'function',
          legend: { position: 'none' }
        };

        var chart = new google.visualization.LineChart(document.getElementsByClassName('chart')[1]);

        chart.draw(data, options);
        
        //------------------------------------------------------------------------------------------
        
        var data = google.visualization.arrayToDataTable([
          ['Days', ''],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
        ]);

        var options = {
          title: 'Performance 3',
          curveType: 'function',
          legend: { position: 'none' }
        };

        var chart = new google.visualization.LineChart(document.getElementsByClassName('chart')[2]);

        chart.draw(data, options);
        
        //------------------------------------------------------------------------------------------
        
        // Create the data array
        var data = google.visualization.arrayToDataTable([
          ['Days', ''],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
          ['',  Math.floor(Math.random() * 3000)],
        ]);

        var options = {
          title: 'Performance 4',
          curveType: 'function',
          legend: { position: 'none' }
        };

        var chart = new google.visualization.LineChart(document.getElementsByClassName('chart')[3]);

        chart.draw(data, options);
}
 drawChart();