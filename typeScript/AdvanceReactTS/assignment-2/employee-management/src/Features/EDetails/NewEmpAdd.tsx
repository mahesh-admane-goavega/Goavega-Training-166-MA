import React, { useState } from "react";
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
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add New
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add New Employee Here
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"></div>

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
                  required
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
                  required
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
                  required
                />
                <button
                  onClick={(e: React.MouseEvent<HTMLElement>) => formSubmit(e)}
                  className="btn btn-success m-4"
                >
                  Add New Employee
                </button>
                <button data-bs-dismiss="modal" className="btn btn-danger">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
