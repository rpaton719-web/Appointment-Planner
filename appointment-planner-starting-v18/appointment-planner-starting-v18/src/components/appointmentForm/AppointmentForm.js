import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          name="date"
          type="date"
          min={getTodayString}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="time">Time:</label>
        <input
          id="time"
          name="time"
          type=""
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <ContactPicker
          contacts={contacts}
          onChange={setContact}
          value={contact}
          name={contact}
        />
        <input type="submit" />
      </form>
    </>
  );
};
