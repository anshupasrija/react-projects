import React from 'react'


function List(props) {
  console.log(props);
    return (
    <div>
      <h1>List Of people</h1>
      {props.people.map(person=>{
        const {id,name,age,image} = person;
        return <article key= {id}>
        <img src = {image} alt ="" />
         <h3>{name}</h3>
         <p>{age}</p>
        </article>
      })}
    </div>
  )
}

export default List
