import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
function App() {
  const [items, setItems] = useState([]);

  useEffect(()=>
  {
    axios.get('http://localhost:5000/api/activities')
    .then( response =>{
      setItems(response.data)
    })
  }, [])

  return (
    <div>
      <Header as = 'h2' icon = 'users' content = 'Инкубатор'/>
    <h1>Инкубатор</h1>
    <List>
      {items.map((item: any) =>(
        <List.Item key = {item.id}>{item.title}</List.Item>
      ))}
    </List>
    </div>
  )
}

export default App
