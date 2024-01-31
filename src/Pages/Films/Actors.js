import { useFilmsByActor } from '../../hooks/useMovie';
import { useParams } from 'react-router-dom';
import LoadingFilms from "../../components/LoadingFilms";
import ListFilms from '../../components/ListFilms';

function Actors() {
  const { id } = useParams();
  const { isLoading, data: moviesData } = useFilmsByActor(id);
  

  /*const moviesData = {
    result: [...mdata.cast]
  }; */

  if (isLoading) {
    return (
      <>
        <LoadingFilms />
      </>
    );
  }
  return (
    <>
      <ListFilms moviesData={moviesData}/>
    </>
  );
}
export default Actors;