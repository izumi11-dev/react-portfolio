import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Project() {
  return (
    <div className='my_project' id='project'>
      <div className="container mt-5 m-auto">
        <div className="text-center">
            <h4>MY PROJECTS</h4>
        </div>
        <div className="row  row-cols-lg-2 row-cols-md-2 text-center  ms-5 m-sm-auto">
            <div className="mt-5 ms-5">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./image/img2.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>

            <div className="mt-5 ">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./image/img3.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick exampe text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>

            <div className="mt-5 ">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./image/img5.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>

          


            <div className="mt-5 ">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./image/img9.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project
