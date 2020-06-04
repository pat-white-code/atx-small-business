import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';


const Details = props => {
  let id = props.match.params.id;
  console.log('props.match.params.id: ',id)
  let business = props.userBusinesses.filter(business => business.id === parseInt(id))[0] 

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
        ${mapUrl}`} allowFullScreen>
      </iframe>
      <Link to='/'>Back</Link>
    </Container>
  )
}

export default Details