import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

import { Button, Nav, Form, Input, Title } from "./style";

const Navbar = () => {
  const [nameInput, setNameInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameInput) return;
    navigate(`/search?q=${nameInput}`);
    setNameInput("");
  };

  return (
    <Nav>
      <Title>
        <Link to="/">
          <BiCameraMovie />
          infoflix
        </Link>
      </Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Pesquisar por filmes..."
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <Button type="submit">
          <BiSearchAlt2 />
        </Button>
      </Form>
    </Nav>
  );
};

export default Navbar;
