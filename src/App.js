import React from 'react';
import CardList from 'components/CardList';
import BottomBar from 'components/BottomBar';

class App extends React.Component {

  render() {
    return (
      <main>
        <CardList />
        {/* <BottomBar /> */}
      </main>
    )
  }
}

export default App;