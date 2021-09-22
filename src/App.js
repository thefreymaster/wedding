import React from 'react';
import { Box } from '@chakra-ui/react';
import ReactPageScroller from 'react-page-scroller';
import './App.css';
import { Navigation } from './components/Navigation/index';
import { Welcome } from './components/Welcome/index';
import { Date } from './components/Date/index';
import { Location } from './components/Location/index';
import { RSVP } from './components/RSVP';

const App = () => {
  const [page, setPage] = React.useState(0);
  // React.useLayoutEffect(() => {
  //   setTimeout(() => {
  //     setPage(1)
  //   }, 4000);
  // }, [])
  return (
    <Box display="flex" flexDir="row" justifyContent="flex-end">
      <Navigation />
      <ReactPageScroller
        pageOnChange={(pageNumber) => { setPage(pageNumber) }}
        customPageNumber={page}
        containerWidth={window.innerWidth}
      >
        <Welcome page={page} />
        <Date page={page} />
        <Location page={page} />
        <RSVP page={page} />
      </ReactPageScroller>
    </Box>
  );
}

export default App;
