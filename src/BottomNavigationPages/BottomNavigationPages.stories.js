import React from 'react';
import { storiesOf } from '@storybook/react';
import BottomNavigationPages from './BottomNavigationPages';
import { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Icon from 'material-ui/Icon';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import { action } from '@storybook/addon-actions';

storiesOf('BottomNavigation', module).add('BottomNavigation example', () => (
  <BottomNavigationPages handleChange={action('Нажато')} valueChanged={'nearby'}>
    <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
    <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
    <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
    <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
  </BottomNavigationPages>
));
