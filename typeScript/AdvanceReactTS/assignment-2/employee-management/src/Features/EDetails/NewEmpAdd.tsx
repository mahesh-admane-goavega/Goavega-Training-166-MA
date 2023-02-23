import React from "react";
import { useSnapshot } from "valtio";
import { EmployeeManager } from "../../Managers/EmployeeManager";
import { empformState } from "../../Store";

export const NewEmpAdd = () => {
  const { email, name, role } = useSnapshot(empformState);

  const formSubmit = (event: React.MouseEvent<HTMLElement>) => {
    console.log("Submitted");
    event.preventDefault();
    var newData = {
      data: {
        Full_Name: String(name),
        Role: String(role),
        Email: String(email),
      },
    };

    EmployeeManager.addNewEmp(newData);
  };

  return (
    <form>
      <div className="form-group container ">
        <label htmlFor="empfullname">Enter Full Name</label>
        <input
          type={"text"}
          className="form-control"
          id="empfullname"
          placeholder="enter your full name"
          value={name}
          onChange={(e) => {
            empformState.name = e.target.value;
          }}
        />
        <label htmlFor="empemail">Enter Email</label>
        <input
          type={"email"}
          className="form-control"
          id="empemail"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => {
            empformState.email = e.target.value;
          }}
        />
        <label htmlFor="emprole">Enter Role</label>
        <input
          type={"text"}
          className="form-control"
          id="emprole"
          placeholder="enter role"
          value={role}
          onChange={(e) => {
            empformState.role = e.target.value;
          }}
        />
        <button
          onClick={(e: React.MouseEvent<HTMLElement>) => formSubmit(e)}
          className="btn btn-success m-4"
        >
          Add New Employee
        </button>
      </div>
    </form>
  );
};
