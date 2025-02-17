import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

class CreateEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Step 2
      id: props.id,
      firstName: "",
      lastName: "",
      emailId: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.saveOrUpadateEmployee = this.saveOrUpadateEmployee.bind(this);
  }

  // Step 3
  componentDidMount() {
    // Step 4
    if (this.state.id === "_add") {
      return;
    } else {
      console.log("Fetching employee with ID:", this.state.id);
      EmployeeService.getEmployeeById(this.state.id)
        .then((res) => {
          let employee = res.data;
          this.setState({
            firstName: employee.firstName,
            lastName: employee.lastName,
            emailId: employee.emailId,
          });
        })
        .catch((error) => {
          console.error("Error fetching employee data:", error);
        });
    }
  }

  saveOrUpadateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log("employee => " + JSON.stringify(employee));
    //  Step 5
    if (this.state.id === "_add") {
      EmployeeService.createEmployee(employee).then((res) => {
        this.props.navigate("/employees");
      });
    } else {
      EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
        this.props.navigate("/employees");
      });
    }
  };

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  cancel() {
    this.props.navigate("/employees");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center mt-4">Add Employee</h3>;
    } else {
      return <h3 className="text-center mt-4">Update Employee</h3>;
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center vh-10">
            <div className="card col-md-6 offest-md-3 mt-5">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control mb-3"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control mb-3"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Id</label>
                    <input
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control mb-3"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <button
                    type="button"
                    class="btn btn-success"
                    onClick={this.saveOrUpadateEmployee}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default function CreateEmployeeComponentWrapper() {
  const navigate = useNavigate();
  const { id } = useParams();
  return <CreateEmployeeComponent navigate={navigate} id={id} />;
}
