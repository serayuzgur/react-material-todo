import './main.css';
import React from 'react';
import App from './components/App';
import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';
import injectTapEventPlugin from 'react-tap-event-plugin';


// Starts the program, as C,JAVA, e.t.c
// Creates the application 
main();

function main() {

  //Initialize all decorators.
  persist(alt, storage, 'app');

  //Start plugin.
  injectTapEventPlugin();
  
  // Create a default container for app. Render it.
  const app = document.createElement('div');
  document.body.appendChild(app);
  React.render(<App />, app);
}
