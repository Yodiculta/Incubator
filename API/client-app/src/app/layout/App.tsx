import { useEffect, useState } from 'react';
import './styles.css'
import axios from 'axios';
import { Container, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import Header from './Header';
function App() {
  const [items, setItems] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(response => {
        setItems(response.data)
      })
  }, [])

  return (
    <div>
      <Header />
      <Container style = {{marginTop: "7em"}}>
        <List>
          {items.map((item) => (
            <List.Item key={item.id}>{item.title}</List.Item>
          ))}
        </List>
      </Container>

    </div>
  )
}

export default App
