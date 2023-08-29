import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { Photo } from '../types/Photo';
import { Album as AlbumType } from '../types/Album';
import { PhotoItem } from '../components/PhotoItem';
import { Loading } from '../components/Loading';
import Camera from '../assets/camera-removebg.png';

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
    setTimeout(() => {
      setList(photos);
      setLoading(false);
    }, 2000);

  }

  const loadAlbumInfo = async (id: string) => {
    const albumInfo = await api.getAlbum(id);
    setAlbumInfo(albumInfo);
  }

  const handleBackButton = () => {
    navigate(-1);
  }

  return (
    <>
      <div className='flex justify-center items-center'>
        {loading &&
          <Loading />
        }
      </div>
      {!loading &&
        <>
          <div className='h-30 flex justify-around items-center bg-blue-500 rounded-md'>
            <h1 className='text-white'>Galeria de fotos</h1>
            <img src={Camera} alt='' width={200} />
          </div>
          <div className='flex flex-col '>
            <div className='mt-4 text-center hover:scale-105 transition duration-150 ease-out hover:ease-in'>
              <button onClick={handleBackButton} className='bg-cyan-600
              text-white'>...Voltar</button>
            </div>
            <div className='flex justify-center items-center mt-2 mb-6'>
              <h1 className=''>{albumInfo.title}</h1>
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
        </>
      }
    </>
  );
}