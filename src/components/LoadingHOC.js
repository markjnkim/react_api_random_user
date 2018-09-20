import React, { Component } from 'react';

const LoadingHOC = WrappedState => {
  return(
    class LoadingHoc extends Component{
      render() {
        return this.props.usernames.length === 0 ? <img className="isLoading" src={spinner}/> : <WrappedState {...this.props}/>
      }
    }
  )
}
 
export default LoadingHOC