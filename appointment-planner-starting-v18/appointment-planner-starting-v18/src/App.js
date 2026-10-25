import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { useState } from "react";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  // contact state variables
  // const [newContact, setNewContact] = useState({});
  // const [newAppointment, setNewAppointment] = useState({});
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  //  appointment state variables

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (name, phoneNumber, email) => {
    const newContact = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    };
    setContacts((prev) => [...prev, newContact]);
  };

  const addAppointment = (name, contact, date, time) => {
    const newAppointment = {
      name: name,
      contact: contact,
      date: date,
      time: time,
    };
    setAppointments((prev) => [...prev, newAppointment]);
  };

  // contact callback functions
  /*  const handleAddContact = ({ target }) => {
    const { name, phoneNumber, email } = target;
    setNewContact((prev) => ({
      ...prev,
      [name]: name,
      [phoneNumber]: phoneNumber,
      [email]: email,
    }));
  }; */

  /*   const updateContactArray = (event) => {
    event.preventDefault();
    if (!newContact.title) {
      return;
    }
    setAllContacts((prev) => [...prev, newContact]);
    setNewContact({});
  }; */

  /* const handleAddContact = ({ target }) => {
    const { name, phoneNumber, email } = target;
    setNewContact((prev) => ({
      ...prev,
      [name]: name,
      [phoneNumber]: phoneNumber,
      [email]: email,
    }));
    setContacts((prev) => [...prev, newContact]);
    setNewContact({});
  }; */

  // appointment callback functions
  /*   const handleAddAppointment = ({ target }) => {
    const { name, contact, date, time } = target;
    setNewAppointment((prev) => ({
      ...prev,
      [name]: name,
      [contact]: contact,
      [date]: date,
      [time]: time,
    }));
  }; */

  /*   const updateAppointmentArray = (event) => {
    event.preventDefault();
    if (!newAppointment.title) {
      return;
    }
    setAllAppointments((prev) => [...prev, newAppointment]);
    setNewAppointment({});
  };
 */
  /* const handleAddAppointment = (target) => {
    const { name, contact, date, time } = target;
    setNewAppointment((prev) => ({
      ...prev,
      [name]: name,
      [contact]: contact,
      [date]: date,
      [time]: time,
    }));
    setAllAppointments((prev) => [...prev, newAppointment]);
    setNewAppointment({});
  }; */

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              contacts={contacts}
              addContact={addContact}
            /> /* Add props to ContactsPage */
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              addAppointment={addAppointment}
            /> /* Add props to AppointmentsPage */
          }
        />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}

export default App;
