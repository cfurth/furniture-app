import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ItemOne from './ItemOne';
import ItemTwo from './ItemOne';
import ItemThree from './ItemOne';
import ItemFour from './ItemOne';
import ItemFive from './ItemOne';
import ItemSix from './ItemOne';
import ItemSeven from './ItemOne';
import ItemEight from './ItemOne';
import ItemNine from './ItemOne';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
    
  const classes = useStyles();

  return (
    <div>
      <h1>Gallery</h1>
        <div>
            <Grid
            container
            spacing={3}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minHeight: '120px' }}
            > 
                <Grid item xs={3}>
                <ItemOne className={classes.root} />
                </Grid>
                <Grid item xs={3}>
                <ItemTwo className={classes.root} />
                </Grid>
                <Grid item xs={3}>
                <ItemThree className={classes.root} />
                </Grid>
            </Grid>
            <Grid
            container
            spacing={3}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minHeight: '120px' }}
            > 
                <Grid item xs={3}>
                <ItemFour className={classes.root} />
                </Grid>
                <Grid item xs={3}>
                <ItemFive className={classes.root} />
                </Grid>
                <Grid item xs={3}>
                <ItemSix className={classes.root} />
                </Grid>
            </Grid>
            <Grid
            container
            spacing={3}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minHeight: '120px' }}
            > 
                <Grid item xs={3}>
                <ItemSeven className={classes.root} />
                </Grid>
                <Grid item xs={3}>
                <ItemEight className={classes.root} />
                </Grid>
                <Grid item xs={3}>
                <ItemNine className={classes.root} />
                </Grid>
            </Grid>
        </div>
    </div>
  );
}