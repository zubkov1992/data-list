import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Badge from 'material-ui/Badge';
import teal from 'material-ui/colors/teal';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 10,
    zIndex: theme.zIndex.drawer - 1,
    fontFamily: 'roboto'
  },
  badge: {
    width: 72,
    margin: theme.spacing.unit * 0.6,
    padding: `0 ${theme.spacing.unit * 0.6}px`,
    borderRadius: 7,
    left: -12,
    zIndex: theme.zIndex.drawer + 2
  },
  badgeColorTeal: {
    backgroundColor: teal[500],
    color: theme.palette.primary.contrastText
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
    headline: PropTypes.string,
    title: PropTypes.string,
    subheading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    cover: PropTypes.string,
    caption: PropTypes.string,
    bradge: PropTypes.string,
    badgeColor: PropTypes.oneOf(['secondary', 'teal', 'primary']),
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
      title,
      subheading,
      caption,
      headline,
      cover,
      badgeColor,
      badge,
      contentMain,
      actions,
      expandMain,
      handleExpandMainClick,
      contentMainAdditional,
      className: classNameProp
    } = this.props;

    return (
      <Badge classes={{ badge: classes.badge, colorTeal: classes.badgeColorTeal }} badgeContent={badge} color={badgeColor}>
        <Card className={classNames(classes.root, classNameProp)}>
          <div className={classes.details}>
            {/*Данные с лева в верху.*/}
            <div className={classes.detailsLeft}>
              <CardContent>
                {/*Верхний Заголовок если нужен.*/}
                {caption && <Typography variant="caption">{caption}</Typography>}
                {/*Заголовок если нужен.*/}
                {headline && <Typography variant="headline">{headline}</Typography>}
                {/*Подзаголовок если нужен.*/}
                {title && <Typography variant="title">{title}</Typography>}
                {/*Подзаголовок если нужен.*/}
                {subheading && (
                  <Typography variant="subheading" color="textSecondary">
                    {subheading}
                  </Typography>
                )}
              </CardContent>
              {/*Кнопки действий если нужны.*/}
              {actions && (
                <CardActions className={classes.detailsLeftActions}>{actions}</CardActions>
              )}
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
      </Badge>
    );
  }
}

export default withStyles(styles)(CardDataMaster);
