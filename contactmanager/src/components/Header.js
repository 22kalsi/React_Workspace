import React from "react";
import "./App.css";
import { useState } from "react";
import Addcontact from "./Addcontact";
import ContactList from "./Contctlist";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Add");
  const contacts = [

    {
      id  : "1",
      name : "Gursewak Singh",
      contact : "8284988913",
      gender : "male",
    },
        {
      id  : "2",
      name : "Amandeep Kaur",
      contact : "97714141313",
      gender : "female",
    }

  ]
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
        {/* <ContactList/> */}
        </div>
      )}

      {activeTab === "edit" && (
        <div className="tabcontent">
          Edit contact
        </div>
      )}
    </div>
  );
};
export default Header;
