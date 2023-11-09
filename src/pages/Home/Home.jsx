import React, {useEffect} from 'react';
import { useHomeState } from './HomeController';
import NavbarApp from '../../components/Navbar';
import CategorySection from '../../components/CategorySection';
import { Container } from 'react-bootstrap';

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
      <Container>
        {
          categories.map(category => {
            return <CategorySection category={category} contents={contents[category.name]} />
          })
        }
      </Container>
    </>
  );
}

export default Home;