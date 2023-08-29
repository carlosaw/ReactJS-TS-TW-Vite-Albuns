import { useEffect, useState } from 'react';
import { api } from '../api';
import { AlbumItem } from '../components/AlbumItem';
import { Album } from '../types/Album';
import ProgressBar from '../assets/progress-bar.gif';

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
      <div className='flex justify-center items-center'>      
        {loading &&
          <img src={ProgressBar} alt='0' width={200}/>
        }
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
  );
}