import React from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Badge from "react-bootstrap/esm/Badge";
import { useEffect, useState } from "react";
import axios from "axios";
// import Accordion from "react-bootstrap/Accordion";

const MyPosts = () => {
  const [notes, setNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm("Etes vous sure?")) {
    }
  };

  // la fonction qui ce lance des que la page est hargé
  const FetchPosts = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };
  useEffect(() => {
    FetchPosts();
  }, []);

  console.log(notes);

  return (
    <div>
      <MainScreen title="Bienvenue Alain ">
        <Link to="createpost">
          <Button style={{ marginLeft: 10, marginBottom: 6 }}>
            Créer Nouveau post
          </Button>
        </Link>

        {notes.map((note) => (
          <Card key={note._id}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  alignSelf: "center",
                  cursor: "pointer",
                  fontSize: 18,
                }}
              >
                {note.title}
              </span>
              <div>
                <Button href={`/note/${note._id}`}>Modifier</Button>
                <Button
                  onClick={() => deleteHandler(note._id)}
                  variant="danger"
                  className="mx-2"
                >
                  Supprimer
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
              <h4>
                <Badge variant="success">Categorie: {note.category}</Badge>
              </h4>

              <blockquote className="blockquote mb-0">
                <p>{note.content}</p>
                <footer className="blockquote-footer">crée le - Date</footer>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
      </MainScreen>
    </div>
  );
};

export default MyPosts;
