import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, Container, Card, Button, Row, Col } from "react-bootstrap";

// Usamos la API directamente con tu API key
const API_URL =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=6250fea7461f424b93381ecf585e73a9";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  source: {
    name: string;
  };
}

const NewsCarousel: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Agrupar las noticias en bloques de 3 para que se muestren 3 por vez
  const chunkArray = (arr: Article[], chunkSize: number) => {
    let index = 0;
    const tempArray = [];
    while (index < arr.length) {
      tempArray.push(arr.slice(index, index + chunkSize));
      index += chunkSize;
    }
    return tempArray;
  };

  const groupedArticles = chunkArray(articles, 3); // Agrupar en bloques de 3 noticias

  if (loading) {
    return <div>Loading news...</div>;
  }
  return (
    <Container className="py-5">
      <h2 className="mb-4">Latest News</h2>
      <Carousel controls={true} indicators={false}>
        {groupedArticles.map((group, index) => (
          <Carousel.Item key={index}>
            <Row>
              {group.map((article, idx) => (
                <Col key={idx} md={4}>
                  <Card className="h-100">
                    {article.urlToImage && (
                      <Card.Img
                        variant="top"
                        src={article.urlToImage}
                        alt={article.title}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    )}
                    <Card.Body>
                      <Card.Title>{article.title}</Card.Title>
                      <Card.Text>{article.description}</Card.Text>
                      <Button
                        variant="primary"
                        href={article.url}
                        target="_blank"
                      >
                        Read More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default NewsCarousel;
