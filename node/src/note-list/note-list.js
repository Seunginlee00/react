import React, {Component} from 'react';
import Note from './note/note.js';
import './note-list.scss';

class NodeList extends Component {
    static defaultProps = {
        notes: []
    };


    render() {
        const noteListReturn = notes => {
            return notes.map((note, idx) => {
                return <Note key={idx} noteNumber={idx} title={note.title} text={note.date} edited={note.edited}/>;
            });
        };


        // const noteListReturn = notes => {
        //     return notes.map((note,idx) => {
        //         return (
        //             <div key={idx}>
        //                 <div>{note.title}</div>
        //                 <div>{note.text}</div>
        //             </div>
        //         );
        //     });
        // };

        return (
            <div id="note-list-container">
                <div id="note-list">{noteListReturn(this.props.notes)}</div>
            </div>
        );
    }

}

export default NodeList;