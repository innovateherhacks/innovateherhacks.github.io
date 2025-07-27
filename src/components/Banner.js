import { useState, useEffect, useRef } from 'react';
import { DateTime } from "luxon";
import '../assets/style.css';
import bannerImage from '../assets/Title_Card_Background.png';
import innovateHerImage from '../assets/InnovateHer.png';

const Banner = () => {
  const targetDate = DateTime.fromObject({
    year: 2025,
    month: 7,
    day: 27,
    hour: 11,
    minute: 0,
    second: 0
  }).setZone("America/New_York", { keepLocalTime: true }).toMillis();

  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        hours: '00',
        minutes: '00',
        seconds: '00',
        expired: true,
      };
    }

    const totalSeconds = Math.floor(difference / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const seconds = totalSeconds % 60;
    const minutes = totalMinutes % 60;

    return {
      hours: String(totalHours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
      expired: false
    };
  }

  useEffect(() => {
    if (!isRunning) return;

    setTimeRemaining(getTimeRemaining);

    intervalRef.current = setInterval(() => {
    const remaining = getTimeRemaining();

    if (remaining.expired) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }

    setTimeRemaining(remaining);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  return (
    <section className="banner" style={{backgroundImage:`url(${bannerImage})`}} >
      <div className="inner-container">
        <img src={innovateHerImage} alt="InnovateHer"></img>
        {isRunning && !timeRemaining.expired ? (
          <div>
            <p className="starts-in">STARTS IN:</p>
            <p className="time">
              {timeRemaining.hours}:{timeRemaining.minutes}:{timeRemaining.seconds}
            </p>
          </div>
          ) : (
          <div>
            <p className="is-live">IS LIVE!</p>
          </div>
          )}
        </div>
    </section>
  );
};

export default Banner;