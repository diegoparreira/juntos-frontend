import React, {useEffect} from 'react';
import { useUser } from '../../context/UserContext';
import { Navigate } from 'react-router-dom';
import { useHomeState } from './HomeController';
// import ResponsiveAppBar from '../../components/ResponsiveAppBar';

function Home() {
  const { logout, user } = useUser();
  const {
    contents,
    setContents,
    categories,
    setCategories,
    getAllContents,
    getAllCategories
  } = useHomeState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const contents = await getAllContents();
    const categories = await getAllCategories();
    setContents(contents);
    setCategories(categories);
  }

  const handleLogout = () => {
    logout();
    <Navigate to="/" />
  }

  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <h1>Bem-vindo, {user.fullName} à Página Inicial</h1>
      <p>Esta é a página principal da sua aplicação.</p>
      <button onClick={handleLogout}>Logout</button>
      {categories.map(e => 
        (
          <div key={e.id}>
            {e.name}
          </div>
        )
      )}
      {contents.map(e => 
        (
          <div key={e.id}>
            {e.title}
          </div>
        )
      )}
    </>
  );
}

export default Home;