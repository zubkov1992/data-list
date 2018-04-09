import React from 'react';
import { storiesOf } from '@storybook/react';
import ErrorPages from './ErrorPages';

storiesOf('ErrorPages', module).add('ErrorPages example', () => (
  <ErrorPages message="Упс...Что-то пошло не так. Такой страницы нет." />
));
