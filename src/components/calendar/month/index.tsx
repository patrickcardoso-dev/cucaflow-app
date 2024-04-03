"use client";
import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import React, { useEffect } from "react";
import { Fragment, useState } from "react";

const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2024-03-21T19:37",
    endDatetime: "2024-03-21T20:30",
  },
  {
    id: 2,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2024-03-21T09:00",
    endDatetime: "2024-03-21T11:30",
  },
  {
    id: 3,
    name: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2024-04-01T17:00",
    endDatetime: "2024-04-01T18:30",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2024-03-23T13:00",
    endDatetime: "2024-03-23T14:30",
  },
  {
    id: 5,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-13T14:00",
    endDatetime: "2022-05-13T14:30",
  },
];

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export function MonthCalendar() {
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

  let daysOfMonth = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
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

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  let selectDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectDay)
  );

  return (
    <div>
      <div className="flex items-center px-1">
        <h2 className="flex-auto text-gray-900 text-2xl font-medium text-secondary-orange100">
          {monthDisplay}
        </h2>
        <div className="flex items-center justify-between w-36 ">
          <button
            type="button"
            onClick={previousMonth}
            className=" flex items-center text-gray-400 hover:text-gray-500 cursor-pointer"
          >
            <ChevronLeftIcon className="w-6 h-6" aria-hidden="true" />
            <span className="mb-[2px]">anter.</span>
          </button>
          <button
            onClick={nextMonth}
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
      <div className="grid grid-cols-7 text-sm  w-80 h-[220px] gap-0">
        {daysOfMonth.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(dayIdx === 0 && colStartClasses[getDay(day)])}
          >
            <button
              type="button"
              onClick={() => setSelectDay(day)}
              className={classNames(
                isEqual(day, selectDay) && "text-neutras-neutra ",
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

            <div className="w-1 h-1 mx-auto mt-1">
              {meetings.some((meeting) =>
                isSameDay(parseISO(meeting.startDatetime), day)
              ) && <div className="w-1 h-1 rounded-full bg-sky-500"></div>}
            </div>
          </div>
        ))}
      </div>
      {/* <section className="mt-12 md:mt-0 md:pl-14">
        <h2 className="font-semibold text-gray-900">
          Schedule for{" "}
          <time dateTime={format(selectDay, "yyyy-MM-dd")}>
            {format(selectDay, "MMM dd, yyy")}
          </time>
        </h2>
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
          {selectDayMeetings.length > 0 ? (
            selectDayMeetings.map((meeting) => (
              <Meeting meeting={meeting} key={meeting.id} />
            ))
          ) : (
            <p>No meetings for today.</p>
          )}
        </ol>
      </section> */}
    </div>
  );
}

function Meeting({ meeting }: { meeting: Meeting }) {
  let startDateTime = parseISO(meeting.startDatetime);
  let endDateTime = parseISO(meeting.endDatetime);

  return (
    <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
      <img
        src={meeting.imageUrl}
        alt=""
        className="flex-none w-10 h-10 rounded-full"
      />
      <div className="flex-auto">
        <p className="text-gray-900">{meeting.name}</p>
        <p className="mt-0.5">
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, "h:mm a")}
          </time>{" "}
          -{" "}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, "h:mm a")}
          </time>
        </p>
      </div>
      <Menu
        as="div"
        className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
      >
        <div>
          <Menu.Button>
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Cancel
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  );
}
interface Meeting {
  id: number;
  name: string;
  imageUrl: string;
  startDatetime: string;
  endDatetime: string;
}
