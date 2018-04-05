import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AppBarPages from './AppBarPages';

storiesOf('AppBar', module).add('appBar example', () => (
  <AppBarPages
    logoSrc="http://files.book.andrei-server.ru/static/logo-blue.png"
    auth={true}
    onChangeSidebar={action('Сайдбар открыт')}
    onChangeLogin={action('Залогинен')}
    onChangeLogout={action('Вышел')}
  />
));
