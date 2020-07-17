import React, { Component } from "react";
import PropTypes from "prop-types";

class ListContact extends Component {
  static propType = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim(),
    });
  };

  render() {
    const { query } = this.state;
    const { contacts, deleteContact } = this.props;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query)
    );

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            type="text"
            placeholder="Enter Contact Name"
            className="search-contacts"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>

        {query.length > 0 && (
          <div className="showing-contacts">
            <span>{`Now showing ${filteredContacts.length} out of ${
              contacts.length
            }`}</span>
            <button onClick={() => this.updateQuery("")}>Show All</button>
          </div>
        )}

        <ul className="contact-list">
          {filteredContacts.map((contact) => (
            <li className="contact-list-item" key={contact.id}>
              <div
                className="contact-avatar"
                style={{
                  backgroundImage: `url(${contact.avatarURL})`,
                }}
              />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <button
                onClick={() => deleteContact(contact.id)}
                className="contact-remove"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListContact;
