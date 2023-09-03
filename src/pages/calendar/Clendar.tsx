import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./Calendar.scss";

type calendarProps = {
  onSelectDate: (date: Date) => void;
};

const Calendar: React.FC<calendarProps> = ({ onSelectDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  const handlePrevMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
    );
  };

  const renderCalendarDays = () => {
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();

    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDay();

    const daysInPrevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();

    // Calculate the number of days to display from the previous month in the first row
    const daysInPrevMonthToDisplay = firstDayOfMonth;

    // Calculate the number of days to display from the next month in the last row
    const daysInNextMonthToDisplay = 6 - lastDayOfMonth;

    // Calculate the total number of days in the first and last rows combined
    const totalDaysInFirstAndLastRows = daysInPrevMonthToDisplay + daysInNextMonthToDisplay;

    const allDays = Array.from({ length: 42 }, (_, index) => {
      let day;
      let date;
      let isToday = false;
      let isCurrentMonth = false;

      if (index < daysInPrevMonthToDisplay) {
        // Dates from the previous month
        day = daysInPrevMonth - (daysInPrevMonthToDisplay - index) + 1;
        date = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, day);
      } else if (index >= daysInPrevMonthToDisplay && index < daysInPrevMonthToDisplay + daysInMonth) {
        // Dates from the current month
        day = index - daysInPrevMonthToDisplay + 1;
        date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        isToday = date.toDateString() === new Date().toDateString();
        isCurrentMonth = true;
      } else {
        // Dates from the next month
        day = index - (daysInPrevMonthToDisplay + daysInMonth) + 1;
        date = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, day);
      }

      return { day, isToday, date, isCurrentMonth };
    });

    return (
      <div className="dayname-and-month-container">
        {renderDayNames()}
        <div className="day-container">
          {allDays.map(({ day, isToday, date, isCurrentMonth }, index) => (
            <div
              key={index}
              className={`day ${isToday ? "today" : ""} ${
                selectedDate &&
                date.toDateString() === selectedDate.toDateString()
                  ? "selected"
                  : ""
              } ${!isCurrentMonth ? "other-month" : ""}`}
              onClick={() => handleDateClick(date)}
            >
              {day > 0 && day <= daysInMonth + totalDaysInFirstAndLastRows ? day : ""}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderDayNames = () => {
    const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    return (
      <div className="day-names">
        {daysOfWeek.map((day) => (
          <div key={day} className="day-name">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onSelectDate(date);
  };

  return (
    <div className="calendar">
      <div className="year-container">
        <FaAngleLeft className="month-left-arrow" onClick={handlePrevMonth} />
        <div className="years">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </div>
        <FaAngleRight className="month-right-arrow" onClick={handleNextMonth} />
      </div>

      <div className="month-container">
        <div className="days-container">{renderCalendarDays()}</div>
      </div>
    </div>
  );
};

export default Calendar;
