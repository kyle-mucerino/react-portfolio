import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../About/about.css';

function About() {
  return (
    <Container className="about-container">
      <Row>
              <Col>
                <div className='card'>
                  <p className="card-text">
                    Since graduating from Austin College in 2018 with a bachelor's in
                    mathematics & economics, I have worked in several fields and
                    fullfilled lifelong dreams. I was/am a math tutor, both
                    privately as well as with{" "}
                    <a
                      href="https://youmecanedu.com/teachers"
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      YouMeCan Education
                    </a>
                    , where I am currently conducting sessions.  In roles as a math teacher, football coach, and strength & conditioning coach, I helped launch a thriving Holistic Sports Academy in South Orange County, CA{" "}
                    <a
                      href="https://www.thetogethership.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      The Togethership{" "}
                    </a>{" "}
                    in 2020.  I helped establish a mathematics curriculum and school culture being one of only eight staff members in the school's first two years. During this time I also worked as a high school football coach for
                    one of the best public programs in the country, San Juan Hills High
                    School. At the end of
                    2021 I had the opportunity of a lifetime to play American football
                    internationally, with the Zaragoza
                    Hurricanes of Zaragoza, Spain where I was one of two Amercians on
                    the team. I signed a contract for the duration of the season in
                    which I was an ambassador for the sport and the team in Spain, as
                    well as helping coach all levels of their club, which is expected of
                    Americans being hired by international football organizations. While
                    in Zaragoza, I also worked for an Enlish language intrusctional
                    academy,{" "}
                    <a
                      href="https://www.urbanenglish.es/"
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      Urban English
                    </a>
                    , where I worked with native Spanish speakers ranging from 5 years
                    old to business professionals, all working under the Cambridge
                    English language learning curriculum among others. After a
                    successful season and experience, in which I was named the Wide
                    Receiver MVP of the league, I agreed to a contract with a team in Brazil, the
                    Recife Mariners, where I spent a season playing and living in
                    Recife, Brazil performing many of the same duties including
                    expanding and teaching the game of American football throughout
                    Brazil. Upon arriving back to California, I decided to enroll in the
                    University of California, Irvine's Full-Stack Web Developement Boot
                    Camp which I completed in May 2023. 
                  </p>
                </div>
              </Col>   
      </Row>
    </Container>
  );
}

export default About;