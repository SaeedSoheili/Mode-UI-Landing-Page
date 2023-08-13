import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import AnnouncementBar from "./components/header/AnnouncementBar";
import NavBar from "./components/header/NavBar";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Container fluid>
      <AnnouncementBar />
      <NavBar />
      <Body />
      <Footer />
    </Container>
  );
}

export default App;
