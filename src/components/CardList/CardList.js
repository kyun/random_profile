import React from 'react';
import './CardList.scss';
import Card from 'components/Card';
import Sticker from 'components/Sticker';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData, deleteData } from "actions";

let data = [
  {
    nat: 'no',
    name: 'KIM',
    age: '24',
    url: 'https://randomuser.me/api/portraits/men/1.jpg',
  }, {
    nat: 'us',
    name: 'MARK',
    age: '25',
    url: 'https://randomuser.me/api/portraits/men/2.jpg',
  }, {
    nat: 'de',
    name: 'JOHN',
    age: '21',
    url: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
]

class CardList extends React.Component {
  constructor(props) {
    super(props);
  }

  del = () => {
    this.props.deleteData();
  }
  componentDidUpdate() {
    console.log('DIDUPDATE')
    console.log(this.props.data);
    if (this.props.data.length === 0) {
      this.props.requestApiData();
    }
  }
  componentDidMount() {
    this.props.requestApiData();

  }
  render() {
    //let res = this.props.data || [];

    return (
      <div className="CardList">
        <Sticker />
        {this.props.data.map((i, j) => {
          return <Card key={j} {...i} del={this.del} last={this.props.data.length-1 === j ? true : false} />
        })}
      </div>
    )
  }

}

const mapStateToProps = state => { return ({ data: state.data }); }

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData, deleteData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardList);