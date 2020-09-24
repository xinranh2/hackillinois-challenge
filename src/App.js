import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Schedule from './components/Schedule';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  

  //const { currentSection} = this.state;
  const signs = ['Friday', 'Saturday', 'Sunday'];
  const eventStart = 1582869600;
  const eventEnd = 1583128799;
  const keyDownButton = 70;
  
  return (
    <BrowserRouter>
      <div>
        <Route exact path = "/" component = {Schedule}></Route>
      </div>
    </BrowserRouter>
    // <div className="App"> 
    //   { 
    //   events.map(event => (
    //     <div>
    //       <h2>{event.name}</h2>
    //       <p>{event.description}</p>
    //       <div>{new Date(event.startTime * 1000).toDateString()} - {new Date(event.endTime * 1000).toDateString()}</div>
    //     </div>
    //   ))
      /* {
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
      } */
    //</div>
  );
}

export default App;
