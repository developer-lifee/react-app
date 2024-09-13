// src/components/NewsCard.tsx
import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface NewsCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link}>Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
