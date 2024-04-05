"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { WeeklyCalendar } from "./weekly";
import { MonthCalendar } from "./month";

type CalendarType = "month" | "weekly";

export default function CalendarMonthWeekly() {
  const [calendarType, setCalendarType] = useState<CalendarType>("month");
  const renderCalendar = (): JSX.Element => {
    if (calendarType === "month") {
      return <MonthCalendar />;
    } else if (calendarType === "weekly") {
      return <WeeklyCalendar />;
    } else {
      const _exaustiveCheck: never = calendarType;
      return _exaustiveCheck;
    }
  };
  const handleToggleCalendar = () => {
    setCalendarType((prevType) => (prevType === "month" ? "weekly" : "month"));
  };

  return (
    <div className="bg-neutras-bgWhite w-full">
      <div className=" w-[312px] px-1 flex flex-col items-center justify-center">
        {renderCalendar()}
        <button onClick={handleToggleCalendar}>
          {calendarType === "month" ? (
            <ChevronUp className="w-3 h-3" aria-hidden="true" />
          ) : (
            <ChevronDown className="w-3 h-3" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
