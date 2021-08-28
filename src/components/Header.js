import React, { useState, useEffect } from "react"

import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useHistory } from "react-router-dom";

import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectImage, setUserLogout } from "../features/userSlice";

const Header = () => {
    const [redirect, setRedirect] = useState(null);
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const history = useHistory();

    useEffect(() => {
        if (!user) {
            setRedirect("/");
        }
    }, [user]);

    if (redirect) {
        history.push(redirect);
    }
    const name = useSelector(selectUser);
    const image = useSelector(selectImage);

    const handleSignOut = () => {
        auth.signOut().then(() => {
            dispatch(setUserLogout());
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="heading">
            <Container fluid>
                <Row>
                    <Col lg={'10'} xs={'8'}>
                        <h1 className="header">NOTE.IT</h1>
                    </Col>
                    <Col lg={'2'} xs={'4'}>
                        <Container className='user-info' fluid>
                            <Row>
                                <Col lg={'6'} className='center name'><p className="m-0 p-0">{name}</p></Col>
                                <Col lg={'3'} xs={'6'} className={'profile-pic-div'}><img src={image} className='profile-pic' alt={name} /></Col>
                                <Col lg={'3'} xs={'6'}><Button className='add-btn'><FontAwesomeIcon icon='sign-out-alt' onClick={handleSignOut} /></Button></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header