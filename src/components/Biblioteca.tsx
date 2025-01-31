import React, { useEffect, useState } from 'react';
import { Container, Row, InputGroup, FormControl, Card, Button } from 'react-bootstrap';

type CardInfo = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  articleUrl: string;
};

const Biblioteca: React.FC = () => {
  const [cards, setCards] = useState<CardInfo[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const FOLDER_ID = '1RwTR_rEm6_8WVH91AME25AZ-tNDF-98j'; // Reemplaza con el ID de tu carpeta
  const API_KEY = 'AIzaSyBmbO-a7kkfFYq6spPeDD8enWxiUMXqt1o'; // Reemplaza con tu clave de API

  useEffect(() => {
    // Llama a la API de Google Drive para obtener los archivos de la carpeta
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType,webViewLink,thumbnailLink)`
        );
        const data = await response.json();

        // Mapea los archivos a la estructura de CardInfo
        const articles = data.files.map((file: any) => ({
          id: file.id,
          title: file.name,
          description: 'Artículo disponible en Google Drive',
          imageUrl: file.thumbnailLink || 'https://via.placeholder.com/150', // Usa un placeholder si no hay miniatura
          articleUrl: file.webViewLink,
        }));

        setCards(articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </InputGroup>
      <Row xs={1} md={2} lg={3}>
        {filteredCards.map(card => (
          <Card key={card.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={card.imageUrl} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <Button variant="primary" href={card.articleUrl} target="_blank">
                Leer Artículo
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Biblioteca;
