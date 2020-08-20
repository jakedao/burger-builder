import React, {Component} from 'react';

import { Modal } from '../components';

const withErrorHandler = (WrappedComponent, axios) => {
  class HOC extends Component {

    state = {
      errorMsg: null,
    }

    componentDidMount() {
      
      axios.interceptors.request.use(req => req, error => {
        this.setState({errorMsg: error})
      })

      axios.interceptors.response.use(res => res, error => {
        this.setState({errorMsg: error})
      })
    }

    handlerErrorCancel = () => {
      this.setState({
        errorMsg: null
      })
    }

    render() {
      return (
        <>
          <Modal 
            show={this.state.errorMsg}
            onModalCancelling={this.handlerErrorCancel} 
          >
            {this.state.errorMsg ? this.state.errorMsg.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </> 
      )}
    }
  return HOC;
}

export default withErrorHandler;