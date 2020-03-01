import React from "react";
import { Container, Row, Col } from "../Grid";
import Employees from "../../data/employees.json"

export function EmployeeList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

export function EmployeeListItem(props) {
    const sortResults = Employees.filter(employee => employee.employee_name.toLowerCase().includes(props.search.toLowerCase()))
    console.log(sortResults)
    return (
        <div>
            {sortResults.length > 0 ? (
                <ul>
                    <br />
                    {sortResults.map(results =>

                        <li className="list-group-item" >
                            {console.log(results)}
                            <Container id={results.key}>
                                <Row>
                                    <Col size="md-4">
                                        <p>Name : {results.employee_name}</p>
                                        <p>Age : {results.employee_age}</p>
                                    </Col>
                                </Row>
                            </Container>
                        </li>
                    )}
                </ul>

            ) : (

                    <h2>No Results</h2>
                )}
        </div>
    )
}