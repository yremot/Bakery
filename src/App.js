import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import AboutUsShop from './Pages/AboutUsShop';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import MenuItem2 from './Pages/MenuItem2';
import News from './Pages/News';
import NotFound from './Pages/NotFound';
import Root from './Pages/Root';
import { isMobile } from 'react-device-detect';
import MobileRoot from './Pages/Mobile/MobileRoot';

function App() {

  let router = null;

  if(isMobile){
    router=createBrowserRouter([
      {
          path:'/',
          element: <MobileRoot/>,
          errorElement: <NotFound/>,
          children:[
              // {index:true, element:<Home/>},
              // {path:'/menu', element:<Menu/>},
          ]
      }
    ])
  }else{
    router=createBrowserRouter([
      {
          path:'/',
          element: <Root/>,
          errorElement: <NotFound/>,
          children:[
              {index:true, element:<Home/>},
              {path:'/menu', element:<Menu/>},
              {path:'/menu/:menuItem', element:<MenuItem2/>},
              {path:'/news', element:<News/>},
              {path:'/aboutus', element:<AboutUs/>},
              {path:'/aboutus_shop', element:<AboutUsShop/>},
              // {path:'/products/:productId', element:<ProductsDetail/>}
          ]
      }
    ])
  }


  return (
    <RouterProvider router={router}/>
  );
}

export default App;
