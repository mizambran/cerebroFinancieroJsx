import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import logoUrl from '../../assets/icon/logo.png'

const Footer = () => {
  return (
    <div>
      <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={logoUrl} className='w-50 h-50' rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="#instagram" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Footer
