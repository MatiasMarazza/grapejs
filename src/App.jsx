import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import 'grapesjs-preset-webpage';
import { GrapesjsReact } from 'grapesjs-react';

function App() {
  

   
  return (
   <div className='wrapper'>
   <GrapesjsReact
    id='grapesjs-react'
    plugins={[
      'gjs-preset-webpage',
      'gjs-blocks-basic'
    ]}
  />
   </div>
  )
}

export default App
