import React, { Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      employee: {},
    };
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }

  cancel() {
    this.props.navigate("/employees");
  }

  render() {
    return (
      <div>
        <br />
        <h2 className="text-center" style={{ marginBottom: "20px" }}>
          View Employee Details
        </h2>
        <div className="card col-md-6 offset-md-3">
          <div className="card-body">
            <div className="row">
              <label class="card-text">
                <b>Employee First Name : </b>
                {this.state.employee.firstName}
              </label>
            </div>
            <div className="row">
              <label class="card-text">
                <b>Employee Last Name : </b> {this.state.employee.lastName}
              </label>
            </div>
            <div className="row">
              <label class="card-text">
                <b>Employee Email Address : </b>
                {this.state.employee.emailId}
              </label>
            </div>
          </div>
          <a onClick={this.cancel.bind(this)} class="btn btn-danger">
            Cancel
          </a>
        </div>
      </div>
    );
  }
}

// export default ViewEmployeeComponent;
export default function ViewEmployeeComponentWrapper() {
  const navigate = useNavigate();
  const { id } = useParams();
  return <ViewEmployeeComponent navigate={navigate} id={id} />;
}
