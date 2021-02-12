import React, {useEffect, useState} from "react";
import "./Calendar.css";

//Fullcalendar and Realted Plugins
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; 
import listPlugin from '@fullcalendar/list'; //For List View
import googleCalendarPlugin from "@fullcalendar/google-calendar";
// ES6 Modules 
import Swal from "sweetalert2";
import axios from "axios";
//import Entry from "./Entry";
//import Data from "./Data";
function eventResize(event, delta, revertFunc) {
  var endDate = event.end.format().toString();
  var startDate = event.start.format().toString();
}
//mapping events from Entry
/*function createEvent(eventAdd) {
  return(
    <Entry
      key={eventAdd.id}
      title={eventAdd.title}
      date={eventAdd.date}
    />
  );
}*/
function Calendar(props) {
  var Title=[];
  var Time=[];
  const [event,setEvent]= useState();
///  scopes = 'https://www.googleapis.com/auth/calendar';
  const key = "AIzaSyCQu3FwUp9ynWQ20WieHE9pSSh5StTdTlk";
  const id = "danasobh46@gmail.com";
  //https://www.googleapis.com/calendar/v3/calendars/${<YOUR_CALENDAR_ID>}/events?key=${<YOUR_API_KEY>}
  const url ="https://www.googleapis.com/calendar/v3/calendars/"+id+"/events?key="+key;
  useEffect(()=>{
    axios.get(url).then((res)=>{
          const responseUser = res.data;
          setEvent(responseUser);
        }).catch(erros => {
          console.log(erros);
        });
      });
          var Event =[];
          for (let i = 0; i < 4; i++) {
            Event.push({
            Title: event && event.items[i].summary,
            Time: event && event.items[i].start.date,
          })
          var events=Event[i]
          console.log(events)
         }
       /*  var myEvents = Event.map(event => ({
          Title: event.Title,
          Time: event.Time
        }));
        console.log(myEvents);*/
        
      /*var myEvents = Event.map(event => ({
      Title: event.Title,
      Time: event.Time
    }));*/
      
         // const Title= event && event.items[0].summary 
          //const Time= event && event.items[0].start.date
  return (
<div className="maincontainer">
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, listPlugin,googleCalendarPlugin  ]}
      timeFormat= "dddd, MMMM Do YYYY, h:mm:ss a"
      initialView="dayGridMonth"
      editable= "true"
      droppable= "true"
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek',
      }}
      /*eventClick={
        function(arg){
          alert("Hello "+ arg.event.title)
          alert(arg.event.start)
        }
      }*/
      events={[
        { title: 'event 1', date: '2021-02-11' },
        { title: 'event 2', date: '2021-02-15' },
        { title: 'event 2', date: '2021-02-15' },
        {
        start: '2021-02-10',
        end: '2021-02-12',
        overlap: false,
        display: 'background',
        color: '#ff9f89'
      },
      {
        title: 'Meeting',
        start: '2021-02-13T11:00:00',
        constraint: 'availableForMeeting', // defined below
        color: '#257e4a'
      },
      {
        groupId: 'availableForMeeting',
        start: '2021-02-13T10:00:00',
        end: '2021-02-13T16:00:00',
        display: 'background'
      },
      /* { function(){
          for (let i = 0; i < 4; i++) {
            Event.push({
            Title: event && event.items[i].summary,
            Time: event && event.items[i].start.date,
          })
          return Events
         }
        }},*/
      ]}
      /*eventRender={[ function(event, element, view) {
             if (!event.description) return false;
      }
      ]}*/
      eventClick={function(arg) {
        eventResize= eventResize
          Swal.fire({
               title: 'Event',
               showDenyButton: true,
               showCancelButton: true,
               confirmButtonText: 'Edit Event',
               denyButtonText: 'Delete Event',
               cancelButtonText: 'Cancel',
               initialDate: '2021-02-12',
                editable: true,
                selectable: true,
                 selectHelper: true,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
              title: 'Enter your new event',
               input: 'text',
               inputPlaceholder: 'Enter your new event',
               showCancelButton: true,
            })
            } else if (result.dismiss === Swal.DismissReason.deny) {
                    Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                 }
          })
      }}
    />
     {event && <h1>Hello, {events+ event.items[1].summary}</h1>}

</div>

);
}

export default Calendar;