import React, {useEffect} from 'react';
import { useUser } from '../../context/UserContext';
import { Link, Navigate } from 'react-router-dom';
import { useHomeState } from './HomeController';
import NavbarApp from '../../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardContent from '../../components/CardContent';
import CategorySection from '../../components/CategorySection';

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
    console.log(contents);
    setCategories(categories);
    console.log(categories);
  }

  const handleLogout = () => {
    logout();
    <Navigate to="/" />
  }

  return (
    <>
      <NavbarApp />

      {
        categories.map(category => {
          return <CategorySection category={category} contents={contents[category.name]} />
        })
      }
    </>
  );
}

export default Home;