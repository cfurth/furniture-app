import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardImage from '../img/chair.jpeg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ItemOne = () => {

  const classes = useStyles();

  /*const [isChecked, setIsChecked] = useState(false);

  const checkbox = isChecked ? checkmark : cardImage;

  const toggleCheck = () => {
    setIsChecked(!isChecked);
    handleClick();
  }
*/
return (
  <Card className={classes.root} /*onClick={toggleCheck}*/>
      <CardActionArea>
          <CardMedia
          component="img"
          alt="Descending Arrow"
          height="192"
          title="Lower Times"
          src={cardImage}
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              Item One
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Chair
          </Typography>
          </CardContent>
      </CardActionArea>
  </Card>
  );
}

export default ItemOne;