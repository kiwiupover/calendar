// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var calendar = (function(argument) {
  'use-strict';

  var calContainer = $('.calendar-wrapper');
  var calTable = calContainer.find('table');
  var calHeader = calTable.find('th').outerHeight();
  var calTableOffset = calTable.offset();
  var calTimeSlots = 48;
  var calTimeSlotsHeight = calTable.outerHeight() - calHeader;
  var pxPerSlot = calTimeSlotsHeight / calTimeSlots;
  var dayWidth = calTable.find('th.day-header:first').width();
  var borders = 2;

  var weekDays = {
    Sunday: calTable.find('th:nth-child(2)').offset().left -  calTableOffset.left + borders,
    Monday: calTable.find('th:nth-child(3)').offset().left -  calTableOffset.left + borders,
    Tuesday: calTable.find('th:nth-child(4)').offset().left -  calTableOffset.left + borders,
    Wednesday: calTable.find('th:nth-child(5)').offset().left -  calTableOffset.left + borders,
    Thursday: calTable.find('th:nth-child(6)').offset().left -  calTableOffset.left + borders,
    Friday: calTable.find('th:nth-child(7)').offset().left -  calTableOffset.left + borders,
    Saturday: calTable.find('th:nth-child(8)').offset().left -  calTableOffset.left + borders,
  };

  var makeEvent = function(event){
    var start_time = new Date("01/01/2014 " + event.start_time).getTime();
    var end_time = new Date("01/01/2014 " + event.end_time).getTime();
    var beginningTime = new Date("01/01/2014 " + "00:00").getTime();
    var startSlot = (start_time - beginningTime) / 1000 / 60 / 60;
    var timeLength = (end_time - start_time) / 1000 / 60 / 60;

    var width = dayWidth;
    var height = pxPerSlot * (timeLength * 2);
    var top = pxPerSlot * (startSlot * 2) + calHeader;

    return $('<div>')
      .addClass('event')
      .css({width: width, height: height, top: top, left: weekDays[event.day]})
      .text(event.name);
  };

  return {
    init: function(events){
      events.forEach(function(event){
        $(calContainer).append(makeEvent(event));
      });
    }
  };

})();

calendar.init(calendarEvents);

