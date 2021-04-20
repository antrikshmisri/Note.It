import React, {useContext} from "react"
import { AuthContext } from '../contexts/AuthContext'
import { Container, Row, Col, Button} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { signOut } from '../firebase'
function Header() {
    const {displayName, photoURL} = useContext(AuthContext)
 
    return (
        <div className="heading">
            <Container fluid>
            <Row>
            <Col lg={'10'} xs={'8'}>
                <h1>Keeper</h1>
            </Col>
            <Col lg={'2'} xs={'4'}>
            <Container className='user-info' fluid>
                <Row>
                    <Col lg={'6'} className='center name'>{displayName}</Col>
                    <Col lg={'3'} xs={'6'} className={'profile-pic-div'}><img src={photoURL} className='profile-pic' alt={displayName}/></Col>
                    <Col lg={'3'} xs={'6'}><Button className='add-btn'><FontAwesomeIcon icon='sign-out-alt' onClick={signOut}/></Button></Col>
                </Row>
            </Container>
            </Col>
            </Row>
            </Container>
        </div>
    );
}

export default Header