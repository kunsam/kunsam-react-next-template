

import React, { Component } from 'react'
import AppbarLayout from '../../layouts/appbar/appbar';
import { Grid } from '@material-ui/core';
import ScoresReader from '../../components/scoresreader';
import ScoresInfoPanel from './scoresinfopanel';

import Paper from '@material-ui/core/Paper';
import { compose, graphql } from 'react-apollo';
import { QueryAbout } from '../../graphql/about';



 class ScoresContainer extends Component {

  render() {
    return (
      <AppbarLayout>
        <Grid container justify="flex-start" spacing={0}>

          <Grid item xs={8}>
            <Paper
              style={{ marginLeft: 5, height: 400 }}>
              <ScoresReader />
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper  style={{ marginRight: 5, height: 400 }}>
              <ScoresInfoPanel />
            </Paper>
          </Grid>
          
        </Grid>
      </AppbarLayout>
    )
  }
}

export default compose(
  graphql(QueryAbout, {
    props: (props: any) => {
      console.log(props, props.data.error, 'propspropsprops')
      return props;
    }
  })
)(ScoresContainer)