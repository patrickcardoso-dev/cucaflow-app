"use client";

import React, { useEffect, useState } from "react";
import {
  addWeeks,
  eachDayOfInterval,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { ptBR } from "date-fns/locale";

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export function WeeklyCalendar() {
  let [selectDay, setSelectDay] = useState(startOfToday());
  let [currentMonth, setCurrentMonth] = useState(format(selectDay, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  let monthFormat = format(firstDayCurrentMonth, "MMMM yyyy", {
    locale: ptBR,
  });

  useEffect(() => {
    setCurrentMonth(format(selectDay, "MMM-yyyy"));
  }, [selectDay]);

  function upperCaseFirsLetter(month: string): string {
    let concatLetters =
      month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
    return concatLetters;
  }
  let monthDisplay = upperCaseFirsLetter(monthFormat);

  let week = eachDayOfInterval({
    start: startOfWeek(selectDay),
    end: endOfWeek(selectDay),
  });

  let daysOfWeek = eachDayOfInterval({
    start: startOfWeek(selectDay),
    end: endOfWeek(selectDay),
  });
  const daysOfWeekDisplay = daysOfWeek.map((days, id) => {
    let daysOfWeekFormat = format(days, "EEEEEE", { locale: ptBR });
    let daysOfWeekFirstLetterUpper =
      daysOfWeekFormat.charAt(0).toUpperCase() +
      daysOfWeekFormat.slice(1).toLowerCase();

    return (
      <time dateTime={format(days, "E..EEE")} key={id}>
        {daysOfWeekFirstLetterUpper}
      </time>
    );
  });

  function previousWeek() {
    setSelectDay((prevDate) => addWeeks(prevDate, -1));
  }

  function nextWeek() {
    setSelectDay((prevDate) => addWeeks(prevDate, 1));
  }

  return (
    <div>
      <div className="flex items-center px-1">
        <h2 className="flex-auto font-semibold text-gray-900">
          {monthDisplay}
        </h2>
        <button
          type="button"
          onClick={previousWeek}
          className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 cursor-pointer"
        >
          <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
          <span>Anter.</span>
        </button>
        <button
          onClick={nextWeek}
          type="button"
          className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500 cursor-pointer"
        >
          <span>Próx.</span>
          <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
      <div className="grid grid-cols-7 text-xs leading-4 py-1 text-gray-500  gap-2 text-center">
        {daysOfWeekDisplay}
      </div>
      <div className="grid grid-cols-7 w-80 text-sm gap-0">
        {week.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(dayIdx === 0 && colStartClasses[getDay(day)])}
          >
            <button
              type="button"
              onClick={() => setSelectDay(day)}
              className={classNames(
                isEqual(day, selectDay) && "text-white",
                !isEqual(day, selectDay) && isToday(day) && "text-red-500",
                !isEqual(day, selectDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  "text-gray-900",
                !isEqual(day, selectDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  "text-gray-400",
                isEqual(day, selectDay) && isToday(day) && "bg-red-500",
                isEqual(day, selectDay) && !isToday(day) && "bg-gray-900",
                !isEqual(day, selectDay) && "hover:bg-gray-200",
                (isEqual(day, selectDay) || isToday(day)) && "font-semibold",
                "mx-auto flex h-6 w-6 items-center justify-center rounded-md"
              )}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
