import React, {useState, useEffect} from 'react';
import moment from 'moment';
import 'moment-timezone';
import { Container, Row, Col } from 'react-bootstrap';

import './style.scss';

export default function Schedule () {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    //whatever is here runs once when component is loaded
    //setEvents('bye');
    //cannot do events = bye
    fetch('https://api.hackillinois.org/event/').then(
      res => res.json())
      .then(json =>{
        const temp = json.events;
        temp.sort((a, b) => a.startTime - b.startTime);
        setEvents(temp)
    })
  }, [])

  function getTime(d) {
    return moment.unix(d).tz('America/Chicago').format('h:mm a');
  }

  function getDayofWeek(d) {
    const dd = moment.unix(d).tz('America/Chicago').day();
    return (dd + 2) % 7;
  }

  const formatDate = date => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

  return (
      <div className = 'schedule'>
        <div className = 'day-of-week'>
          <h1>Friday!</h1>
        </div>
        <div className = 'event-wrapper'>{ 
          events.map((event, i) => {
            if (getDayofWeek(event.startTime) == 0) {
              return (
              <div className = 'event'>
                  <div className = 'event-time'>{getTime(event.startTime)} - {getTime(event.endTime)}</div>
                  <div className = 'color-line'></div>
                
                <div className = 'event-inner'>
                  <div className = 'event-name'>
                    <h2>{event.name}</h2>
                  </div>
                  <div className = 'event-line'></div>
                  <div className = 'event-desc'>
                  <p>{event.description}</p>
                  </div>
                </div>
              </div>
            );
            }
        })
      }
      </div>
      <div className = 'day-of-week'>
          <h1>Saturday!</h1>
        </div>
        <div className = 'event-wrapper'>{ 
          events.map((event, i) => {
            if (getDayofWeek(event.startTime) == 1) {
              return (
              <div className = 'event'>
                  <div className = 'event-time'>{getTime(event.startTime)} - {getTime(event.endTime)}</div>
                  <div className = 'color-line'></div>
                
                <div className = 'event-inner'>
                  <div className = 'event-name'>
                    <h2>{event.name}</h2>
                  </div>
                  <div className = 'event-line'></div>
                  <div className = 'event-desc'>
                  <p>{event.description}</p>
                  </div>
                </div>
              </div>
            );
            }
        })
      }
      </div>
      <div className = 'day-of-week'>
          <h1>Sunday!</h1>
        </div>
        <div className = 'event-wrapper'>{ 
          events.map((event, i) => {
            if (getDayofWeek(event.startTime) == 2) {
              return (
              <div className = 'event'>
                  <div className = 'event-time'>{getTime(event.startTime)} - {getTime(event.endTime)}</div>
                  <div className = 'color-line'></div>
                
                <div className = 'event-inner'>
                  <div className = 'event-name'>
                    <h2>{event.name}</h2>
                  </div>
                  <div className = 'event-line'></div>
                  <div className = 'event-desc'>
                  <p>{event.description}</p>
                  </div>
                </div>
              </div>
            );
            }
        })
      }
      </div>
      </div>
  )
  
}