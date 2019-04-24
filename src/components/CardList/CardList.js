import React, { useRef } from 'react';
import './CardList.scss';
import Card from 'components/Card';
import BottomBar from 'components/BottomBar';

import * as Actions from 'stores/modules/user';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from 'components/Loading';

// import { requestApiData, deleteData } from "actions";


class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }
  del = () => {
    this.props.Actions.deleteData();
  }
  componentDidUpdate() {
    if (this.props.data.length === 0) {
      this.props.Actions.requestApiData();
    }
  }
  componentDidMount() {
    this.props.Actions.requestApiData();
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
        
        {this.props.isLoading ? <Loading /> : <BottomBar like={this.like} dislike={this.dislike} superlike={this.superlike}/>}
      </>
    )
  }

}

export default connect(
  (state) => ({
    data: state.user.data,
    isLoading: state.user.isLoading,
  }),
  (dispatch) => ({
    Actions: bindActionCreators(Actions, dispatch)
  })
)(CardList);