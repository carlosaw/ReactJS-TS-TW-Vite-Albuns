import ProgressBar from '../../assets/progress-bar.gif';

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>              
      <img src={ProgressBar} alt='0' width={200}/>        
    </div>
  );
}