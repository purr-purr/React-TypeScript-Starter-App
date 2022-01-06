import { useEffect } from 'react';
import styles from './Home.module.scss';

const Home = () => {
  useEffect(() => {
    document.title = `Home Page`;
  }, []);

  return (
    <>
      <section className={styles.home}>
        <div className="container">home page</div>
      </section>
    </>
  );
};

export default Home;
