import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Profile } from 'components/profile/Profile';
import './index.css';
import user from "./path/to/user.json";


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
    </App>
  </React.StrictMode>
);
