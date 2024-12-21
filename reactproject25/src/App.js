
import './App.css';
import Accordion from './components/accordion';
import RandomColorGenerator from './components/random-color-generator';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';

function App() {
  return (
    <div className="App">
      {/* 1.  <Accordion/> */}
      {/* 2. <RandomColorGenerator/> */}
      {/* 3. <StarRating/> */}
      {/* 4. <ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={10}/> */}
      {/* 5. <LoadMoreData/> */}
      {/* 6. <TreeView menus={menus}/> */}
      <QRCodeGenerator/>
      
      
    </div>
  );
}

export default App;
