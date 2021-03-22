import './App.css';
import React,{useState} from 'react';
import data from './data';
import List from './list';

function App() {
  const [people,setPeople] = useState(data);
  return (
   <main className="text-center">
     <section className="container">
       <h3>{people.length} Birthdays Today!</h3>
       <List people={people}/>
       <button onClick ={()=>setPeople([])}>clear all</button>
     </section>
   </main>
  );
}

export default App;
