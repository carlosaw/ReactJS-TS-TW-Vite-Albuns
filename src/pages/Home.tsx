import { useEffect, useState } from 'react';
import { api } from '../api';
import { AlbumItem } from '../components/AlbumItem';
import { Loading } from '../components/Loading';
import { Album } from '../types/Album';
//import ProgressBar from '../assets/progress-bar.gif';
import Camera from '../assets/camera-removebg.png';

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<Album[]>([]);

  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async () => {           
    const albums = await api.getAlbums();
    setLoading(true);
    setTimeout(() => {
      setList(albums);
      setLoading(false);
    }, 2500);   
  }

  return (
    <>
    {loading &&
      <Loading/>
    }    
      
      <div className='container mx-auto max-w-screen-lg'>
        {!loading &&        
          <>
            <div className='h-30 flex justify-around items-center bg-blue-500 rounded-md'>
              <h1 className='text-white'>Galeria de fotos</h1>
              <img src={Camera} alt='' width={200} />        
            </div>
            <div className='p-2 flex flex-col w-full'>
              {list.map((item, index) => (        
                <div className='mb-2'>
                  <AlbumItem
                    key={index}
                    id={item.id}
                    title={item.title}
                  /> 
                </div>                 
              ))}      
            </div>
          </>   
        }
      </div>      
    </>     
  );
}