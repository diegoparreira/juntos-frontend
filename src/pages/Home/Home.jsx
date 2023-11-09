import React, {useEffect} from 'react';
import { useUser } from '../../context/UserContext';
import { Navigate } from 'react-router-dom';
import { useHomeState } from './HomeController';
import NavbarApp from '../../components/Navbar';
import CategorySection from '../../components/CategorySection';

function Home() {
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