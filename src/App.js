import { Routes, Route} from 'react-router-dom';
import { Home } from './Components/Home/Home.js';
import { DefaultPage } from './Components/DefaultPage/DefaultPage.js';
import { PageOne } from './Components/PageOne/PageOne.js';
import { PageTwo } from './Components/PageTwo/PageTwo.js';
import { PageThree } from './Components/PageThree/PageThree.js';
import { PageFour } from './Components/PageFour/PageFour.js';
import { PageFive } from './Components/PageFive/PageFive.js';
import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<DefaultPage/>}/>
          <Route path='pageOne' element={<PageOne/>}/>
          <Route path='pageTwo' element={<PageTwo/>}/>
          <Route path='pageThree' element={<PageThree/>}/>
          <Route path='pageFour' element={<PageFour/>}/>
          <Route path='pageFive' element={<PageFive/>}/>
        </Route>
      </Routes>
    </div>
  );
}