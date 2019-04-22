import React, { useRef } from 'react';
import './CardList.scss';
import Card from 'components/Card';
import BottomBar from 'components/BottomBar';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData, deleteData } from "actions";


class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }
  del = () => {
    this.props.deleteData();
  }
  componentDidUpdate() {
    if (this.props.data.length === 0) {
      this.props.requestApiData();
    }
  }
  componentDidMount() {
    console.log(this.child);
    this.props.requestApiData();
  }
  superlike = () => {
    if(this.child.current){
    this.child.current.superlike();
    }
  }
  like = () => {
    if(this.child.current){
      this.child.current.like();
    }
  }
  dislike = () => {
    if(this.child.current){
    this.child.current.dislike();
    }
  }


  render() {
    return (
      <>
        <div className="CardList">
          {this.props.data.map((i, j) => {
            return <Card ref={this.child} key={j}  {...i} del={this.del} last={this.props.data.length - 1 === j ? true : false} />
          })}
        </div>
        <BottomBar like={this.like} dislike={this.dislike} superlike={this.superlike}/>
      </>
    )
  }

}

const mapStateToProps = state => { return ({ data: state.data }); }

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData, deleteData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardList);