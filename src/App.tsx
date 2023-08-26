import { MainRoutes } from './routes/MainRoutes';
import Camera from './assets/camera-removebg.png';

const App = () => {
 
  return (
    // {/* <div className='flex justify-center items-center'>
    //     {loading &&
    //       <img src={ProgressBar} alt='0' width={200}/>
    //     }
    //   </div> */}
  
    <div className='container mx-auto max-w-screen-lg'>
      
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