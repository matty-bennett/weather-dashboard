let cityName = document.querySelector("#city-name");
let input = document.querySelector("#searchInput");
let city = input.value
let searchArr = [];

// function to save recently searched cities to the search history list

// when search button is clicked, input is stored in search history array and input fetches weather information from api
$("#search-btn").click(function(event) {
    event.preventDefault();
    cityName.textContent = input.value;

    //getCurrentWeather();
    getForecast();
    getCurrentWeather();
    // append searches to 
    

})

let getCurrentWeather = () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=c515bb81c1f3200d80404db068a196ea&units=imperial')
    .then(function(city) {
        return city.json();
    })
    .then(function(data) {
        // current weather info
        let currentTempEl = $('#current-temp');
        let currentTemp = data.main.temp;
        currentTempEl.append(currentTemp + '°F');

        let currentHumidEl = $('#current-humid');
        let currentHumid = data.main.humidity;
        currentHumidEl.append(currentHumid + '%');

        let currentWindEl = $('#current-wind');
        let currentWind = data.wind.speed;
        currentWindEl.append(currentWind + 'mph');

        let latitude = data.coord.lat;
        let longitude = data.coord.lon;

        return fetch('https://api.openweathermap.org/data/2.5/uvi?lat=' + latitude + '&lon=' + longitude + '&appid=c515bb81c1f3200d80404db068a196ea');
        
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let currentUVEl = $('#current-uv');
        let currentUV = data.value;
        currentUVEl.append(currentUV);

        if (data.value >= 8) {
            currentUVEl.addClass('badge badge-danger');
        } else if (data.value >= 6 && data.value < 8) {
            currentUVEl.addClass('badge bg-orange');
        } else if (data.value >= 3 && data.value < 6) {
            currentUVEl.addClass('badge badge-warning');
        } else if (data.value < 3) {
            currentUVEl.addClass('badge badge-success');
        }
    });
    
    
};

let getForecast = () => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=c515bb81c1f3200d80404db068a196ea&units=imperial')
    .then(function(city) {
        return city.json();
    })
    .then(function(data) {
        // day one
        let dayOneTempEl = $('#day-one-temp');
        let dayOneTemp = data.list[3].main.temp;
        dayOneTempEl.append(Math.floor(dayOneTemp) + '°F');

        let dayOneIconEl = $('#day-one-icon');
        let dayOneIcon = data.list[3].weather[0].icon;
        dayOneIconEl.src = 'http://openweathermap.org/img/wn/' + dayOneIcon + '@2x.png';
        console.log(dayOneIcon);

        let dayOneHumidEl = $('#day-one-humid');
        let DayOneHumid = data.list[3].main.humidity;
        dayOneHumidEl.append(DayOneHumid + '%');

        // day two
        let dayTwoTempEl = $('#day-two-temp');
        let dayTwoTemp = data.list[11].main.temp;
        dayTwoTempEl.append(Math.floor(dayTwoTemp) + '°F');

        let dayTwoIconEl = $('#day-two-icon');
        let dayTwoIcon = data.list[11].weather[0].icon;
        dayTwoIconEl.src = 'http://openweathermap.org/img/wn/' + dayTwoIcon + '@2x.png';
        console.log(dayTwoIcon);

        let dayTwoHumidEl = $('#day-two-humid');
        let DayTwoHumid = data.list[11].main.humidity;
        dayTwoHumidEl.append(DayTwoHumid + '%');

        // day three
        let dayThreeTempEl = $('#day-three-temp');
        let dayThreeTemp = data.list[19].main.temp;
        dayThreeTempEl.append(Math.floor(dayThreeTemp) + '°F');

        let dayThreeIconEl = $('#day-three-icon');
        let dayThreeIcon = data.list[19].weather[0].icon;
        dayThreeIconEl.src = 'http://openweathermap.org/img/wn/' + dayThreeIcon + '@2x.png';
        console.log(dayThreeIcon);

        let dayThreeHumidEl = $('#day-three-humid');
        let DayThreeHumid = data.list[19].main.humidity;
        dayThreeHumidEl.append(DayThreeHumid + '%');

        // day 4
        let dayFourTempEl = $('#day-four-temp');
        let dayFourTemp = data.list[27].main.temp;
        dayFourTempEl.append(Math.floor(dayFourTemp) + '°F');

        let dayFourIconEl = $('#day-four-icon');
        let dayFourIcon = data.list[27].weather[0].icon;
        dayFourIconEl.src = 'http://openweathermap.org/img/wn/' + dayFourIcon + '@2x.png';
        console.log(dayFourIcon);

        let dayFourHumidEl = $('#day-four-humid');
        let DayFourHumid = data.list[27].main.humidity;
        dayFourHumidEl.append(DayFourHumid + '%');

        // day 5
        let dayFiveTempEl = $('#day-five-temp');
        let dayFiveTemp = data.list[35].main.temp;
        dayFiveTempEl.append(Math.floor(dayFiveTemp) + '°F');

        let dayFiveIconEl = $('#day-five-icon');
        let dayFiveIcon = data.list[35].weather[0].icon;
        dayFiveIconEl.src = 'http://openweathermap.org/img/wn/' + dayFiveIcon + '@2x.png';
        console.log(dayFiveIcon);

        let dayFiveHumidEl = $('#day-five-humid');
        let DayFiveHumid = data.list[35].main.humidity;
        dayFiveHumidEl.append(DayFiveHumid + '%');
    })
}
 