import { Routes, Route } from "react-router-dom";
import Main from './Pages/Main/Main';
import Profile from './Pages/Profile/Profile';
import History from './Pages/History/History';
import Favorite from './Pages/Favorite/Favorite'
import Films from './Pages/Films/Films';
import SingleFilm from './Pages/SingleFilm/SingleFilm';
import Layout from './Layout';
import Ganres from './Pages/Films/Ganres'
import Actors from './Pages/Films/Actors'
import Serials from './Pages/Films/Serials'
import WrapperFilms from "./hoc/WrapperFilms";





function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="profile" element={<Profile />} />
          <Route path="history" element={<History />} />
          <Route path="films" element={<Films />} />
          <Route path="serials" element={<Serials />} />
          <Route path="films/:title" element={<SingleFilm />} />
          <Route path="serials/:title" element={<SingleFilm />} />
          <Route path="ganres/:id" element={<Ganres />} />
          <Route path="actor/:id" element={<Actors />} />
        </Route>
      </Routes>
  );
}

export default App;
