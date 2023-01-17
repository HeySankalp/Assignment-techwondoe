import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from 'react-query'
import UserContextProvider from './context/userContext';

function App() {
  const queryClient = new QueryClient()

  return (
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </UserContextProvider>
  );
}

export default App;
