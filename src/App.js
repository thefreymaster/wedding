import React from 'react';
import { Box } from '@chakra-ui/react';
import './App.css';
import { Navigation } from './components/Navigation/index';
import Routes from './routes';

const App = () => {
  const [page, setPage] = React.useState(0);

  return (
    <Box display="flex" flexDir="column">
      <Navigation setPage={setPage} page={page} />
      <Routes />
    </Box>
  );
}

export default App;
