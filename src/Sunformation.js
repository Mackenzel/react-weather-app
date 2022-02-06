import React from `react`;
import "./Sunformation.css";

export default function Sunformation() {
  let sunData = {
    sunrise: "6:50",
    time: "3:34 PM",
    sunset: "5:50",
  };
  return (
    <div className="Sunformation">
      <div className="row p-3 justify-content-evenly align-items-center section-3">
        <div className="col-1 sun">
          <span>Sunrise</span>
          <img
            src="https://img.icons8.com/ios/50/000000/sunrise--v1.png"
            alt="Sun-rising"
          />
          <span id="sunrise">{sunData.sunrise}</span>
          <small>AM </small>
        </div>
        <div className="col-3 align-self-end">
          <h5>
            <span id="hour-minute" className="current-time">
              {sunData.time}
            </span>
          </h5>
        </div>
        <div className="col-1 sun">
          <span>Sunset</span>
          <img
            src="https://img.icons8.com/ios/50/000000/sunset--v1.png"
            alt="Sun-setting"
          />
          <span id="sunset">{sunData.sunset}</span>
          <small>PM</small>
        </div>
      </div>
    </div>
  );
}
