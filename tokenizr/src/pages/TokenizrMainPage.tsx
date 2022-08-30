import Navbar from '../components/Navbar'
import Content_1 from '../components/MainPage/Content_1'
import Content_2 from '../components/MainPage/Content_2'
import Content_3 from '../components/MainPage/Content_3'
import Content_4 from '../components/MainPage/Content_4'
import Content_5 from '../components/MainPage/Content_5'
import Footer from '../components/MainPage/Footer'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function TokenizrMainPage() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Container>
          <Row>
            <Col sm={12}>
              <Content_1></Content_1>
            </Col>
            <Col sm={4}>
              <Content_2></Content_2>
            </Col>
            <Col sm={8}>
              <Content_3></Content_3>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Content_3></Content_3>
            </Col>
            <Col sm={4}>
              <Content_4></Content_4>
            </Col>
            <Col sm={4}>
              <Content_5></Content_5>
            </Col>
          </Row>
        </Container>

      <Footer></Footer>
      </div>
    </>
  )
}

