import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const Twitter = () => (
  <Timeline
    dataSource={{
      sourceType: 'profile',
      screenName: 'obscura_nit_kkr',
    }}
    options={{
      username: 'obscura_nit_kkr',
      height: '90vh',
    }}
  />
);

export default Twitter;
