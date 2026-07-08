import React from "react";
import "./App.css";
import { useState } from "react";
import Addcontact from "./Addcontact";
import ContactList from "./Contctlist";
import Edit from "./edit";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Add");
  return (
    <div>
      <div className="tab">
        <button
          className={activeTab === "Add" ? "active" : ""}
          onClick={() => setActiveTab("Add")}
        >
          Addcontacts
        </button>

        <button
          className={activeTab === "view" ? "active" : ""}
          onClick={() => setActiveTab("view")}
        >
          View Contacts
        </button>

        <button
          className={activeTab === "edit" ? "active" : ""}
          onClick={() => setActiveTab("edit")}
        >
          Edit Contact
        </button>
      </div>

      {activeTab === "Add" && (
        <div className="tabcontent">
          <Addcontact></Addcontact>
        </div>
      )}

      {activeTab === "view" && (
        <div className="tabcontent">
          <ContactList />
        </div>
      )}

      {activeTab === "edit" && 
      <div className="tabcontent">
        <Edit/>
        </div>}
    </div>
  );
};
export default Header;
