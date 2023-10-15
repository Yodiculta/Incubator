import { useEffect, useState } from 'react';
import './styles.css'
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import Header from './Header';
import ItemsDashboard from '../../features/items/dashboard/ItemsDashboard';
function App() {
  const [items, setItems] = useState<Activity[]>([]);
  const [selectedItem, setSelectedItem] = useState<Activity|undefined>(undefined)
  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(response => {
        setItems(response.data)
      })
  }, [])

  function handleSelectItem(id: string)
  {
    setSelectedItem(items.find(x=>x.id ==id))
  }
  function handleCancelSelectItem()
  {
    setSelectedItem(undefined)
  }
  return (
    <div>
      <Header />
      <Container style = {{marginTop: "7em"}}>
        <ItemsDashboard items = {items}
        selectedItem = {selectedItem}
        selectItem = {handleSelectItem}
        cancelSelectItem = {handleCancelSelectItem}
        />
      </Container>

    </div>
  )
}

export default App
