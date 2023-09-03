import React, { useState, useEffect } from "react";
import "./Calendar.scss";

type CalendarProps = {
  onSelectDate: (date: Date) => void;
};

type Day = {
  day: number;
  isToday: boolean;
  isCurrentMonth: boolean;
  isPastMonth: boolean;
  isNextMonth: boolean;
  date: Date;
};

const Calendar: React.FC<CalendarProps> = ({ onSelectDate }) => {
  // Current date in the calendar
  const [currentDate, setCurrentDate] = useState(new Date());

  // Selected date in the calendar (null by default)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Function to set the current date as the selected date on mount
  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  // Handle previous month
  const handlePrevMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
    );
  };

  // Handle next month
  const handleNextMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
    );
  };

  // Get an array of Day objects representing the days of the current month
  const getDaysInMonth = (date: Date): Day[] => {
    const firstDayOfMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      1,
      0
    ).getDay();
    const daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const allDays: Day[] = [];
    let currentDay = 1;
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();

    // Calculate the first day of the week for the current month
    const firstDayOfWeek = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    for (let i = 0; i < 42; i++) {
      const day: Day = {
        day: currentDay,
        isToday:
          currentYear === new Date().getFullYear() &&
          currentMonth === new Date().getMonth() &&
          currentDay === new Date().getDate(),
        isCurrentMonth: currentMonth === date.getMonth(),
        isPastMonth: i < firstDayOfWeek,
        isNextMonth: i >= firstDayOfWeek + daysInMonth,
        date: new Date(currentYear, currentMonth, currentDay),
      };
      allDays.push(day);

      if (currentDay === daysInMonth) {
        currentDay = 1;
        currentMonth = (currentMonth + 1) % 12;
        if (currentMonth === 0) {
          currentYear++;
        }
      } else {
        currentDay++;
      }
    }

    return allDays;
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onSelectDate(date);
  };

  return (
    <div className="calendar">
      <div className="year-container">
        <div className="month-left-arrow" onClick={handlePrevMonth}>
          &lt;
        </div>

        <div className="years">
          {currentDate.toLocaleString("en-US", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </div>

        <div className="month-right-arrow" onClick={handleNextMonth}>
          &gt;
        </div>
      </div>

      <div className="dayname-and-month-container">
        <div className="day-names">
          <div className="day-name">Su</div>
          <div className="day-name">Mo</div>
          <div className="day-name">Tu</div>
          <div className="day-name">We</div>
          <div className="day-name">Th</div>
          <div className="day-name">Fr</div>
          <div className="day-name">Sa</div>
        </div>
        <div className="day-container">
          {getDaysInMonth(currentDate).map((day, index) => (
            <div
              key={index}
              className={`day ${
                day.isPastMonth || day.isNextMonth ? "other-month" : ""
              } ${day.isToday ? "today" : ""} ${
                selectedDate &&
                day.date.toDateString() === selectedDate.toDateString()
                  ? "selected"
                  : ""
              } ${day.isCurrentMonth ? "current-month" : ""}`}
              onClick={() => handleDateClick(day.date)}
            >
              {day.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
