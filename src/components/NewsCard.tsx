import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, Container, Card, Button, Row, Col } from "react-bootstrap";

const API_URL =
  "https://newsdata.io/api/1/news?apikey=pub_5373485c743e11a05f2b28b653968e3569eb4&q=immigration";

interface Article {
  title: string;
  description: string;
  link: string;
  image_url: string;
  source_id: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const NewsCarousel: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.data.status === "success") {
          setArticles(response.data.results);
        } else {
          console.error("API error:", response.data);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const chunkArray = (arr: Article[], chunkSize: number) => {
    let index = 0;
    const tempArray = [];
    while (index < arr.length) {
      tempArray.push(arr.slice(index, index + chunkSize));
      index += chunkSize;
    }
    return tempArray;
  };

  const groupedArticles = chunkArray(articles, 3);

  if (loading) {
    return <div>Cargando noticias...</div>;
  }

  return (
    <Container className="py-5">
      <h2 className="mb-4">Últimas Noticias</h2>
      <Carousel controls={true} indicators={false}>
        {groupedArticles.map((group, index) => (
          <Carousel.Item key={index}>
            <Row>
              {group.map((article, idx) => (
                <Col key={idx} md={4}>
                  <Card className="h-100" style={{ minHeight: "400px" }}>
                    {article.image_url ? (
                      <Card.Img
                        variant="top"
                        src={article.image_url}
                        alt={article.title}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    ) : (
                      <div
                        style={{
                          height: "200px",
                          backgroundColor: "#f0f0f0",
                        }}
                      ></div>
                    )}
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div>
                        <Card.Title>
                          {truncateText(article.title, 50)}
                        </Card.Title>
                        <Card.Text>
                          {truncateText(
                            article.description ||
                              "Sin descripción disponible.",
                            100
                          )}
                        </Card.Text>
                      </div>
                      <Button
                        variant="primary"
                        href={article.link}
                        target="_blank"
                      >
                        Leer más
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
