import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
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

/**Карта с Основными данными */
class CardDataMaster extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    subtitle: PropTypes.string,
    overhead: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
    cover: PropTypes.string,
    overheadColor: PropTypes.oneOf(['secondary', 'default', 'primary']),
    contentMain: PropTypes.string,
    actions: PropTypes.node,
    expandMain: PropTypes.bool,
    handleExpandMainClick: PropTypes.func,
    contentMainAdditional: PropTypes.node,
    className: PropTypes.string
  };

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
      contentMainAdditional,
      className: classNameProp
    } = this.props;

    return (
      <Card className={classNames(classes.root, classNameProp)}>
        <div className={classes.details}>
          {/*Данные с лева в верху.*/}
          <div className={classes.detailsLeft}>
            <CardContent>
              {/*Верхний Заголовок если нужен.*/}
              {overhead && (
                <Typography variant="caption" color={overheadColor}>
                  {overhead}
                </Typography>
              )}
              {/*Заголовок если нужен.*/}
              {title && <Typography variant="headline">{title}</Typography>}
              {/*Подзаголовок если нужен.*/}
              {subtitle && (
                <Typography variant="subheading" color="textSecondary">
                  {subtitle}
                </Typography>
              )}
            </CardContent>
            {/*Кнопки действий если нужны.*/}
            {actions && <CardActions className={classes.detailsLeftActions}>{actions}</CardActions>}
          </div>
          {/*Данные с права с верху.*/}
          <div className={classes.detailsRight}>
            {/*Обложка если нужна*/}
            {cover && <CardMedia className={classes.detailsRightMedia} image={cover} />}
          </div>
        </div>
        {/*Кнопка раскрытия основных данных если нужна.*/}
        {contentMain && (
          <CardActions className={classes.actionsBottom}>
            <IconButton
              className={classNames(classes.expand, {
                [classes.expandOpen]: expandMain
              })}
              onClick={handleExpandMainClick}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        )}
        {/*Данные с низу если нужны.*/}
        {contentMain && (
          <Collapse in={expandMain} timeout="auto">
            <CardContent className={classes.contentMain}>
              {/*Основные данные*/}
              <Typography className={classes.contentMainLeft}>{contentMain}</Typography>
              {/*Дополнительные данные если нужны.*/}
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
