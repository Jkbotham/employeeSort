import React from "react";
import { Container, Row, Col } from "../Grid";
import Employees from "../../data/employees.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'

export function EmployeeListItem(props) {
    const sortResults = Employees.filter(employee => employee.employee_name.toLowerCase().includes(props.search.toLowerCase()));
    let sortIcon = props.sortDirection === "up" ? faSortUp : faSortDown


    if (props.sortType === "Name"){
        sortResults.sort((a,b) =>{
        
            const nameA=a.employee_name.toLowerCase();
            const nameB=b.employee_name.toLowerCase();

            if(props.sortDirection === "up"){
                if(nameA > nameB) {
                    return 1
                } 
                if(nameA < nameB) {
                    return -1
                }
            } else  {
                if(nameB > nameA) {
                    return 1
                } 
                if(nameB < nameA) {
                    return -1
                }
                return 0
            }
            return 1
        })
    } else if (props.sortType === "Age"){
        sortResults.sort((a,b) => {
        const x = props.sortDirection === "up" ? a.employee_age - b.employee_age : b.employee_age - a.employee_age
        return x
        })
    }else{
        sortResults.sort((a,b) => {
            const y = props.sortDirection === "up" ? a.id - b.id : b.id - a.id
            return y
        })
    }

    console.log(sortIcon)
    return (
        <div>
            {sortResults.length > 0 ? (
                <ul>

                    <li className="list-group-item">
                        <Container>
                            <Row>
                                <Col size="md-2">
                                    <button id="ID" onClick={props.onSortChange}>
                                    <strong>ID</strong> 
                                    </button>
                                    {props.sortType === "ID" ? <FontAwesomeIcon icon={sortIcon} /> : ""}
                                </Col>
                                <Col size="md-4">
                                    <button id="Name" onClick={props.onSortChange}>
                                        <strong>Name</strong>
                                    </button>
                                    {props.sortType === "Name" ? <FontAwesomeIcon icon={sortIcon} /> : ""}
                                </Col>
                                <Col size="md-4">
                                    <button id="Age" onClick={props.onSortChange}>
                                        <strong>Age</strong> 
                                    </button>
                                    {props.sortType === "Age" ? <FontAwesomeIcon icon={sortIcon} /> : ""}
                                </Col>
                            </Row>
                        </Container>
                    </li>
                    <br />

                    {sortResults.map(results =>
                        <li className="list-group-item" key={results.id} >
                            <Container>
                                <Row>
                                    <Col size="md-2">
                                        <p>{results.id}</p>
                                    </Col>
                                    <Col size="md-4">
                                        <p>{results.employee_name}</p>
                                    </Col>
                                    <Col size="md-4">
                                        <p>{results.employee_age}</p>
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