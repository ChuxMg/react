import React from "react";
import Card from "./Card.jsx";
import Contacts from "../contacts";
import Avatar from "./Avatar.jsx";

function createCard(contact) {
  return <Card 
    key={contact.id}
    name={contact.name} 
    img={contact.imgURL}
    phoneNum={contact.phone}
    email={contact.email}
  />;
}


function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Avatar 
        img="https://media-exp1.licdn.com/dms/image/C5603AQH_N07MEYwFew/profile-displayphoto-shrink_200_200/0/1527247994452?e=2147483647&v=beta&t=C4dgIJAxBjQiu2kkt61Ine_-M50gpN5jO7p5aysZ_O4"
      />

      {Contacts.map(createCard)}
    
      {/* <Card 
        name={Contacts[0].name}
        img={Contacts[0].imgURL}
        phoneNum={Contacts[0].phone}
        email={Contacts[0].email}
      />
      <Card 
        name={Contacts[1].name}
        img={Contacts[1].imgURL}
        phoneNum={Contacts[1].phone}
        email={Contacts[1].email}
      />
      <Card 
        name={Contacts[2].name}
        img={Contacts[2].imgURL}
        phoneNum={Contacts[2].phone}
        email={Contacts[2].email}
      /> */}

    </div>
  );
}

export default App;
