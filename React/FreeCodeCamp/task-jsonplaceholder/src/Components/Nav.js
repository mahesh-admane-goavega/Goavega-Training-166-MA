import React from "react";
import DropdownComp from "./DropdownComp";

export default function Nav(props) {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)" className="dropbtn">
            Users
          </a>
          <div className="dropdown-content">
            {props.allDtat.map((item) => {
              return (
                <DropdownComp
                  onClick={props.click}
                  key={item.id}
                  id={item.id}
                />
              );
            })}
          </div>
        </li>
      </ul>
    </nav>
  );
}

/*

import React from "react";
import DropdownComp from "./DropdownComp";

export default function Nav(props) {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)" className="dropbtn">
            Users
          </a>
          <div className="dropdown-content">
            {props.allDtat.map((item) => {
              return (
                <DropdownComp
                  onClick={props.click}
                  key={item.id}
                  id={item.id}
                />
              );
            })}
          </div>
        </li>
      </ul>
    </nav>
  );
}



*/
