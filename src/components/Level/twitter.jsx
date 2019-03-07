import React from 'react';
import { Timeline } from 'react-twitter-widgets';

const Twitter = () => (
  <div>
    <Timeline
      dataSource={{
        sourceType: 'profile',
        screenName: 'obscura_NIT_KKR',
      }}
      options={{
        username: 'obscura_NIT_KKR',
        height: '95vh',
      }}
    />
  </div>
);

export default Twitter;
