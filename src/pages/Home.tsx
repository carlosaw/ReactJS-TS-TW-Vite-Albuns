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
    setLoading(true);    
    const albums = await api.getAlbums();
    setInterval(() => {
      setLoading(false);
  }, 2500);
    setList(albums);
    setLoading(false);
  }

  return (
    <>
    <div>

      {loading &&
        <img src={ProgressBar} alt='' width={150} />
      }
</div>
      {list.map((item, index) => (
        <div className='p-2'>
          <AlbumItem
            key={index.toString()}
            id={item.id}
            title={item.title}
          />
        </div>
      ))}
   </> 
  );
}