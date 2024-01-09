import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { InputGroup, Form, Table } from 'react-bootstrap'



function Job() {
    return (
        <div>
            <div> <h4>Job</h4></div>


            <div style={{ backgroundColor: '#edf2ef', margin: '20px', padding: '20px' }}>
                <Row>
                    <Col sm={12} md={6} lg={9}>
                        <p> <span style={{ color: '#bfc9c2' }}> Job Name &nbsp; </span> Test project 1 </p>
                        <p> <span style={{ color: '#bfc9c2' }}> Job Number &nbsp; </span> #ABV3265413 </p>
                        <p> <span style={{ color: '#bfc9c2' }}> Unit &nbsp; </span>  <Button variant="primary" size="sm">
                            Metric
                        </Button>{' '}</p>

                        <p> <span style={{ color: '#bfc9c2' }}> Difficulty level</span>  <DropdownButton id="dropdown-basic-button " size='sm' title="Difficulty level">
                            <Dropdown.Item href="#/action-1">High</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Low</Dropdown.Item>
                        </DropdownButton> </p>
                    </Col>

                    <Col sm={12} md={6} lg={3}>
                        <p><Button variant="primary" size="sm">
                            Job details
                        </Button>{' '}</p>

                        <p><Button variant="primary" size="sm">
                            button 2
                        </Button>{' '} </p>

                        <Button variant="secondary" size="sm">
                            button 3
                        </Button>{' '}
                    </Col>



                </Row>

            </div>
            <div>
                <div className='d-flex ms-auto mt-5 '>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"> <i class="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                        <Form.Control
                            placeholder="Search projects"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </div>
            </div>
            <div>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>  Assembly Name</th>
                            <th>Length</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2x2 Drop-in T-Bar</td>
                            <td>100m</td>
                            <td>-</td>
                            <td><i class="fa-solid fa-trash-can"></i></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>2x2 Drop-in T-Bar</td>
                            <td>-</td>
                            <td>-</td>
                            <td><i class="fa-solid fa-trash-can"></i></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>2x2 Drop-in T-Bar</td>
                            <td>200m</td>
                            <td>-</td>
                            <td><i class="fa-solid fa-trash-can"></i></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>2x2 Drop-in T-Bar</td>
                            <td>-</td>
                            <td>-</td>
                            <td><i class="fa-solid fa-trash-can"></i></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>L2x2 Drop-in T-Bar</td>
                            <td>50m</td>
                            <td>-</td>
                            <td><i class="fa-solid fa-trash-can"></i></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>2x2 Drop-in T-Bar</td>
                            <td>200m</td>
                            <td>-</td>
                            <td><i class="fa-solid fa-trash-can"></i></td>
                        </tr>
                    </tbody>
                </Table>

            </div>





        </div>
    )
}

export default Job