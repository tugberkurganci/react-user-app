import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Button, NavDropdown, Container } from "react-bootstrap";
import UserCard from "../UserCard";

const MyNavbar = ({ onLogout, loggedUser }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }

    if (loggedUser && loggedUser !== user) {
      setUser(loggedUser);
    }
  }, [loggedUser]);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    onLogout();
    setUser(null);
  };

  const toFriendList =()=>  {
	navigate("/friend-list", {
		state: { myData: user.friendList },
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
            {user ? (
              <NavDropdown
                title={
                  <div className="d-flex align-items-center">
                    <span className="ms-2">{user.firstName}</span>
                    <img
                      src={user.image}
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
                  onClick={toFriendList}
                >
                arkadaş listesi size: { `${user.friendList?.length}`} 
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
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
  );
};

export default MyNavbar;
