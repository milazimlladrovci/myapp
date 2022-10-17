import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


const Home = () => {
  const cars = [
    {
      id: 1,
      name:'BMW',
      description: 'Bayerische Motoren Werke AG, abbreviated as BMW (German pronunciation:  (listen)), is a German multinational manufacturer of performance luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany. The corporation was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945',
      link: 'https://www.bmw.com/en/index.html',
      img:'https://images7.alphacoders.com/548/thumb-1920-548306.jpg'
    },
    {
      id: 2,
      name:'Mercedes',
      description: 'Mercedes-Benz (German pronunciation:(listen)), commonly referred to as Mercedes and sometimes as Benz, is a German luxury and commercial vehicle automotive brand established in 1926. Mercedes-Benz AG (a Mercedes-Benz Group subsidiary established in 2019) is headquartered in Stuttgart, Baden-Württemberg, Germany',
      link: 'https://www.mercedes-benz.com/en/',
      img:'https://images.wallpaperscraft.com/image/single/mercedes_amg_gt_s_mercedes_benz_silver_side_view_108427_1920x1080.jpg'
    },
    {
      id: 3,
      name:'Audi',
      description: 'Audi është një kompani e cila merret me prodhimin, projektimin dhe ndërtimin e automobilave dhe motoçikletave. Kjo kompani ka shtrirje në të gjithë botën, me bazë në Ingolstadt të Gjermanisë. Emrin Audi e mori nga zbuluesi, August Horch. “Horch” do te thote te degjosh e qe ne gjuhen latine perkthehet AUDI. ',
      link: 'https://www.audi.com/en.html',
      img:'https://wallpapercave.com/wp/wp2024188.jpg'
    },
    {
      id: 4,
      name:'Maserati',
      description: 'Maserati è unazienda italiana produttrice di automobili sportive di lusso fondata a Bologna, oggi con sede a Modena e per lungo tempo impegnata in differenti categorie automobilistiche grazie alla propria Squadra Corse. ',
      link: 'https://www.maserati.com/global/en',
      img:'https://wallpapercave.com/wp/3HsmAIF.jpg'
    },
  ]
  return (
    <Carousel>
      { cars.map((car)=>{
        return (

       
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={car.img}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{car.name}</h3>
              <p>{car.description}</p>
              <Button href={car.link} variant="outline-success">Go to {car.name}</Button>{' '}
            </Carousel.Caption>
          </Carousel.Item> 
      )
      })
      }
    </Carousel>
  ) 
}

export default Home