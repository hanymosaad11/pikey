import React, { useEffect, useState } from "react";
import "./Promotion.css";

const Promotion = () => {
  // =========================
  // Function: Calculate Countdown
  // =========================
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-10-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  // =========================
  // State + Timer
  // =========================
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // =========================
  // JSX Return
  // =========================
  return (
    <section className="promotion-section">
      {/* ---------- Left Image ---------- */}
      <div className="promotion-left">
        <img src="/img/man2.png" alt="Promotion" />
      </div>

      {/* ---------- Right Content ---------- */}
      <div className="promotion-right ">
        <p className="promotion-label">PROMOTION</p>
        <h2 className="promotion-title">
          Hurry up! <span>40% OFF</span>
        </h2>
        <p className="promotion-subtitle">
          Thousands of high tech are waiting for you
        </p>
        <p className="promotion-expire">Offer expires in:</p>

        {/* Countdown */}
        <div className="promotion-countdown">
          {/* Days */}
          <div className="time-column">
            <div className="promotion-timebox">
              <span>{timeLeft.days}</span>
            </div>
            <small>Days</small>
          </div>

          {/* Hours */}
          <div className="time-column">
            <div className="promotion-timebox">
              <span>{timeLeft.hours}</span>
            </div>
            <small>Hours</small>
          </div>

          {/* Minutes */}
          <div className="time-column">
            <div className="promotion-timebox">
              <span>{timeLeft.minutes}</span>
            </div>
            <small>Minutes</small>
          </div>

          {/* Seconds */}
          <div className="time-column">
            <div className="promotion-timebox">
              <span>{timeLeft.seconds}</span>
            </div>
            <small>Seconds</small>
          </div>
        </div>

        {/* Button */}
        <button className="promotion-btn">SHOP NOW</button>
      </div>
    </section>
  );
};

export default Promotion;
