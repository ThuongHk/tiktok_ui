import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import DeafaultLayout from './components/deafaultLayout/DeafaultLayout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = route.layout || DeafaultLayout;
            let Page = route.component
            return (
              <Route key={index} path={route.path} element={<Layout><Page/></Layout>} />
            )
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
