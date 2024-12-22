
import './App.css';
import Accordion from './components/accordion';
import RandomColorGenerator from './components/random-color-generator';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from './components/qr-code-generator';
import Themer from './components/themer';
import ScrollIndicator from './components/scroll-indicator';
import Tabs from './components/custom-tabs/tabs';
import TabsTest from './components/custom-tabs/tabs-test';
import Modal from './components/custom-modal/modal';
import ModalTest from './components/custom-modal/modal-test';
import Test from './components/custom-useEffect/test';

function App() {
  return (
    <div className="App">
      {/* 1.  <Accordion/> */}
      {/* 2. <RandomColorGenerator/> */}
      {/* 3. <StarRating/> */}
      {/* 4. <ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={10}/> */}
      {/* 5. <LoadMoreData/> */}
      {/* 6. <TreeView menus={menus}/> */}
      {/* 7. <QRCodeGenerator/> */}
      {/* 8. <Themer/> */}
      {/* 9. <ScrollIndicator url={'https://dummyjson.com/products?limit=100&skip=0'}/> */}
      {/* 10. <TabsTest/> */}
      {/* 11. <ModalTest/> */}
      <Test/>
      
    </div>
  );
}

export default App;
