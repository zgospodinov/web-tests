var events1 = [{
        'Date': new Date(2018, 10, 11),
        'Title': 'Doctor appointment at 3:25pm.'
    },
    {
        'Date': new Date(2018, 10, 29),
        'Title': 'Doctor appointment at 3:25pm.'
    },
    {
        'Date': new Date(2018, 10, 28),
        'Title': 'Doctor appointment at 3:25pm.'
    }

];
var settings1 = {
    Color: '#999', //(string - color) font color of whole calendar.
    LinkColor: '#333', //(string - color) font color of event titles.
    NavShow: false, //(bool) show navigation arrows.
    NavVertical: false, //(bool) show previous and coming months.
    NavLocation: '#foo', //(string - element) where to display navigation, if not in default position.
    DateTimeShow: true, //(bool) show current date.
    DateTimeFormat: 'mmm, yyyy', //(string - dateformat) format previously mentioned date is shown in.
    DatetimeLocation: '', //(string - element) where to display previously mentioned date, if not in default position.
    EventClick: test, //(function) a function that should instantiate on the click of any event. parameters passed in via data link attribute.
    EventTargetWholeDay: true, //(bool) clicking on the whole date will trigger event action, as opposed to just clicking on the title.
    DisabledDays: [], //(array of numbers) days of the week to be slightly transparent. ie: [1,6] to fade Sunday and Saturday.


};
var settings2 = {
    Color: '#999', //(string - color) font color of whole calendar.
    LinkColor: '#333', //(string - color) font color of event titles.
    NavShow: true, //(bool) show navigation arrows.
    NavVertical: false, //(bool) show previous and coming months.
    NavLocation: '#foo', //(string - element) where to display navigation, if not in default position.
    DateTimeShow: true, //(bool) show current date.
    DateTimeFormat: 'mmm, yyyy', //(string - dateformat) format previously mentioned date is shown in.
    DatetimeLocation: '', //(string - element) where to display previously mentioned date, if not in default position.
    EventClick: test, //(function) a function that should instantiate on the click of any event. parameters passed in via data link attribute.
    EventTargetWholeDay: true, //(bool) clicking on the whole date will trigger event action, as opposed to just clicking on the title.
    DisabledDays: [], //(array of numbers) days of the week to be slightly transparent. ie: [1,6] to fade Sunday and Saturday.


};

function test() {
    alert('test');
};
var calendarPrevious = document.getElementById('caleandar-previous');
// calendarPrevious.ondblclick = function () {
//     alert("test");
// }
var calendarCurrent = document.getElementById('caleandar-current');
var calendarNext = document.getElementById('caleandar-next');

caleandar(calendarPrevious, [{
    'Date': new Date(2018, 9, 4),
    'Title': 'Doctor appointment at 3:25pm.'
}], settings1, new Date(2018, 9, 11));
caleandar(calendarCurrent, events1, settings2);
caleandar(calendarNext, [], settings1, new Date(2018, 11, 11));


$('#addHolidayTest').click(function () {
    // console.log("adding");
    console.log(events1);
    events1.push({
        'Date': new Date(2018, 10, 7),
        'Title': 'Doctor appointment at 3:25pm.'
    });

    $('#caleandar-current').empty();
    caleandar(calendarCurrent, events1, settings2);


});

function saveMessage() {
    console.log("saving");
};