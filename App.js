import React from 'react';
import ProgressBar from './components/progressBar/ProgressBar';

const App = () => {
  return (
    <>
      <ProgressBar
        width={'0.8'}
        height={'0.02'}
        borderRadius={'0.02'}
        marginHorizontal={'0.05'}
        backgroundColor={'#fda'}
        statusBackgroundColor={'#fab'}
        position={'60'}
        duration={'110'}
      />
    </>
  );
};

export default App;
