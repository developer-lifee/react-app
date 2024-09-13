// src/components/NewsSection.tsx
import { Container, Row, Col } from 'react-bootstrap';
import NewsCard from './NewsCard';

const NewsSection = () => {
  const newsArticles = [
    { title: 'News 1', description: 'This is news 1', imageUrl: '/path/to/image1.jpg', link: '#' },
    { title: 'News 2', description: 'This is news 2', imageUrl: '/path/to/image2.jpg', link: '#' },
    { title: 'News 3', description: 'This is news 3', imageUrl: '/path/to/image3.jpg', link: '#' },
  ];

  return (
    <section className="py-5 bg-white">
      <Container>
        <h2 className="mb-5 text-center">News and Insights</h2>
        <Row>
          {newsArticles.map((article, index) => (
            <Col key={index} md={4}>
              <NewsCard
                title={article.title}
                description={article.description}
                imageUrl={article.imageUrl}
                link={article.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NewsSection;
