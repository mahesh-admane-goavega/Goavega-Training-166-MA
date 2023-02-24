import React, { useEffect } from "react";
import { EmployeeManager } from "../../Managers/EmployeeManager";
import { useSnapshot } from "valtio";
import { employeeStore } from "../../Store";

import { EmpDetail } from "./EmpDetail";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { NewEmpAdd } from "./NewEmpAdd";
import Modal from "react-modal";

const EmpList = () => {
  const { employees } = useSnapshot(employeeStore);

  // for adding new employee this function

  const loadEmployee = async () => {
    await EmployeeManager.getAll();
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  return (
    <>
      <h1>EmployeeList</h1>
      <div className="container p-4">
        <NewEmpAdd />
      </div>

      {employees.map((i) => (
        <EmpDetail employee={i} />
      ))}
    </>
  );
};

export default EmpList;
