import React, { Component } from 'react';
import Table from '../common/table.component';

class Student extends React.Component {

    state={
        headers: ['Roll','Name','CGPA'],
        students: [
            {roll:'1', name:'Tahsin', CGPA: '4.00'},
            {roll:'134', name:'Ta', CGPA: '3.00'},
            {roll:'132', name:'Tahs', CGPA: '3.30'}

        ]
    }
    render() { 
        return (
            <>
                <Table headers={this.state.headers} students={this.state.students}/>
            </>
        );
    }
}
 
export default Student;