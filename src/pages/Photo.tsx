import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { Photo as PhotoType } from '../types/Photo';
import Camera from '../assets/camera-removebg.png';
import { Loading } from '../components/Loading';

export const Photo = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [photoInfo, setPhotoInfo] = useState<PhotoType>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (params.id) {
      loadPhoto(params.id);
    }
  }, []);

  const loadPhoto = async (id: string) => {
    setLoading(true);
    const photo = await api.getPhoto(id);
    setTimeout(() => {
      setPhotoInfo(photo);
      setLoading(false);
    }, 2000);
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
        <div>
          <div className='h-30 flex justify-around items-center bg-blue-500 rounded-md'>
            <h1 className='text-white'>Galeria de fotos</h1>
            <img src={Camera} alt='' width={200} />
          </div>          
          {photoInfo &&
            <>
              <div className='mt-4 text-center hover:scale-105 transition duration-150 ease-out hover:ease-in'>
                <button onClick={handleBackButton} className='bg-cyan-600
            text-white'>...Voltar</button>
              </div>
              <div className='flex flex-col justify-center items-center mt-4'>
                <p className='mb-4 text-xl'>{photoInfo.title}</p>
                <div>
                  <img src={photoInfo.url} alt={photoInfo.title} />
                </div>
              </div>
            </>
          }
        </div>
      }
    </>
  );
}