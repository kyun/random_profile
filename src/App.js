import React from 'react';
import CardList from 'components/CardList';
import BottomBar from 'components/BottomBar';
import Loading from 'components/Loading';

class App extends React.Component {

  render() {
    return (
      <main>
        <CardList />
        {/* <BottomBar /> */}
        {/* <Loading /> */}
      </main>
    )
  }
}

export default App;