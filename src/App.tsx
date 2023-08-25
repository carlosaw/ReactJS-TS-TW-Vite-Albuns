import { MainRoutes } from './routes/MainRoutes';
import Camera from './assets/camera-removebg.png';
import ProgressBar from './assets/progress-bar.gif';
import { useState } from 'react';

const App = () => {
  const [loading] = useState(false);

  return (
    <div className='container mx-auto max-w-screen-lg'>
      {loading &&
        <img src={ProgressBar} alt='' width={150} />
      }
      <div className='
        h-28 
        flex 
        justify-around 
        items-center 
        bg-blue-500 
        rounded-md'
      >
        <h1 className='text-white'>Galeria de fotos</h1>
        <img src={Camera} alt='' width={150} />        
      </div>
      <MainRoutes />
    </div>
  );
}

export default App;