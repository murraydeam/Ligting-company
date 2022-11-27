import Button from '@mui/material/Button'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = 'React Matrial UI - Home'
  }, []);

  return (
    <div className="App">
      <Button>test</Button>
    </div>
  );
}

export default App;
