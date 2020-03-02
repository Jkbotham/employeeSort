import React, { Component } from "react";
import Navbar from "../Navbar";
import { Container, Row, Col } from "../Grid";
import Input from "../Input";
import { EmployeeListItem } from "../EmployeeList"
import Employees from "../../data/employees.json"


class employeeContainer extends Component {
    state = {
        result: Employees,
        search: "",
        currentSort: "up",
        sortType: "Name"
    };

    onSortChange = (event) => {
        const { currentSort } = this.state;
        const type = event.target.innerText;
        // console.log(event.target.innerText, "20")
        let nextSort;
 
        if (currentSort === 'down') nextSort = 'up';
        else nextSort = 'down'

        this.setState({
            currentSort: nextSort,
            sortType: type
        })
    }

    // sortTypeChange = event => {
    //     console.log(event.target)

    //     this.setState({
    //         sortType: type
    //     })
    // }

    employeeSearch = () => {
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

        this.setState({
            search: value,
        });
    };

    handleFormSubmit = event => {
        event.preventDefualt();
        this.searchEmployee();
    }

    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    {/* {console.log(this.state.currentSort)} */}
                    <Row>
                        <Col size="md-12">
                            <form>
                                <Container>
                                    <Row>
                                        <ul>
                                            <Input
                                                key={this.employee_name}
                                                name="search"
                                                value={this.state.search}
                                                onChange={this.handleInputChange}
                                                placeholder="Search by Name"
                                                search={this.state.search}
                                            />
                                        </ul>

                                    </Row>
                                </Container>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <EmployeeListItem
                                search={this.state.search}
                                onSortChange={this.onSortChange}
                                sortDirection={this.state.currentSort}
                                sortType={this.state.sortType}
                                onSortTypeChange={this.sortTypeChange}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default employeeContainer;