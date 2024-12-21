
import './App.css';
import Accordion from './components/accordion';
import RandomColorGenerator from './components/random-color-generator';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';

function App() {
  return (
    <div className="App">
      {/* <Accordion/> */}
      {/* <RandomColorGenerator/> */}
      {/* <StarRating/> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={10}/> */}
      {/* <LoadMoreData/> */}
      <TreeView/>
      
      
    </div>
  );
}

export default App;
