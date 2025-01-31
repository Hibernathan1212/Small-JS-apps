const stationURL = "https://meteostat.p.rapidapi.com/stations/nearby";
const dataURL = "https://meteostat.p.rapidapi.com/point/daily";

async function getData() { // Retrieve the values of city, start date, and end date from input fields. 
    //const city = document.getElementById('city').value;
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;

    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    if(!(lat && lon && startDate && endDate))  {
        alert('Please input all data.');
        return;
    }

    let url = new URL(stationURL); // Create a URL object. 
    url.search = new URLSearchParams({ // Use URLSearchParams class to modify its query parameter. 
        //query: city
        lat: lat,
        lon: lon,
        limit: 10
    });

    let promise = await fetch(url, { // Make a request to find weather stations based on the city we want. 
        headers: {
            "x-rapidapi-key": '17b3308c62msh7b64f30b291f774p13920fjsn46ce90d56132' // Include API Key to authenticate the request. 
        },
    });

    let data = await promise.json(); // Convert the response to JSON format. 
    if (!data.data) { // If no data then return the function.
        alert('No data available for the location.');
        return; 
    } 
    const stationID = data.data[0].id; // Pick the ID of the first weather station. 
    const graphData = await retrieveData(lat, lon, startDate, endDate); // Use the Station ID to get weather data. 
    if (!graphData) return; // If no data from first weather station then return. 
    updateChart(graphData); // Update the chart.
}   

async function retrieveData(lat, lon, start, end) { // This function also has to be async because we'll be making another fetch() request. 
    const xDates = []; 
    const yTemps = [];
  
    let url = new URL(dataURL); // Remember, dataURL is the global variable we defined at the beginning of the JS file. 
    url.search = new URLSearchParams({ // Add required parameters to retrieve weather data from a specific station. 
      //station: id, 
        lat: lat,
        lon: lon,
        start: start,
        end: end
    });

    let promise = await fetch(url, {
        headers: {
        "x-rapidapi-key": '17b3308c62msh7b64f30b291f774p13920fjsn46ce90d56132' // Include API Key to authenticate the request. 
    },
    });
    let data = await promise.json(); // Convert the response to JSON format. 

    if (data.data && data.data[0].tavg) { // Make sure that there is weather data in the API response. 
        for (day of data.data) { // Iterate through the array of objects and add the average temperature and date to the xDates and yTemps array. 
          xDates.push(day.date);
          yTemps.push(day.tavg);
        }
        return { xDates, yTemps };
    } else { // If there's no weather data for us to use, simply alert to user and terminate the program. 
        alert("No data available for this city.");
        return false;
    }
}

function updateChart(inputData) {
        const newData = {
        label: `Average temperature`,
        data: inputData.yTemps,
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1 
    };
    myChart.data.datasets[0] = newData;
    myChart.data.labels = inputData.xDates;
    myChart.update();    
}

const ctx = document.getElementById('myChart');

let myChart = new Chart(ctx, {
    type: 'line',
    data: {},
    labels: [],
    datasets: [{
        label: "",
        data: [],
        fill: false,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }],
    options: {
        responsive: true,
        scales: {
            xAxes: [{
                ticks: {
                    maxTicksLimit: 10,
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Temperature in Celsius",
                    padding: 20
                }
            }]
        }    
      }
});