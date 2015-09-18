import React from 'react';
import Note from './Note';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const notes = this.props.items;

    return <ul className='notes'>{notes.map(this.renderNote)}</ul>;
  }
  renderNote = (note) => {
    return (
      <li className='note' key={`note${note.id}`}>
        <Note task={note.task}  editing = {note.editing} onEdit={this.props.onEdit.bind(null, note.id)}/>
      </li>
    );
  }
}
