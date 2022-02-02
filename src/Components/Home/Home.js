import { Link, Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <nav>
        <Link to='pageOne'>Page1</Link> |{' '}
        <Link to='pageTwo'>Page2</Link> |{' '}
        <Link to='pageThree'>Page3</Link> |{' '}
        <Link to='pageFour'>Page4</Link> |{' '}
        <Link to='pageFive'>Page5</Link>
      </nav>
      <hr/>
      <main>
        <Outlet/>
      </main>
    </>
  );
}