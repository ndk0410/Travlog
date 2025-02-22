import React, {useState} from 'react'
import "./booking.css"
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap'

import { useNavigate } from 'react-router-dom'

const Booking = ({tour, avgRating}) => {

    const {price, reviews} = tour

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'phatdat1495@gmail.com',
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    })

    const handleChange = e => {
        setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
    }

    const serviceFee = 10000
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)

    //gui data len sever
    const handleClick = e => {
        e.preventDefault();
        navigate("/thank-you")
    }

  return (
    <div className="booking">
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>{price}đ <span>/ người</span></h3>
            <span className="tour__rating d-flex align-items-center ">
                <i class="ri-star-fill" > </i>  
                {avgRating === 0 ? null : avgRating} ({reviews?.length})                
            </span>
        </div>

        <div className="booking__form">
            <h5>Thông tin</h5>
            <Form className="booking__info-form" onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" placeholder="Họ và tên" id="fullName" required onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <input type="number" placeholder="Số điện thoại" id="phone" required onChange={handleChange}/>
                </FormGroup>
                <FormGroup className="d-flex align-items-center gap-3">
                    <input type="date" placeholder="" id="bookAt" required onChange={handleChange}/>
                    <input type="number" placeholder="Số khách" id="guestSize" required onChange={handleChange}/>
                </FormGroup>
            </Form>
        </div>

        <div className="booking__bottom">
            <ListGroup>
                <ListGroupItem className="border-0 px-0">
                    <h5 className="d-flex align-items-center gap-1">
                        {price}đ <i class="ri-close-line"></i> 1 người
                    </h5>
                    <span>{price}đ</span>
                </ListGroupItem>
                <ListGroupItem className="border-0 px-0">
                    <h5>Phí dịch vụ</h5>
                    <span>{serviceFee}đ</span>
                </ListGroupItem>
                <ListGroupItem className="border-0 px-0 total">
                    <h5>Tổng</h5>
                    <span>{totalAmount}đ</span>
                </ListGroupItem>
            </ListGroup>

            <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
                Đặt ngay
            </Button>
        </div>
    </div>
  )
}

export default Booking