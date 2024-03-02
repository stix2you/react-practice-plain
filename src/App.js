// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Alert, Breadcrumb, Button, Card, Form } from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Container>   {/*  fluid class name to the container to make it fluid <Container fluid> */}
                    <h1>Hello World</h1>
                    <Form>
                        <Row>
                            <Col md>
                                <Form.Group controlID="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text style={{ color: '#bfbfbf' }}>
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col md>
                                <Form.Group controlID="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                    <Button className="m-3" variant="primary" type="submit">Login</Button>
                                </Form.Group>

                            </Col>
                        </Row>
                    </Form>
                    <Card className="m-3">
                        <Card.Img src="https://picsum.photos/200/100" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                This is a card with a placeholder image.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Breadcrumb>
                        <Breadcrumb.Item>Test 1</Breadcrumb.Item>
                        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
                        <Breadcrumb.Item style={{ color: '#fff' }} active>Test 3</Breadcrumb.Item>
                    </Breadcrumb>
                    <Alert variant="primary">This is a primary alert—check it out!</Alert>
                    <Button>Click me</Button>
                </Container>
            </header>
        </div>
    );
}

export default App;

