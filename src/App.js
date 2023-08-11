import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import AnnouncementBar from "./components/header/AnnouncementBar";
import NavBar from "./components/header/NavBar";
import Body from "./components/body/Body";

function App() {
  return (
    <Container fluid>
      <AnnouncementBar />
      <NavBar />
      <Body />
    </Container>
  );
}

export default App;
