import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../state/actions/actionCreators'

const mapStateToProps = (store) => ({
  ...store
})

const mapDispatchToProps = (dispatch) => ({

})

class Test extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Test);