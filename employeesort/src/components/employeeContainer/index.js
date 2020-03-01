import React, { Component } from "react";
import Navbar from "../Navbar";
import { Container, Row, Col } from "../Grid";
import Input from "../Input";
import { EmployeeList, EmployeeListItem } from "../EmployeeList"
import Employees from "../../data/employees.json"


class employeeContainer extends Component {
    state = {
        result: Employees,
        search: ""
    };

    employeeSearch = () => {
        console.log(this.result)
        const trimSearch = this.state.search.trim();
        const searchResults = Employees.filter((emp) => emp.employee_name === trimSearch)
        this.setState({ 'result': searchResults });
        // console.log(this.state)
    };

    componentDidMount() {
        this.employeeSearch()
    };


    handleInputChange = event => {
        const value = event.target.value;
        // const name = event.target.name;

        this.setState({
            search: value,
        });

        
    };

    handleFormSubmit = event => {
        event.preventDefualt();
        this.searchEmployee();
    }


    // function employeeContainer() {
    //     const [employee, setEmployee] = useState();
    //     const [employeeSearch, setEmployeeSearch] = useState([]);

    //     const HandleInputChange = event => {

    //         const { value } = event.target;
    //         setEmployeeSearch(value);
    //     }

    //     const handleFormSubmit = event => {
    //         event.preventDefault();

    //     }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <Row>
                        <Col size="md-12">
                            <form>
                                <Container>
                                    <Row>
                                        {}
                                        <Col size="md-4">
                                            <Input
                                                name="search"
                                                value={this.state.search}
                                                onChange={this.handleInputChange}
                                                placeholder="Enter Employee Name"
                                                search={this.state.search}
                                            />
                                        </Col>
                                        {/* <Col size="md-4">
                                            <Input
                                                name="employeeSearch"
                                                value={this.employeeSearch}
                                                onChange={this.HandleInputChange}
                                                placeholder="Enter Employee Name"
                                            />
                                        </Col>
                                        <Col size="md-4">
                                            <Input
                                                name="employeeSearch"
                                                value={this.employeeSearch}
                                                onChange={this.HandleInputChange}
                                                placeholder="Enter Employee Name"
                                            />
                                        </Col> */}
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">

                                                    <EmployeeListItem 
                                                    search={this.state.search}
                                                    />

                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default employeeContainer;