import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 10,
    zIndex: theme.zIndex.drawer - 1,
    fontFamily: 'roboto'
  },
  details: {
    display: 'flex'
  },
  detailsLeft: {
    flexGrow: 1,
    flexBasis: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  detailsLeftActions: {
    marginTop: 'auto'
  },
  detailsRight: {
    flexGrow: 1,
    flexBasis: 150
  },
  detailsRightMedia: {
    height: 200,
    width: 120,
    margin: 'auto'
  },
  actionsBottom: {
    height: 20
  },
  contentMain: {
    display: 'flex'
  },
  contentMainLeft: {
    flexGrow: 1,
    flexBasis: '70%'
  },
  contentMainRight: {
    flexGrow: 1,
    flexBasis: '30%',
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
});

class CardDataMaster extends PureComponent {
  render() {
    const {
      classes,
      subtitle,
      overhead,
      title,
      cover,
      overheadColor,
      contentMain,
      actions,
      expandMain,
      handleExpandMainClick,
      contentMainAdditional
    } = this.props;

    return (
      <Card className={classes.root}>
        <div className={classes.details}>
          <div className={classes.detailsLeft}>
            <CardContent>
              {overhead && (
                <Typography variant="caption" color={overheadColor}>
                  {overhead}
                </Typography>
              )}
              {title && <Typography variant="headline">{title}</Typography>}
              {subtitle && (
                <Typography variant="subheading" color="textSecondary">
                  {subtitle}
                </Typography>
              )}
            </CardContent>
            {actions && <CardActions className={classes.detailsLeftActions}>{actions}</CardActions>}
          </div>
          <div className={classes.detailsRight}>
            {cover && <CardMedia className={classes.detailsRightMedia} image={cover} />}
          </div>
        </div>
        {contentMain && (
          <CardActions className={classes.actionsBottom}>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: expandMain
              })}
              onClick={handleExpandMainClick}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        )}
        {contentMain && (
          <Collapse in={expandMain} timeout="auto">
            <CardContent className={classes.contentMain}>
              <Typography className={classes.contentMainLeft}>{contentMain}</Typography>
              {contentMainAdditional && (
                <Typography variant="caption" className={classes.contentMainRight}>
                  {contentMainAdditional}
                </Typography>
              )}
            </CardContent>
          </Collapse>
        )}
      </Card>
    );
  }
}

export default withStyles(styles)(CardDataMaster);