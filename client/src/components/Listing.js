import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import EditModal from './EditModal';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    maxWidth: 900
  },
  container: {
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default function Listing(props) {
  const classes = useStyles();
  const { dbUpdatedAt } = props;

  useEffect(() => {
    props.getUserBusinesses(props.userId)
    // https://github.com/facebook/create-react-app/issues/6880
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dbUpdatedAt]);


  return (
    <>
      <TableContainer className={classes.container} component={Paper}>
        {
          props.isLoggedIn ? (
            <p>User logged in</p>
          ) : (
            <p>You are not logged in. Log in to add your own businesses!</p>
          )
        }
        {
          props.isLoggedIn && 
          <Modal />
        }
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Hours</TableCell>
              <TableCell align="center">Address</TableCell>
              {props.isLoggedIn &&
                <TableCell align="center">Delete</TableCell>
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {props.businesses.map(business => (
              <TableRow key={business.tempId}>
                <TableCell component="th" scope="row"><Link to={`/temp-details/${business.tempId}`} > {business.name} </Link> </TableCell>
                <TableCell align="center">{business.description}</TableCell>
                <TableCell align="center">{business.hours}</TableCell>
                <TableCell align="center">{business.address}</TableCell>
                {props.isLoggedIn &&
                  <>
                    <TableCell align="center">
                      <Button onClick={()=>props.deleteBusiness(business)}>DELETE</Button>
                    </TableCell>
                  </>
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {props.isLoggedIn && 
        <TableContainer className={classes.container} component={Paper}>
        <h4>Your Businesses</h4>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Hours</TableCell>
              <TableCell align="center">Address</TableCell>
              {props.isLoggedIn &&
                <>
                  <TableCell align="center">Delete</TableCell>
                  <TableCell align="center">Edit</TableCell>
                </>
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {props.userBusinesses.map(business => (
              <TableRow key={business.id}>
                <TableCell component="th" scope="row"><Link to={`/details/${business.id}`} > {business.name} </Link> </TableCell>
                <TableCell align="center">{business.description}</TableCell>
                <TableCell align="center">{business.hours}</TableCell>
                <TableCell align="center">{business.address}</TableCell>
                {props.isLoggedIn &&
                  <>
                    <TableCell align="center">
                      <Button onClick={()=>props.deleteUserBusiness(business.id)}>DELETE</Button>
                    </TableCell>
                    <TableCell align="center">
                        <EditModal 
                          
                          id={business.id}
                        />
                    </TableCell>
                  </>
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      }
    </>

  );
}

// name={business.name}
//                           address={business.address}
//                           hours={business.hours}
//                           description={business.description}