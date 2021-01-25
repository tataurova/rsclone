import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    margin: '15px',
    fontFamily: 'Arial',
  },
  bar:{
    display:'flex',
    justifyContent:'center'
  },
  block: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    width: '240px',
    height:'75px',
    margin: '10px 30px',
    border: '1px solid rgb(133, 133, 133)',
    borderRadius: '4px',
  },
  color: {
    display: 'block',
    margin: '10px',
    width: '5px',
    height: '30px',
    border: ' 1px solid rgba(255, 99, 132, 1)',
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
  },
  blue: {
    display: 'block',
    margin: '10px',
    width: '5px',
    height: '30px',
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    border: '1px solid rgba(54, 162, 235, 1)',
  },
  name: {
    fontFamily: 'Arial',
    fontSize: '20px',
  },
  people: {
    marginRight: '10px',
    fontSize: '40px',
  },
  colorRed:{
    color:'rgb(255, 99, 132)'
  },
  colorBlue:{
    color:'rgb(54, 162, 235)'
  }
});
