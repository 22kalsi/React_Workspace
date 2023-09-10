import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer"; 
import Form from "../Components/Form"


const Layout = () => {

return(

<Container fluid >

      <Row>
        {/* <Header/> */}
      </Row>

      <Row>
        <Col sm={2} style={{backgroundColor:"#579BB1"}} className="p-2"></Col>
        <Col sm={8}  className="p-2"><Form/></Col>
      </Row>

      <Row>
        <Col>
        </Col>
      </Row>
</Container>

)

}

export default Layout