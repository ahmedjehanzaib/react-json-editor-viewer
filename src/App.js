import ReactJson from 'react-json-view';
import { useState } from 'react';
import './App.css';


function App() {
  const [obj, setObj] = useState({});

  const onAddEvent = (added) => {
    setObj({ ...added.updated_src })
  }

  const onEditEvent = (edited) => {
    setObj({ ...edited.updated_src })
  }

  const onDeleteEvent = (deleted) => {
    setObj({ ...deleted.updated_src })
  }


  const saveJsonValue = () => {
    window.alert(JSON.stringify(obj, null));
  }

  return (
    <div className="App">
      <h3>React Json Editor/Viewer</h3>
      <form>
        <ReactJson
          theme={'bright:inverted'}
          src={obj}
          onAdd={(add) => {
            onAddEvent(add);
          }}
          onEdit={(edit) => {
            onEditEvent(edit)
          }}
          onDelete={(d) => { onDeleteEvent(d) }}
        />
      </form>
      <hr />
      <button type="submit" onClick={saveJsonValue}>Save</button>
    </div>
  );
}

export default App;
