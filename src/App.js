import logo from './logo.svg';
import './App.css';
import Banner from './components/banner/Banner';
import Blogs from './components/blogs/Blogs';

function App() {
  return (
    <>
      <Banner heading={'Hello Developer!'} subheading={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}></Banner>
      <Blogs/>
    </>
  );
}

export default App;
