import React from 'react';
import Person from './Person';

function NameList() {
    // let names =['avanthi','pavan', 'raj' ];
    // let nameList = names.map(name => <h2>{name}</h2>)


    const person = [
        {
        id : 1,
        name : 'avanthi',
        age : 12
    },
    {
        id:2,
        name: 'pavan',
        age: 16
    }
]
let personList = person.map(person => <Person  key = {person.id} person = {person}/>)


  return (
    // <div>
      
    //     {nameList}
      
    // </div>

    <div>{personList}</div>


  );
}

export default NameList;
