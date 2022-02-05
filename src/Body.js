import "./Body.css";

export default function Body() {
  let weatherData = {
    city: "New York",
    temp: 25,
    date: "Monday",
    description: "cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 20,
    wind: 15,
  };
  return (
    <div className="Body">
      <div className="row">
        <h1 id="found-city">{weatherData.city}</h1>
      </div>
      <div className="row justify-content-evenly align-items-center">
        <div className="col-1 current-left ps-4">
          <img
            id="current-icon"
            src="http://openweathermap.org/img/wn/03d@2x.png"
            className="current-weather-img"
            alt="Current-Weather"
          />
        </div>
        <div className="col-2 current-right offset-1">
          <h2 className="found-temp">
            <span id="found-temp">{weatherData.temp}</span>
            <span className="degree-unit">
              <a href="/">°F</a>|<a href="/">°C</a>
            </span>
          </h2>
        </div>

        <div className="row gx-2 justify-content-evenly align-items-center">
          <div className="col-2">
            <div className="p-1 row2-descrip">
              <span id="day" className="current-day">
                {weatherData.date}
              </span>{" "}
              <br />
              <span id="weather-descrip">{weatherData.description}</span>
            </div>
          </div>
          <div className="col-2">
            <div className="p-1 row2-descrip">
              humidity: <span id="humidity">{weatherData.humidity}</span>%<br />
              wind:<span id="windspeed">{weatherData.wind}</span> MpH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
