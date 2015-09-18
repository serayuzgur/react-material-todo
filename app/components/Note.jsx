import React from 'react';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';

export default class Note extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			editing:false
		};

	}
	render() {
		const editing = this.state.editing;

		return (
			<div>
				<TextField
	      		defaultValue={this.props.task}
	      		onBlur={this.finishEdit}
	      		onEnterKeyDown={this.finishEdit}
	      		placeholder='Enter new Task'
						ref='task'
						focus='true'
						style={{width:'90%'}} />
					 <FlatButton onTouchTap={this.delete} label='X' />
			</div>
		);
	}
	edit = () => {
  	this.setState({
    		editing: true
  	});
	}
	delete = () => {
		this.refs.task.clearValue();
		this.finishEdit({'target' : React.findDOMNode(this.refs.task)});
	}

 finishEdit = (e) =>  {
	  this.props.onEdit(e.target.value);
	  this.setState({
	    editing: false
	  });
		this.refs.task.blur();
  }
}
