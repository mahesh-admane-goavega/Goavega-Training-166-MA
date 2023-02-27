import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { employee } from "../../Model/EmployeeApiResponse";
import { NewEmpAdd } from "./NewEmpAdd";
import { useNavigate } from "react-router-dom";
import { EmployeeServices } from "../../Services/EmployeeServices";
import { EmployeeManager } from "../../Managers/EmployeeManager";
// import ReactModal from "react-modal";
// import Modal from "react-modal";

interface Props {
  employee: employee;
}

export const EmpDetail = ({ employee }: Props) => {
  // const [isLoad, setIsLoad] = useState(false);

  //Select employee using id
  const selectEmp = () => {
    EmployeeManager.deleteById(employee.id);
  };

  const updateEmp = () => {
    // setIsLoad(true);
    console.log("Updated");
    EmployeeServices.updateEmployee();
    // var paragraph: any = document.getElementById("editable");
    // var input: any = document.createElement("input");
    // input.value = paragraph?.textContent;
    // paragraph.parentNode.replaceChild(input, paragraph);
    // console.log("para", paragraph);
    // setIsLoad(false);
  };

  return (
    <div className="container">
      {/* <Modal isOpen={isLoad} onRequestClose={() => {}}>
        <h2>Loading...</h2>
      </Modal> */}
      <div className="card mt-3">
        {/* <h3>Email: {employee.id}</h3> */}
        <p id="editable" className="editable">
          Name: {employee.attributes.Full_Name}
        </p>
        <p className="editable">Email: {employee.attributes.Email}</p>
        <p className="editable">Role: {employee.attributes.Role}</p>
        <div className="container">
          <button onClick={selectEmp} className="btn btn-danger m-3">
            Delete
          </button>
          <button onClick={updateEmp} className="btn btn-secondary m-3">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
