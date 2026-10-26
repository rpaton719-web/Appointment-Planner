import React from "react";

export const ContactForm = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            required
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="phoneNumber">
          Phone Number:
          <input
            required
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            required
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit"></input>
      </form>
    </>
  );
};
