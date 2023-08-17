import Carousel from 'react-bootstrap/Carousel';


function CarouselFadeExample() {
  return (
    <div className='pad-for-caros car-small'>
    <Carousel fade interval={1000}> {/* interval prop'u ile otomatik geçiş süresini belirleyin */}
      <Carousel.Item className=''>
        <img className='bor-rad-for-caros' src="https://picsum.photos/id/237/1460/350" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=''>
        <img className='bor-rad-for-caros' src="https://picsum.photos/id/196/1460/350" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className=''>
        <img className='bor-rad-for-caros' src="https://picsum.photos/id/37/1460/350" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;