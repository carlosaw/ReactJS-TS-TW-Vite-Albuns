import Camera from '../../assets/camera-removebg.png';

export const Header = () => {
  return (
    
    <div className='h-30 flex justify-around items-center bg-blue-500 rounded-md'>
      <h1 className='text-white'>Galeria de fotos</h1>
      <img src={Camera} alt='' width={200} />        
    </div>
  );
}