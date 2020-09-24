import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Schedule from './Schedule';

function App() {
  const [events, setEvents] = useState([]);

  console.log("hello");

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

  //const { currentSection} = this.state;
  const signs = ['Friday', 'Saturday', 'Sunday'];
  const eventStart = 1582869600;
  const eventEnd = 1583128799;
  const keyDownButton = 70;
  
  return (
    <div className="App"> 
      {
      events.map((e, i) => {
        const len = events.length;
        const dayOfWeek = Schedule.getDayofWeek(e.startTime);

        if (e.startTime >= eventStart && e.startTime <= eventEnd) {
          return (
            <div className="event-wrapper" key={e.id}>
              <div className="event-box">
                <div className="event-box-time">
                  <div className={(i !== 0 && e.startTime === events[i - 1].startTime) ? 'event-box-hidden' : ''}>
                    {Schedule.getTime(e.startTime)}
                  </div>
                </div>
                <div className="event-box-text">
                  <div className="event-box-name">
                    {e.name.toUpperCase()}
                  </div>
                  <div className="event-sponsor">
                    {e.sponsor && `Sponsored by ${e.sponsor}`}
                  </div>
                  <div>
                    {e.locations.map(l => (
                      <div key={l.longitude}>{l.description}</div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={(i + 1 === len || Schedule.getDayofWeek(events[i + 1].startTime) !== dayOfWeek || (i !== len - 1 && e.startTime === events[i + 1].startTime)) ? '' : 'event-line'} />
            </div>
          );
        }
        return (<div key={e.id} />);
      })
      }
    </div>
  );
}

export default App;
