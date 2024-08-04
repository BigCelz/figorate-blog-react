import "./Post.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

const blogData = [
  {
    id: 1,
    image: require("../images/blog.png"),
    date: "19.06.2024",
    description: "Fresh Fusion: The Delicious World of Vegetable Salads",
    words:
      "Indulge in the flavors and nutrients of nature's bounty with our collection of vibrant and healthy vegetable salad recipes.",
  },

  {
    id: 2,
    image: require("../images/jar.png"),
    date: "19.06.2024",
    description: "Marinated Magic: Unlocking the Flavor of Vegetables",
    words:
      'Discover the transformative power of marinades in bringing out the sweet, savory, and tangy flavors of your favorite vegetables"',
  },

  {
    id: 3,
    image: require("../images/phone.png"),
    date: "19.06.2024",
    description:
      "Bite by Bite: Take Control of Your Nutrition with Our Meal Tracking App",
    words:
      "rack your eating habits, monitor your progress, and achieve your health goals with our user-friendly and intuitive meal tracking app",
  },

  {
    id: 4,
    image: require("../images/robot.png"),
    date: "19.06.2024",
    description: "Nourish Your Body: AI-Powered Balance Diet Scheduler",
    words:
      "Let our intelligent diet scheduling system guide you towards a balanced and personalized nutrition plan, tailored to your unique needs and goals",
  },

  {
    id: 5,
    image: require("../images/leg.png"),
    date: "19.06.2024",
    description: "Heartbeat Heroes: Unlock the Power of Cardio.",
    words:
      "Get moving, get sweating, and get ready to revolutionize your fitness journey with our cardio exercises and tips",
  },

  {
    id: 6,
    image: require("../images/blog9.png"),
    date: "19.06.2024",
    description: "he Fruit-Only Frenzy: A Diet to Avoid.",
    words:
      "Discover why a 72-hour fruit binge might not be the health boost you think it is",
  },

  {
    id: 7,
    image: require("../images/vegies2.png"),
    date: "19.06.2024",
    description: "The Fungal Fix: Unlocking the Power of Mushrooms",
    words:
      "Discover the immune-boosting, antioxidant-rich benefits of mushrooms and how they can supercharge your health",
  },

  {
    id: 8,
    image: require("../images/yoga.png"),
    date: "19.06.2024",
    description:
      "Find Your Inner Balance: Yoga Exercises for a Harmonious Life",
    words:
      "Discover the power of yoga with our expertly curated exercises, designed to strengthen your body, calm your mind, and nourish your spirit",
  },
];

function Post() {
  return (
    <section className="post">
      <Container>
        <div className="post-header">
          <h2 className="post-title">Blog Post </h2>
        </div>

        <Row>
            <Col md={12}>
              <Nav defaultActiveKey="/home" as="ul" className="nav-container">
                <Nav.Item as="li">
                  <Nav.Link href="/home" className="all">
                    All
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link eventKey="link-1" className="nav-link">
                    Nutrition
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link eventKey="link-2" className="nav-link">
                    Fitness
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link eventKey="link-3" className="nav-link">
                    Technology
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link eventKey="link-4" className="nav-link">
                    Expert Advice
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link eventKey="link-5" className="nav-link">
                    Tips & Tricks{" "}
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item as="li">
                  <Nav.Link eventKey="link-6" className="nav-link">
                    Wellness & Lifestyle
                  </Nav.Link>
                </Nav.Item>
              </Nav>
          </Col>
        </Row>

        <Row className="card-row">
          {blogData.map((blog) => {
            return (
              <Col md={3} key={blog.id} className="card-column">
                <div className="card-content mx-2">
                  <img src={blog.image} alt="" className="card-img" />
                  <date className="date">{blog.date}</date>
                  <h4 className="descrip">{blog.description}</h4>
                  <p className="words">{blog.words}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Post;
