import { Link } from 'react-router-dom';
import { Photo } from '../../types/Photo';

type Props = {
  data: Photo
}

export const PhotoItem = ({ data }: Props) => {
  return (
    <div className='flex justify-center items-center border p-2'>
      <Link to={`/photo/${data.id}`} className="photo">
        <img src={data.thumbnailUrl} alt={data.title} />
      </Link>
    </div>

  );
}