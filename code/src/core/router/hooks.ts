import { useLocation, useNavigate } from "react-router-dom"

function useMangaReaderNavigate(){
  const  navigate = useNavigate();
  const location = useLocation();
  return {
    navigate, location
  }
}

export { useMangaReaderNavigate};

