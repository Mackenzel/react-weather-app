import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="col-2 border-box pb-5">
        <span className="forecast-day">Thur</span>
        <br />
        <span className="max">51</span>
        <span className="min">43</span>
        <span>
          <img
            className="fore-img"
            src="http://openweathermap.org/img/wn/03d@2x.png"
            alt="forecast-description"
          />
        </span>
      </div>
    </div>
  );
}
