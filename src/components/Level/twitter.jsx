import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const Twitter = () => (
  <div>
    <Timeline
      dataSource={{
        sourceType: 'profile',
        screenName: 'obscura_NITKKR',
      }}
      options={{
        username: 'obscura_NITKKR',
        height: '90vh',
      }}
    />
  </div>
);

export default Twitter;
