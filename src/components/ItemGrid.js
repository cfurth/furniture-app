import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ItemOne from './ItemOne.js';
import ItemTwo from './ItemOne.js';
import ItemThree from './ItemOne.js';
import ItemFour from './ItemOne.js';
import ItemFive from './ItemOne.js';
import ItemSix from './ItemOne.js';
import ItemSeven from './ItemOne.js';
import ItemEight from './ItemOne.js';
import ItemNine from './ItemOne.js';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
      <div>
          <Grid
          container
          spacing={9}
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
          spacing={9}
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
          spacing={9}
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
  );
}