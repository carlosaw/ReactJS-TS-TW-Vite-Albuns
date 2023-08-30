import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { Photo as PhotoType } from '../types/Photo';
import { Loading } from '../components/Loading';
import { Header } from '../components/Header';
import { BackButton } from '../components/BackButton';

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

  return (
    <>
      <div className='flex justify-center items-center'>
        {loading &&
          <Loading />
        }
      </div>

      {!loading &&
        <div>
          <Header />
          <BackButton />          
          {photoInfo &&
            <>
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