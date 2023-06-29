import React from 'react';
import { Restaurants } from './pages';
import { Page } from './App.styles';

function App() {
  return (
    <Page>
      <Restaurants />
    </Page>
  );
}

export default React.memo(App);
