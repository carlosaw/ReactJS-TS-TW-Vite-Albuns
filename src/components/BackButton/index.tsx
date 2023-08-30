import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  
  const handleBackButton = () => {  
    navigate(-1);    
  }
  return (
    <>      
      <div className='mt-4 text-center hover:scale-105 transition duration-150 ease-out    hover:ease-in'>
        <button onClick={handleBackButton} className='bg-cyan-600
        text-white'>...Voltar</button>
      </div>      
    </>    
  );
}