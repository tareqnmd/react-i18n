import { Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Loading from './components/Loading';
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <main className='p-10'>
        <Home />
      </main>
    </Suspense>
  );
};

export default App;
