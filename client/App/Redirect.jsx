import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../state/actions/actionCreators';


const mapDispatchToProps = (dispatch) => ({
  notify: (res) => dispatch(actions.getNotifications(res))
})

class Redirect extends React.Component {
  componentDidMount(){
    console.log({location: this.props.location});
    console.log({url: `/auth/github/${this.props.location.search}`});
    fetch(`/auth/github/${this.props.location.search}`).then((res) => {
      return res.json()
    }).then((res) => {
      this.props.notify(res);
      this.props.history.push('/repos')
    }).catch((error) => {
      console.log({error});
    })
  }
  render() {
    return (
      <div>
        <p>
          redirect page
          {this.props.match.params.token}
        </p>
      </div>
    );
  }
}

export default connect(()=>{}, mapDispatchToProps)(withRouter(Redirect));
