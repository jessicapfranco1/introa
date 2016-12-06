//HINT: Click on the title for a secret message
var imageArray = [
	
    "sweater.jpg", "couch.jpg", "dogandme.jpg", "dog.jpg", "sweaterbuddies.jpg"
];
var currentIndex = 0;

function renderImage() {
	if (currentIndex < 0) {
		currentIndex = imageArray.length - 1;
	} else if (currentIndex >= imageArray.length) {
		currentIndex = 0;
	}

	$('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage();

$('#forwardBtn').on('click', function(){
	//this is what happens when it's clicked!
	currentIndex++;
	renderImage();
});

$('#backBtn').on('click', function(){
	currentIndex--;
	renderImage();
});

var name = prompt("What's your name?");
var outputString = "Happy Holidays, " + name + 
"!";
$("h1").html(outputString);

      
      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
// draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Person');
        data.addColumn('number', 'Cheer');
        data.addRows([
          ['Jess', 4],
          ['Alex', 4],
          ['Mom', 1],
          ['Dad', 1],
          ['Dog', 10]
        ]);

          var chartWidth = $(window).width()*0.5;
          
        // Set chart options
        var options = {'title':'Amount of Gifts Recieved',
                       'width': chartWidth,
                       'height':400,
                       'is3D': true,
                       'backgroundColor': '#ecc8c8',
                       'colors': ['#f6b1c3','#BC0D35','#a20d1e', '#fce8ee', '#e21d58'],
                       'titleTextStyle': {
                           fontName: 'Kalam',
                           color: "#a20d1e",
                           fontSize: 20

                       },
                       'legend': 
                       {
                       'textStyle': {
                       fontName: 'Kalam',
                        color: "#a20d1e",
                           fontSize: 15
                      }
                      }
                      };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

document.getElementById('title').onclick = function(){alert("Prepare yourself for the holiday magic.");}



