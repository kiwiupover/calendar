class CalendarsController < ActionController::Base
  layout 'application'

  def index
    @events = [
      { name: 'Start', day: 'Sunday', start_time: '00:00', end_time: '10:00' },
      { name: 'Yoga', day: 'Sunday', start_time: '11:00', end_time: '13:00' },
      { name: 'Dancing', day: 'Sunday', start_time: '22:00', end_time: '23:30' },
      { name: 'Running', day: 'Monday', start_time: '11:00', end_time: '12:30' },
      { name: 'Swimming', day: 'Tuesday', start_time: '11:30', end_time: '12:30' },
      { name: 'Running', day: 'Wednesday', start_time: '08:30', end_time: '12:00' },
      { name: 'Running', day: 'Thursday', start_time: '06:00', end_time: '7:30' },
      { name: 'Swimming', day: 'Thursday', start_time: '09:00', end_time: '10:30' },
      { name: 'Running', day: 'Friday', start_time: '11:00', end_time: '12:30' },
      { name: 'Running', day: 'Saturday', start_time: '11:00', end_time: '12:30' },
      { name: 'Dancing', day: 'Tuesday', start_time: '22:00', end_time: '23:30' },
      { name: 'Dancing', day: 'Friday', start_time: '22:00', end_time: '23:30' },
      { name: 'Dancing', day: 'Saturday', start_time: '22:00', end_time: '23:30' },
    ]
  end
end
