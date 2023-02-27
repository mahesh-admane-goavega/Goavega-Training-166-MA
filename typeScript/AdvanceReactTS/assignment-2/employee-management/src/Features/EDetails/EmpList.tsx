import React, { useEffect } from "react";
import { EmployeeManager } from "../../Managers/EmployeeManager";
import { useSnapshot } from "valtio";
import { employeeStore } from "../../Store";

import { EmpDetail } from "./EmpDetail";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { NewEmpAdd } from "./NewEmpAdd";
import Modal from "react-modal";
import { Loading } from "./Loading";

const EmpList = () => {
  const { employees } = useSnapshot(employeeStore);
  const [isLoad, setIsLoad] = React.useState(false);
  // for adding new employee this function

  const loadEmployee = async () => {
    setIsLoad(true);
    await EmployeeManager.getAll();
    setIsLoad(false);
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  return (
    <>
      <h1>EmployeeList</h1>
      <Loading isOpen={isLoad} />
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
