import { useState, useEffect, useRef } from 'react';
import { DateTime } from "luxon";
import './TitleCard.css';
import titleCardImage from './images/Title_Card_Background.png';
import innovateHerImage from './images/InnovateHer.svg';

const TitleCard = () => {
  const targetDate = DateTime.fromObject({
    year: 2026,
    month: 2,
    day: 7,
    hour: 8,
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
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
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
    <section className="title-card" style={{backgroundImage:`url(${titleCardImage})`}} >
      <div className="inner-container">
        <img src={innovateHerImage} alt="InnovateHer"></img>
        {isRunning && !timeRemaining.expired ? (
          <div>
            <p className="starts-in">STARTS IN:</p>
            <p className="time">
              {timeRemaining.days}:{timeRemaining.hours}:{timeRemaining.minutes}:{timeRemaining.seconds}
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

export default TitleCard;