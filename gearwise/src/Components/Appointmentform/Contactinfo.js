import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function Contactinfo() {

    const customerId = "665e144096c5017136fb33a0"
    const [customer , setCustomer] = useState([])
    useEffect(()=>{
        //for testing only 665e144096c5017136fb33a0 otherwise remove the id
        axios.get('http://localhost:4005/api/customers/customerspro/'+customerId)
        .then(customer => setCustomer(customer.data))
        .catch(err =>console.log(err))
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-header text-left">
                            <center><p>Appointment</p></center>
                        </div>
                        <Card className="text-center">
                            <div className="row">
                                <h4>Contact Information</h4>
                                <div className="col-md-6">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Text  style={{textAlign:'left'}}>
                                            <Form.Label>Name<span>*</span></Form.Label>
                                                <Form.Control size="lg" type="name" placeholder={customer.name} readOnly />
                                            {/* <Form.Floating>
                                                    <Form.Control
                                                    id="floatingPasswordCustom"
                                                    type="text"
                                                    placeholder={customer.name}
                                                />
                                                <label htmlFor="floatingPasswordCustom">Name <span>*</span> </label>
                                            </Form.Floating> */}
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                                <div className="col-md-6">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Text  style={{textAlign:'left'}}>
                                        <Form.Label>E-mail<span>*</span></Form.Label>
                                                <Form.Control size="lg" type="email" placeholder={customer.email} readOnly />
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Text  style={{textAlign:'left'}}>
                                        <Form.Label>Contact No<span>*</span></Form.Label>
                                                <Form.Control size="lg" type="email" placeholder={customer.phone} readOnly />
                                        </Card.Text>
                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div >
    )
}
