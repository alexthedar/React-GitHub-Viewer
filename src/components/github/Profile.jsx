import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Profile extends Component{

  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.userData.name}</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-4">
              <img src={this.props.userData.avatar_url} className="thumbnail" style={{width: "100%"}} />
            </div>
            <div className="col-md-8"></div>
          </div>
        </div>
      </div>
    )
  }
}



export default Profile
