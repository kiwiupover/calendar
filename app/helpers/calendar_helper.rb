module CalendarHelper

  def handle_hour hour, index
    hour = "#{twelve_hour_time hour}" + am_pm(index)
  end

  private
    def twelve_hour_time hour
      transformed_hour = hour == 0 ? hour = 12 : hour

      transformed_hour = transformed_hour > 12 ? transformed_hour - 12 : transformed_hour
    end

    def am_pm index
      index > 11 ? 'pm' : 'am'
    end
end
