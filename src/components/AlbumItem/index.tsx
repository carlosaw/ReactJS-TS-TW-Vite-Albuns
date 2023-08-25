import { Link } from 'react-router-dom';

type Props = {
  id: number;
  title: string;
}

export const AlbumItem = ({ id, title }: Props) => {
  return (
    <Link to={`/album/${id}`} className="album">
      <div className='border border-blue-500 pl-4 pt-2 pb-2 text-gray-300 rounded-md cursor-pointer hover:border-slate-200 hover:text-white text-lg ' 
      >
        {title}
      </div>
    </Link>
  );
}