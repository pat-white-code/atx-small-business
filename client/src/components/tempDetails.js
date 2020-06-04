import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';


const tempDetails = props => {
  let id = props.match.params.id;
  let business = props.businesses.filter(business => business.tempId === parseInt(id))[0]
  let mapUrl = '&q=' + business.address.replace(/ /g, '+') 

  return (
    <Container fixed>
      <h1>{business.name}</h1>
      <h4>{business.address}</h4>
      <h4>{business.hours}</h4>
      <p>{business.description}</p>
      <iframe
        title='google map'
        width="600"
        height="450"
        frameBorder="0" style={{border: 0}}
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}
        ${mapUrl}`} allowFullscreen>
      </iframe>
      <Link to='/'>Back</Link>
    </Container>
  )
}

export default tempDetails