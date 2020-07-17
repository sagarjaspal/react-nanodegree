import React, { Component } from "react";

import ListContact from "./ListContact";

class App extends Component {
  state = {
    contacts: [
      {
        id: "karen",
        name: "Karen Isgrigg",
        handle: "karen_isgrigg",
        avatarURL: "http://localhost:5001/karen.jpg",
      },
      {
        id: "richard",
        name: "Richard Kalehoff",
        handle: "richardkalehoff",
        avatarURL: "http://localhost:5001/richard.jpg",
      },
      {
        id: "tyler",
        name: "Tyler McGinnis",
        handle: "tylermcginnis",
        avatarURL: "http://localhost:5001/tyler.jpg",
      },
    ],
  };

  deleteContact = (id) => {
    const filteredContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({ contacts: filteredContacts });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <ListContact contacts={contacts} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;
