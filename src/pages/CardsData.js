import React, { PureComponent } from 'react';
import CardDataMaster from '../components/CardDataMaster';
import { withStyles } from 'material-ui/styles/index';

const styles = theme => ({
  root: {
    margin: '0px 100px 20px 100px',
    [theme.breakpoints.down('sm')]: {
      margin: '0px 20px 8px 20px'
    },
    [theme.breakpoints.only('md')]: {
      margin: '0px 40px 13px 40px'
    }
  }
});

class CardsData extends PureComponent {
  render() {
    const { classes, test } = this.props;

    return (
      <div className={classes.root}>
        {test.map(item => <CardDataMaster key={item.number} number={item.number} />)}
      </div>
    );
  }
}

export default withStyles(styles)(CardsData);
