import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem(){
    
    const item = {
      id: Math.floor(Math.random()*1000),
      value: newItem
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }


  return(
      <div className="App">
        <h1>TODO LIST</h1>

        <form onSubmit={(e)=> {
          e.preventDefault();
          addItem();
        }}>
          <h3>İtem Ekle: <input type="text" placeholder="A New Item" value={newItem} onChange={e=>setNewItem(e.target.value)}
          /></h3>
          <button onClick={(e)=> addItem()}>Oluştur</button>
        </form>
        <ul>
        {items.map(item => {
        return <li key={item.id}> {item.value}</li>
        })}
        </ul>
      </div>
    );
  }

export default App;
