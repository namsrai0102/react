import logo from './logo.svg';
import './App.css';

function App() {
  const users =[
    {name:"john", age:15},
    {name:"boldo", age:25},
    {name:"dorjo", age:14},
    {name:"tom", age:17},
    {name:"nami", age:19},
  ];
  let sum =0;
  for(let i=0; i<users.length; i++){
    sum = sum+ users[i].age;
  }
  sum=sum/users.length;
  console.log(sum);
  return (
    <div className="App">
     <p>Avarage age: {users[1].age}</p>
     <p>{sum}</p>
     
    </div>
  );
}

export default App;
