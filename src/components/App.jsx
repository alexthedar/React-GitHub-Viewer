import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName: 'alexthedar',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }

  //get user data from github
  getUserData(){
      $.ajax({
        url: 'https://api.github.com/users/' + this.state.userName + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
        dataType: 'json',
        cache: false,
        success: function(data){
          this.setState({userData: data});
          console.log(data);
        }.bind(this),
        error: function(xhr, status, error){
          this.setState({userName: null});
          alert(error);
        }.bind(this)
      })
  }

  componentDidMount(){
    this.getUserData();
  }

  render(){
    return(
      <div>
        <Profile userData = {this.state.userData}/>
      </div>
    )
  }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string,
};

App.defaultProps = {
  clientId: '4a37b574eb57f46a4da5',
  clientSecret: 'f3ddf1429a14f1aa4720e652219195aee61dcb1e'
}

export default App
