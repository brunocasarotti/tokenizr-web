import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Token from '../../utilities/Token'

function BasicExample() {
  return (
    <Container>
      <Card  style={{ width: '105%' }}>
        <Token></Token>
        <Card.Body>
          <Card.Title>Tokenizr</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies fringilla felis, at fringilla dui auctor et. Duis vel dolor a eros mattis congue vehicula quis lectus.
          </Card.Text>
          <Button variant="warning">GO TO TOKEN</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BasicExample;