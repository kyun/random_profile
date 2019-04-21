import React from 'react';
import './CardList.scss';
import Card from 'components/Card';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData, deleteData } from "actions";


class CardList extends React.Component {

  del = () => {
    this.props.deleteData();
  }
  componentDidUpdate() {
    if (this.props.data.length === 0) {
      this.props.requestApiData();
    }
  }
  componentDidMount() {
    this.props.requestApiData();

  }
  render() {
    return (
      <div className="CardList">
        {/* <Sticker /> */}
        {this.props.data.map((i, j) => {
          return <Card key={j} {...i} del={this.del} last={this.props.data.length - 1 === j ? true : false} />
        })}
      </div>
    )
  }

}

const mapStateToProps = state => { return ({ data: state.data }); }

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData, deleteData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardList);