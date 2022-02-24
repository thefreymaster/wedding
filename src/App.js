import React from 'react';
import { Box } from '@chakra-ui/react';
import './App.css';
import { Navigation } from './components/Navigation/index';
import Routes from './routes';
import { Skyline } from './common/SVG/index';

const App = () => {
  const [page, setPage] = React.useState(0);

  return (
    <Box display="flex" flexDir="column">
      <Navigation setPage={setPage} page={page} />
      <Routes />
      <Skyline timing={200} />
    </Box>
  );
}

export default App;
