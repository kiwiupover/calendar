module CalendarHelper

  def handle_hour hour
    t = Time.new(2014, 01, 01, hour)
    hour = t.strftime("%l%p").html_safe
  end
end
