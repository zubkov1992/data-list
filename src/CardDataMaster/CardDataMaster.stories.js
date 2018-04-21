import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CardDataMaster from './CardDataMaster';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import Typography from 'material-ui/Typography';
import Icons from 'material-ui/Icon';

storiesOf('CardDataMaster', module).add('card example', () => (
  <CardDataMaster
    caption={'Статус'}
    headline={'Автор'}
    title={'Название'}
    subheading={
      <Fragment>
        Дополнительные данные<Icons>keyboard_arrow_right</Icons>Еще данные
      </Fragment>
    }
    contentMain={'Описание книги. '.repeat(60)}
    cover={'http://files.book.andrei-server.ru/image/17982ac3-3451-4f86-8ce6-be54871dcf1d.jpg'}
    captionColor={'primary'}
    actions={
      <div>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </div>
    }
    expandMain={true}
    handleExpandMainClick={action('Контент открыт')}
    contentMainAdditional={
      <div>
        <Typography variant="body1">Жанр: жанр</Typography>
        <Typography variant="body1">Поджанр: поджанр</Typography>
      </div>
    }
  />
));
