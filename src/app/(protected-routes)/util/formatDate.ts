import React from "react";
type formSchemaTodoData = {
  time: string;
  date: string;
  title: string;
  description: string;
};

function formatDate(values: formSchemaTodoData) {
  if (values.time) {
    const [hours, minutes] = values.time.split(":");
    const date = new Date(values.date + "T00:00:00Z");
    date.setUTCHours(parseInt(hours, 10));
    date.setUTCMinutes(parseInt(minutes, 10));
    values.date = date.toISOString();
  } else {
    values.date = new Date(values.date + "T00:00:00Z").toISOString();
  }
  return values.date;
}

export default formatDate;
