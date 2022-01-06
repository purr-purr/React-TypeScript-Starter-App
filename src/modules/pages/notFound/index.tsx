import { useEffect } from 'react';
import s from './NotFound.module.scss';

const NotFoundPage = () => {
  useEffect(() => {
    document.title = `404 Not Found`;
  }, []);

  return (
    <section className={s.notFound}>
      <div className="container">404 not found</div>
    </section>
  );
};

export default NotFoundPage;
