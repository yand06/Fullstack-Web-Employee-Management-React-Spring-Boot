import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
  }

  viewEmployee(id) {
    this.props.navigate(`/view-employee/${id}`);
  }

  editEmployee(id) {
    this.props.navigate(`/add-employee/${id}`);
    // this.props.navigate(`/update-employee/${id}`);
  }

  addEmployee = () => {
    this.props.navigate("/add-employee/_add");
  };

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h2 className="text-center mt-3">Employees List</h2>
          <div className="row">
            <div className="col">
              <button
                type="button"
                class="btn btn-primary mb-3"
                onClick={this.addEmployee}
              >
                Add Employee
              </button>
            </div>
          </div>

          <div className="row">
            <table className="table table-striped table-bordered">
              <thead class="text-center">
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email Id</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.emailId}</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          class="btn btn-info me-2 text-white"
                          onClick={() => this.editEmployee(employee.id)}
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger me-2"
                          onClick={() => this.deleteEmployee(employee.id)}
                        >
                          Delete
                        </button>
                        <button
                          type="button"
                          class="btn btn-secondary me-2"
                          onClick={() => this.viewEmployee(employee.id)}
                        >
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default function ListEmployeeComponentWrapper() {
  const navigate = useNavigate();
  return <ListEmployeeComponent navigate={navigate} />;
}
