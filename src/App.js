import React from 'react';
import { Box } from '@chakra-ui/react';
import ReactPageScroller from 'react-page-scroller';
import './App.css';
import { Navigation } from './components/Navigation/index';
import { Welcome } from './components/Welcome/index';
import { Us, WeMet, WeMoveIn, WeMove, WeEngaged } from './components/Us/index';
import { Where } from './components/Where/index';
import { RSVP } from './components/RSVP';
import { When } from './components/When/index';
import { useParams } from 'react-router-dom';
import { SCROLL_ROUTES } from './constants';
import Routes from './routes';

const App = () => {
  const [page, setPage] = React.useState(0);
  // const params = useParams();
  // console.log(params);

  // const scrollWindow = () => {
  //   debugger;
  //   window.scrollTo({
  //     top: SCROLL_ROUTES[params.route].multiplier * window.innerHeight,
  //     x: 0,
  //     behavior: 'smooth'
  //   });
  // }

  // React.useLayoutEffect(() => {
  //   scrollWindow()
  // }, [params.route]);

  return (
    <Box display="flex" flexDir="column">
      <Navigation setPage={setPage} page={page} />
      <Routes />
      {/* <Welcome page={page} />
      <WeMet page={page} />
      <WeMoveIn page={page} />
      <WeMove page={page} />
      <WeEngaged page={page} />
      <Us page={page} />
      <Where page={page} />
      <When page={page} />
      <RSVP page={page} /> */}
      {/* <ReactPageScroller
        pageOnChange={(pageNumber) => { setPage(pageNumber) }}
        customPageNumber={page}
        containerWidth={window.innerWidth}
      >
        <Welcome page={page} />
        <WeMet page={page} />
        <WeMoveIn page={page} />
        <WeMove page={page} />
        <WeEngaged page={page} />

        <Us page={page} />
        <Where page={page} />
        <When page={page} />
        <RSVP page={page} />
      </ReactPageScroller> */}
    </Box>
  );
}

export default App;
