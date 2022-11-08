import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import './index.css';
import user from "./path/to/user.json";
import data from "./path/to/data.json";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics 
        // title='asdasdasdasd'
        stats={data}
      />
    </App>
  </React.StrictMode>
);
