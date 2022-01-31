import React from 'react';
import { button, Card } from 'react-bootstrap';

const Services = () => {
    return (
        <div>
            <h2>this is our services</h2>
            <section>
                <Card className="card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <button variant="primary">Go somewhere</button>
                    </Card.Body>
                </Card>
            </section>
        </div>
    );
};

export default Services;