import React, { useEffect } from "react";
import { EmployeeManager } from "../../Managers/EmployeeManager";
import { useSnapshot } from "valtio";
import { employeeStore } from "../../Store";

import { EmpDetail } from "./EmpDetail";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { NewEmpAdd } from "./NewEmpAdd";

const EmpList = () => {
  const { employees } = useSnapshot(employeeStore);

  const navigate = useNavigate();
  // for adding new employee this function
  const addNew = () => {
    navigate("/addemployee");
  };

  const loadEmployee = async () => {
    await EmployeeManager.getAll();
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  return (
    <>
      <h1>EmployeeList</h1>
      <Link to="/addemployee">
        <button onClick={addNew} type="button" className="btn btn-primary m-3 ">
          Add New
        </button>

        <Routes>
          <Route path="/addemployee" element={<NewEmpAdd />} />
        </Routes>
      </Link>
      {employees.map((i) => (
        <EmpDetail employee={i} />
      ))}
    </>
  );
};

export default EmpList;
