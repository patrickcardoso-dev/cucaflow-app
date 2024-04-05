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
      <time
        dateTime={format(days, "E..EEE")}
        className={
          getDay(days) === 0 || getDay(days) === 6
            ? "text-primary-purple300"
            : ""
        }
        key={id}
      >
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
        <h2 className="flex-auto text-gray-900 text-2xl font-medium text-secondary-orange100">
          {monthDisplay}
        </h2>
        <div className="flex items-center justify-between w-36 ">
          <button
            type="button"
            onClick={previousWeek}
            className=" flex items-center text-gray-400 hover:text-gray-500 cursor-pointer"
          >
            <ChevronLeftIcon className="w-6 h-6" aria-hidden="true" />
            <span className="mb-[2px]">anter.</span>
          </button>
          <button
            onClick={nextWeek}
            type="button"
            className=" -mr-1.5 flex  items-center justify-center  text-gray-400 hover:text-gray-500 cursor-pointer"
          >
            <span className="mb-[2px]">próx.</span>
            <ChevronRightIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
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
                isEqual(day, selectDay) && "text-neutras-neutra",
                !isEqual(day, selectDay) &&
                  isToday(day) &&
                  "text-secondary-orange100",
                !isEqual(day, selectDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  "text-neutras-bgBlack",
                !isEqual(day, selectDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  "text-neutras-disable",
                isEqual(day, selectDay) &&
                  isToday(day) &&
                  "bg-secondary-orange100",
                isEqual(day, selectDay) &&
                  !isToday(day) &&
                  "bg-secondary-orange400",
                !isEqual(day, selectDay) && "hover:bg-neutras-disable",
                (isEqual(day, selectDay) || isToday(day)) && "font-semibold",
                getDay(day) === 0 || getDay(day) === 6
                  ? "text-primary-purple100"
                  : "",
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
