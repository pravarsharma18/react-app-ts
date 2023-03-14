import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'
import ListGroup from './components/ListGroup'

function App() {
  let items = ["Rajasthan", "Utter Pradesh", "Maharastra", "Tamil Nadu", "Delhi"]
  const [showAlert, setShowAlert] = useState(false)
  const handleSelectItem =(item: string)=>{
    console.log(item)
  }
  const handleBtnClick = () => {
    setShowAlert(true)
  }
  return (
      <div>
        {showAlert && 
        <Alert onClose={()=>setShowAlert(false)}>
          Hello <span>World</span>
        </Alert>
        }
        <ListGroup items={items} heading="States" onSelectItem={handleSelectItem} />
        <Button 
          onClick={handleBtnClick}
          >
          Submit
        </Button>
      </div>
  )
}

export default App
