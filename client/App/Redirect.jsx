import React from 'react';
import { withRouter } from 'react-router-dom';

class Redirect extends React.Component {
  componentDidMount(){
    console.log({location: this.props.location});
    console.log({url: `/auth/github/${this.props.location.search}`});
    fetch(`/auth/github/${this.props.location.search}`).then((res) => {
      return res.json()
    }).then((res) => {
      console.log({res});
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

export default withRouter(Redirect);
