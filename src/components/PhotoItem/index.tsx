import { Link } from 'react-router-dom';
import { Photo } from '../../types/Photo';

type Props = {
  data: Photo
}

export const PhotoItem = ({ data }: Props) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='
        border 
        p-2 
        hover:scale-105
        hover:border-cyan-500 
        transition duration-150 ease-out
        hover:ease-in'>
        <Link to={`/photo/${data.id}`} className="photo">
          <img className='' src={data.thumbnailUrl} alt={data.title} />
        </Link>
      </div>
      
    </div>

  );
}