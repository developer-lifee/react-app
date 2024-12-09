// src/components/Biblioteca.tsx
import React, { useState } from 'react';
import { Container, Row, InputGroup, FormControl, Card, Button } from 'react-bootstrap';

type CardInfo = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  articleUrl: string;
};

// Datos simulados para las tarjetas
const initialCards: CardInfo[] = [
  {
    id: 1,
    title: 'Guía de Formularios Migratorios',
    description: 'Aprende a preparar formularios migratorios con esta guía detallada.',
    imageUrl: 'https://example.com/path/to/image.jpg', // Reemplaza con la URL real de la imagen
    articleUrl: 'https://example.com/path/to/article'
  },
  {
    id: 2,
    title: 'Normativas de Inmigración Actualizadas',
    description: 'Consulta las últimas normativas y leyes de inmigración.',
    imageUrl: 'https://example.com/path/to/secondimage.jpg', // Reemplaza con la URL real de la imagen
    articleUrl: 'https://example.com/path/to/secondarticle'
  },
  // Agrega más tarjetas según sea necesario
];

const Biblioteca: React.FC = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  const [cards, setCards] = useState<CardInfo[]>(initialCards);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setSearchTerm(event.target.value);
    const filteredCards = initialCards.filter(card => card.title.toLowerCase().includes(event.target.value.toLowerCase()) || card.description.toLowerCase().includes(event.target.value.toLowerCase()));
    setCards(filteredCards);
  };

  return (
    <Container>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Buscar..."
          onChange={handleSearch}
        />
      </InputGroup>
      <Row xs={1} md={2} lg={3}>
        {cards.map(card => (
          <Card key={card.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={card.imageUrl} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                {card.description}
              </Card.Text>
              <Button variant="primary" href={card.articleUrl} target="_blank">Leer Artículo</Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Biblioteca;
