import React from 'react'

const StateList = (props) =>
{

    const List = [
        {
            "state" : "Andhra Pradesh",
            "capital" : "Amaravati",
            "dof" : "01111956"
        },
        {
            "state" : "Arunachal Pradesh",
            "capital" : "Itanagar",
            "dof" : "20021987"
        },
        {
            "state" : "Assam",
            "capital" : "Dispur",
            "dof" : "26011950"
        },
        {
            "state" : "Bihar",
            "capital" : "Patna",
            "dof" : "22031912"
        },
        {
            "state" : "Chhattisgarh",
            "capital" : "Raipur",
            "dof" : "01112000"
        },
        {
            "state" : "Goa",
            "capital" : "Panaji",
            "dof" : "30051987"
        },
        {
            "state" : "Gujarat",
            "capital" : "Gandhinagar",
            "dof" : "01051960"
        },
        {
            "state" : "Himachal Pradesh",
            "capital" : "Shimla",
            "dof" : "2501957"
        },
        {
            "state" : "Jharkhand",
            "capital" : "Chandigarh",
            "dof" : "15112000"
        },
        {
            "state" : "Karnataka",
            "capital" : "Bengaluru",
            "dof" : "01111956"
        },
        {
            "state" : "Kerala",
            "capital" : "Thiruvananthapuram",
            "dof" : "01111956"
        },
        {
            "state" : "Madhya Pradesh",
            "capital" : "Bhopal",
            "dof" : "01111956"
        },
        {
            "state" : "Maharashtra",
            "capital" : "Mumbai",
            "dof" : "01051960"
        },
        {
            "state" : "Manipur",
            "capital" : "Imphal",
            "dof" : "21011972"
        },
        {
            "state" : "Meghalaya",
            "capital" : "Shillong",
            "dof" : "21011972"
        },
        {
            "state" : "Mizoram",
            "capital" : "Aizawl",
            "dof" : "20021987"
        },
        {
            "state" : "Nagaland",
            "capital" : "Kohima",
            "dof" : "01121963"
        },
        {
            "state" : "Odisha",
            "capital" : "Bhubaneswar",
            "dof" : "26011936"
        },
        {
            "state" : "Punjab",
            "capital" : "Chandigarh",
            "dof" : "01111966"
        },
        {
            "state" : "Rajasthan",
            "capital" : "Jaipur",
            "dof" : "01111956"
        },
        {
            "state" : "Sikkim",
            "capital" : "Gangtok",
            "dof" : "16051975"
        },
        {
            "state" : "Tamil Nadu",
            "capital" : "Chennai",
            "dof" : "26011950"
        },
        {
            "state" : "Telangana",
            "capital" : "Hyderabad",
            "dof" : "02012014"
        },
        {
            "state" : "Tripura",
            "capital" : "Agartala",
            "dof" : "21011972"
        },
        {
            "state" : "Uttar Pradesh",
            "capital" : "Agartala",
            "dof" : "21011972"
        },
        {
            "state" : "Tripura",
            "capital" : "Lucknow",
            "dof" : "26011950"
        },
        {
            "state" : "Uttarakhand",
            "capital" : "Dehradun",
            "dof" : "09112000"
        },
        {
            "state" : "West Bengal",
            "capital" : "Kolkata",
            "dof" : "01111956"
        }
    ]
const renderList = JSON.stringify(List)
props.list(renderList)
localStorage.setItem("list", renderList )
return(<></>)

}

export default StateList

