import React from 'react';
import { storiesOf } from '@storybook/react';
import ListMultiLight from './ListMultiLight';
import ListItemMultiLight from './ListItemMultiLight';
import ListTextMultiLight from './ListTextMultiLight';

storiesOf('ListMultiLight', module).add('ListMultiLight example', () => (
  <ListMultiLight>
    <ListItemMultiLight>
      <ListTextMultiLight
        component="div"
        color="textSecondary"
        variant="caption"
        text="Subtext 1"
      />
      <ListTextMultiLight component="div" color="textSecondary" variant="body2" text="Text" />
    </ListItemMultiLight>
    <ListItemMultiLight>
      <ListTextMultiLight color="textSecondary" variant="body2" text="Text 1" />
      <ListMultiLight>
        <ListItemMultiLight>
          <ListTextMultiLight color="textSecondary" variant="body1" text="Text 3" />
        </ListItemMultiLight>
        <ListItemMultiLight>
          <ListTextMultiLight color="textSecondary" variant="body1" text="Text 4" />
        </ListItemMultiLight>
      </ListMultiLight>
    </ListItemMultiLight>
  </ListMultiLight>
));
