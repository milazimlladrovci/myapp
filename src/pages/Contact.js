import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Contact = () => {
  const cars = [
    {
      id: 1,
      name:'BMW',
      description: 'Bayerische Motoren Werke AG, abbreviated as BMW (German pronunciation: [ˌbeːʔɛmˈveː] (listen)), is a German multinational manufacturer of performance luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany. The corporation was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945',
      link: 'https://www.bmw.com/en/index.html',
      type: [
       {
        name:"Automatik BMW"
       },
       {
        name:"Manual BMW"
       }
      ]
    },
    {
      id: 2,
      name:'Mercedes',
      description: 'Mercedes-Benz (German pronunciation: [mɛɐ̯ˈtseːdəsˌbɛnts, -dɛs-] (listen)),[6][7] commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926. Mercedes-Benz AG (a Mercedes-Benz Group subsidiary established in 2019) is headquartered in Stuttgart, Baden-Württemberg, Germany',
      link: 'https://www.mercedes-benz.com/en/',
      type: [
        {
         name:"Automatik Mercedes"
        },
        {
         name:"Manual Mercedes"
        }
       ]
    },
    {
      id: 3,
      name:'Audi',
      description: 'Audi[2][3] është një kompani e cila merret me prodhimin, projektimin dhe ndërtimin e automobilave dhe motoçikletave. Kjo kompani ka shtrirje në të gjithë botën, me bazë në Ingolstadt të Gjermanisë. Emrin Audi e mori nga zbuluesi, August Horch. “Horch” do te thote te degjosh e qe ne gjuhen latine perkthehet AUDI. ',
      link: 'https://www.audi.com/en.html',
      type: [
        {
         name:"Automatik Audi"
        },
        {
         name:"Manual Audi"
        }
       ]
    },
    {
      id: 4,
      name:'Maserati',
      description: 'Maserati è unazienda italiana produttrice di automobili sportive di lusso fondata a Bologna, oggi con sede a Modena e per lungo tempo impegnata in differenti categorie automobilistiche grazie alla propria Squadra Corse. ',
      link: 'https://www.maserati.com/global/en',
      type: [
        {
         name:"Automatik Maserati"
        },
        {
         name:"Manual Maserati"
        }
       ]
    },
  ]
  return (
    <Container>
      <Row>
        {
           cars.map((car)=>{
            return (
               <Col xs={12} md={6} lg={4}>
                  <Card>
                  
                    <Card.Body>
                      <Card.Title>{car.name}</Card.Title>
                      <Card.Text>
                        {car.description}
                        {
                          car.type.map((type)=>{
                            return(
                              <button>{type.name}</button>
                            )
                          })
                        }
                      </Card.Text>
                      <Button href={car.link} variant="primary">See more - {car.name}</Button>
                    </Card.Body>
                  </Card>
                </Col>
             )})}
       
         
      </Row>
    </Container>
  )
}

export default Contact