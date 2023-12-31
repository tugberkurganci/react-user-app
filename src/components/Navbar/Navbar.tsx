import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Button, NavDropdown, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Model/RootState";
import { logoutSuccess } from "../../state/redux";



type Props = {  }

const Navbar1 = (props: Props) => {
  
  const navigate = useNavigate();
  const authState=useSelector((store:RootState) => store.auth);
  const dispatch=useDispatch();



  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(logoutSuccess())
    navigate("/");
    
  };

  const toFriendList =()=>  {

    console.log(authState)
	navigate("/friend-list", {
		state: { myData: authState?.friendList },
	  })
  }


  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Navbar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Ana Sayfa
            </Nav.Link>
          </Nav>
          <Nav>
            {authState.id!==0 ? (
              <NavDropdown
                title={
                  <div className="d-flex align-items-center">
                    <span className="ms-2">{authState.firstName}</span>
                    <img
                      src={authState.image}
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                      }}
                      alt="User Avatar"
                      className="dropdown-avatar"
                    />
                  </div>
                }
                id="userDropdown"
              >
                <NavDropdown.Item
                  onClick={()=>toFriendList()}
                >
                arkadaş listesi size: { `${authState.friendList?.length}`} 
                </NavDropdown.Item>
                <NavDropdown.Item onClick={()=>handleLogout()}>
                  Çıkış Yap
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Button variant="outline-success" onClick={handleLogin}>
                Giriş Yap
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar1
