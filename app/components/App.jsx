import uuid from 'node-uuid';
import 'core-js/fn/array/find-index';


import React from 'react';
import Alert from './Alert';

import Notes from './Notes';
import NoteStore from '../stores/NodeStore.js';
import NoteActions from '../actions/NoteActions.js';

import theme from '../decorators/theme';
import connectToStores from 'alt/utils/connectToStores';

import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';

import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menu/menu-item';


import Dialog from 'material-ui/lib/dialog';
import Colors from 'material-ui/lib/styles/colors';

let ThemeManager = new (require('material-ui/lib/styles/theme-manager'))();
ThemeManager.setTheme(ThemeManager.types.LIGHT);

@connectToStores
export default class App extends React.Component {

  static childContextTypes = {muiTheme: React.PropTypes.object}

  static getStores(props) {
    return [NoteStore];
  }
  static getPropsFromStores(props) {
    return {
      ...NoteStore.getState()
    }
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500,
    });
  }

	render() {
		const notes = this.props.notes;
    var  menuItems = [
      { type: MenuItem.Types.SUBHEADER, text: 'Resources' },{
        type: MenuItem.Types.LINK,
        payload: 'https://github.com/callemall/material-ui',
        text: 'GitHub'}];
		return (
			<div>
        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
        <AppBar title="Material-TODO" iconClassNameRight="muidocs-icon-navigation-expand-more" onLeftIconButtonTouchTap={this.toogleMenu} iconElementRight={<FlatButton label="Add" onTouchTap={this.addItem}/>} />
				<Notes items = {notes} onEdit={this.itemEdited} />
			</div>
		);
	}

  toogleMenu = () => {
        this.refs.leftNav.toggle();
  }
	addItem = () => {
    NoteActions.create({id: uuid.v4(), task: '',editing:true});
  }

  itemEdited(id, task) {
    if(task) {
      NoteActions.update({id, task});
    }
    else {
      NoteActions.delete(id);
    }
	}
}
App.childContextTypes = {
      muiTheme: React.PropTypes.object
}
