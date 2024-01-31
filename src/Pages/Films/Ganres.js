import LoadingFilms from "../../components/LoadingFilms";
import ListFilms from '../../components/ListFilms';
import { useGetByGanre } from '../../hooks/useMovie';
import { useParams } from 'react-router-dom';

function Ganres() {
  const { id } = useParams();
  const { isLoading, data: moviesData } = useGetByGanre(id);
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
export default Ganres;