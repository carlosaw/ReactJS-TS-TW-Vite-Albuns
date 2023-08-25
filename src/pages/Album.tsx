import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { Photo } from '../types/Photo';
import { Album as AlbumType } from '../types/Album';
import { PhotoItem } from '../components/PhotoItem';
import ProgressBar from '../assets/progress-bar.gif';

export const Album = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<Photo[]>([]);
  const [albumInfo, setAlbumInfo] = useState<AlbumType>({ id: 0, title: '', userId: 0 });

  useEffect(() => {
    if (params.id) {
      loadPhotos(params.id);
      loadAlbumInfo(params.id);
    }
  }, []);

  const loadPhotos = async (id: string) => {
    setLoading(true);
    const photos = await api.getPhotosFromAlbum(id);
    setList(photos);
    setLoading(false);
  }

  const loadAlbumInfo = async (id: string) => {
    const albumInfo = await api.getAlbum(id);
    setAlbumInfo(albumInfo);
  }

  const handleBackButton = () => {
    navigate(-1);
  }

  return (
    <div className='flex flex-col '>
              
        {loading &&
          <img src={ProgressBar} alt='' width={150} />
        }
        <button onClick={handleBackButton}>Voltar</button>
        <div>
          <h1 className='flex 1'>{albumInfo.title}</h1>
        </div>
        
        <div className='grid grid-cols-5 gap-4'>
          {list.map((item, index) => (
            <PhotoItem
              key={index}
              data={item}
            />
          ))}
        </div>
    </div>

  );
}