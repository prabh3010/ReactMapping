import React from "react";
import contact from "../contacts";
import Card from "./Card";

function createCard(contact) {
  return (
    <Card
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contact.map(createCard)}
    </div>
  );
}

export default App;
