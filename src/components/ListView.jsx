import React,{  } from "react";
import ListRow from "./ListRow";
const ListView = () => {
    const cars = [
    {id: 0, name: "HDFC Bank Job", location: "Mumbai", icon:"images/hdfc_logo.png "},
    {id: 1, name: "YES Bank Job", location: "Sehore", icon:" images/yeslogo.png "},
    {id: 2, name: "SBI Bank Job", location: "Bhopal", icon:" images/sbilogo.jpg"},
    {id: 3, name: "BANK OF BARODA Bank Job", location: "Icchwara", icon:" images/bob_logo.png"},
    {id: 4, name: "IDFC Bank Job", location: "Bareli", icon:" images/idfc_logo.png"}
    ];
    console.log(cars.length)
    return(
        <div>
            <ul>
        {cars.map((car) => <ListRow brand={car} />)}
      </ul>
        </div>
    )
}

export default ListView;
