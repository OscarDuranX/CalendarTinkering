<template>

    <calendar-events></calendar-events>

    <calendar></calendar>
</template>

<script>
    import Calendar from './Calendar.vue'
    import CalendarEvents from './CalendarEvents.vue'

    export default {
      components: [ Calendar, CalendarEvents],
      mounted(){
        console.log('prova')
      }
    }
</script>

<script>
  $('#calendar').fullCalendar({
    theme: true,
    editable: true,
    droppable: true,
    drop: function () {
      // is the "remove after drop" checkbox checked?
      if ($('#drop-remove').is(':checked')) {
        // if so, remove the element from the "Draggable Events" list
        $(this).remove();
      }
    },
    header: {
      left: 'prev,next,today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },
    events: [
      {
        title: 'Examen',
        start: moment().format()
      },
      {
        title: 'Examen 2',
        start: moment().add(1, 'days').format()
      },
      {
        title: 'Examen 3',
        start: '2017-04-19T11:30:00',
        end: '2017-04-19T12:30:00',
        allDay: false
      }
    ]
  })
</script>