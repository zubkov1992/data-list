import React from 'react';
import { storiesOf } from '@storybook/react';
import DrawerPages from './DrawerPages';

storiesOf('Drawer', module).add('drawer example', () => <DrawerPages openSidebar={true} />);
