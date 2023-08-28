import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { Photo as PhotoType } from '../types/Photo';

export const Photo = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [photoInfo, setPhotoInfo] = useState<PhotoType>();

  useEffect(() => {
    if (params.id) {
      loadPhoto(params.id);
    }
  }, []);

  const loadPhoto = async (id: string) => {
    const photo = await api.getPhoto(id);
    setPhotoInfo(photo);
  }

  const handleBackButton = () => {
    navigate(-1);
  }

  return (
    <div>
      {photoInfo &&
        <>
          <div className='mt-4 text-center'> 
            <button onClick={handleBackButton} className='bg-cyan-600
            text-white'>...Voltar</button>
          </div>

          <div className='flex flex-col justify-center items-center mt-4'>
            <p className='mb-4'>{photoInfo.title}</p>
            <div>
              <img src={photoInfo.url} alt={photoInfo.title} />
            </div>          
          </div>          
        </>
      }
    </div>
  );
}