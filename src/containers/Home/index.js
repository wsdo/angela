import React, { Component } from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';

class Home extends Component {

  getList() {
    const { list } = this.props;
    return list.map(item => <div key={item.id}>{item.title}</div>)
  }


  render() {
    return (
      <div>
        <Header />
        {this.getList()}
        <button onClick={() => { alert('click1') }}>
          click
				</button>
      </div>
    )
  }

  componentDidMount() {
    this.props.getHomeList();
  }
}

const mapStateToProps = state => ({
  list: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
