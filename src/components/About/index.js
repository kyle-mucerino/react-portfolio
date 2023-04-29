import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <Row className="my-2">
        <h1 className='fs-1 badge bg-primary text-wrap' style={{width: "12rem"}}>About Me</h1>
      </Row>
      <Row>
        <Col>
          <p className='text-muted fs-5'>
            Since graduating from Austin College in 2018 with a bachelor's in Mathematics & Economics, I have worked in several fields and fullfilled lifelong dreams. I have worked as a math teacher and <a href="https://youmecanedu.com/teachers" target="_blank" rel="noopener noreferrer">tutor</a>, helping launch a thriving <a href="https://www.thetogethership.com/" target="_blank" rel="noopener noreferrer">Elite Athletic Academic Program in South Orange County, CA </a> as well as my own tutoring business. I have worked as a high school football coach for one of the best public programs in the country San Juan Hills High School, working with all levels. In 2021 I had the opportunity of a lifetime to play American football internationally, with a semi-pro team the Zaragoza Hurricanes of Zaragoza, Spain where I was one of two Amercians on the team. I signed a contract for the duration of the season in which I was an ambassador for the sport and the team in Spain, as well as helping coach all levels of their club, which is expected of Americans being hired by international football organizations. While in Zaragoza, I also worked for an Enlish language intrusctional academy, <a href="https://www.urbanenglish.es/" target="_blank" rel="noopener noreferrer">Urban English</a>, where I worked with native Spanish speakers ranging from 5 years old to business professionals, all working under the Cambridge English language learning curriculum among others.  After a successful season and experience, in which I was named the Wide Receiver MVP of the league, I was picked up by a team in Brazil, the Recife Mariners, where I spent a season playing and living in Recife, Brazil performing many of the same duties including expanding and teachign the game of American football throughout Brazil. 
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;