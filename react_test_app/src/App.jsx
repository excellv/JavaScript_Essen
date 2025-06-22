function App() {
  const currDate = new Date();
  const Title = "Seven Habits of Effective People"
 const  Author = "Steven "
 const desc = "Great Book for Personal Development"
 const Name = "John Doe"
 const email = "john.doe@email.com"
 const bio = "React Developer @ Tech Co."

  return (
    <div>
       <Book Title ={Title} Author = {Author} desc = {desc} />
       <Another_Book />
      <h1>Hello, world!</h1>
      <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
      <Card Name = {Name} email = {email} bio = {bio} />
    </div>
  );
}
 function Book(props){
  return (
   <div>
    <h1>Title :{props.Title}</h1>
    <h1>By :{props.Author}</h1>
    <h1>Description :{props.desc}</h1>


   </div>
  )
 }
 function Another_Book(){
 const Title = "Seven Habits of Effective People"
 const  Author = "Steven "
 const desc = "Great Book for Personal Development"
  return (
     <div>
      <h1>Book Title: {Title}</h1>
      <h2>Author: {Author}</h2>
      <p> Book Description: {desc}</p>
     </div>
  )
  }

  function Card(props){
  return (
     
     <div className = "user-profile">
      <h1> Name : {props.Name}</h1>
     <h2> Email : {props.email}</h2>
     <h4>  Bio : {props.bio}</h4>
     </div>
  )

  }
 
 
export default App;