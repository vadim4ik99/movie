import { useGetSerials } from '../../hooks/useMovie';
import LoadingFilms from "../../components/LoadingFilms";
import ListFilms from '../../components/ListFilms';


function Serials() {
  const { isLoading, data: moviesData } = useGetSerials();

  if (isLoading) {
    return (
      <>
      <LoadingFilms />
      </>
    );
  }
  return (
    <>
    <ListFilms  moviesData={moviesData}/>
    </>
  );
}
export default Serials;