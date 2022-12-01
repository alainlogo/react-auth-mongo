import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import Loading from "../../components/Header/Loading";
import ErrorMessage from "../../components/Header/ErrorMessage";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { register } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const RegisterPage = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState(
    "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
  );
  const [message, setMessage] = useState(false);
  const [picMessage, setPicMessage] = useState(false);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  // const postDetails = (pics) => {
  //   if (!pics) {
  //     // pics ===
  //     // "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
  //     return setPicMessage("Selectionnez une image");
  //   }
  //   setPicMessage(null);

  //   if (pics.type === "type" || pics.type === "image/png") {
  //     const data = new FormData();
  //     data.append("file", pics);
  //     data.append("upload_preset", "jvt2.0");
  //     data.append("cloud_name", "talentissim");
  //     fetch("https://res.cloudinary.com/talentissim/image/upload", {
  //       method: "post",
  //       body: data,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setPic(data.url.toString());
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     return setPicMessage("Selectionnez une image");
  //   }
  // };

  useEffect(() => {
    if (userInfo) {
      history.push("/myposts");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("les mpd ne correspondent pas");
    } else {
      dispatch(register(name, email, password, pic));
    }
  };

  return (
    <MainScreen title="Créer un compte">
      <div className="logiinContainer">
        {loading && <Loading />}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="name"
              placeholder="Entrez votre Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirmez le mot de pass</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          {/* <Form.Group controlId="formFileSm" className="mb-3">
          <Form.Label>Sélectionner une image</Form.Label>
          <Form.Control
            id="custom-file"
            placeholder="Image"
            type="image/png"
            label="Télecharger une image"
            size="sm"
          />
        </Form.Group> */}
          {/* {picMessage && (
            <ErrorMessage variant="danger">{picMessage} </ErrorMessage>
          )}
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Small file input example</Form.Label>
            <Form.Control
              onChange={(e) => postDetails(e.target.files[0])}
              placeholder="Image"
              type="file"
              // type="image/png"
              label="Télecharger une image"
              size="sm"
            />
          </Form.Group> */}
          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Déja inscrit?
            <Link to="/login" className="text-light"></Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default RegisterPage;
