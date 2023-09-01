import { useEffect, useState } from 'react';
import { api } from '../api';
import { AlbumItem } from '../components/AlbumItem';
import { Loading } from '../components/Loading';
import { Album } from '../types/Album';
import { Header } from '../components/Header'; 

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
    }, 2000);   
  }

  return (
    <>
    {loading &&
      <Loading/>
    }    
      
      <div className='container mx-auto max-w-screen-lg'>
        {!loading &&        
          <>
            <Header />
            <div className='p-2 flex flex-col w-full'>
              {list.map((item, index) => (        
                <div className='mb-2'>
                  <AlbumItem
                    key={index.toString()}
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