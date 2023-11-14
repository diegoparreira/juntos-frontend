import React from 'react';
import NavbarApp from '../../components/Navbar';
import CategorySection from '../../components/CategorySection';
import { Container } from 'react-bootstrap';
import { useContents } from '../../hooks/useContents';
import { useCategories } from '../../hooks/useCategories';

function Home() {
  const { contents } = useContents();
  const { categories } = useCategories();

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