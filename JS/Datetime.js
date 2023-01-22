var t = new Date()
console.log(t.getTime());
console.log(t.getFullYear());
console.log(t.getTime());
console.log(t.getDay());
console.log(t.getHours());
console.log(t.getMonth());
console.log(t.toString());
console.log(t.Date());
console.log(t.getMinutes());

/*Page 1 of 1

 
getLabelMinor(date) {
  if (date == undefined) {
    date = this.current;
  }
  if (date instanceof Date) {
    date = this.moment(date)
  }

  if (typeof(this.format.minorLabels) === "function") {
    return this.format.minorLabels(date, this.scale, this.step);
  }

  const format = this.format.minorLabels[this.scale];
  // noinspection FallThroughInSwitchStatementJS
  switch (this.scale) {
    case 'week':
      // Don't draw the minor label if this date is the first day of a month AND if it's NOT the start of the week.
      // The 'date' variable may actually be the 'next' step when called from TimeAxis' _repaintLabels.
      if(date.date() === 1 && date.weekday() !== 0){
          return "";
      }
    default: // eslint-disable-line no-fallthrough
      return (format && format.length > 0) ? this.moment(date).format(format) : '';
  }
}
 visjs/vis-timeline/TimeStep.js
 
function getMonthView(events, viewDate, cellModifier, excluded) {

  // hack required to work with the calendar-utils api
  events.forEach(function(event) {
    var eventPeriod = getRecurringEventPeriod({
      start: moment(event.startsAt),
      end: moment(event.endsAt || event.startsAt)
    }, event.recursOn, moment(viewDate).startOf('month'));
    updateEventForCalendarUtils(event, eventPeriod);
  });

  var view = calendarUtils.getMonthView({
    events: events,
    viewDate: viewDate,
    excluded: excluded,
    weekStartsOn: moment().startOf('week').day()
  });

  view.days = view.days.map(function(day) {
    day.date = moment(day.date);
    day.label = day.date.date();
    day.badgeTotal = getBadgeTotal(day.events);
    if (!calendarConfig.displayAllMonthEvents && !day.inMonth) {
      day.events = [];
    }
    cellModifier({calendarCell: day});
    return day;
  });

  // remove hack
  events.forEach(function(event) {
    delete event.start;
    delete event.end;
  });

  return view;

}*/