import React, {Component} from 'react';

import { Modal } from '../components';


/*
  Implement an HOC with Life Cycle 
*/
const withErrorHandler = (WrappedComponent, axios) => {
  class HOC extends Component {

    state = {
      errorMsg: null,
    }

    componentDidMount() {
      
      this.reqInterceptor = axios.interceptors.request.use(req => req, error => {
        this.setState({errorMsg: error})
      })

      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({errorMsg: error})
      })
    }

    /* When the error handling HOC wrapp aound other component so it needs to:
    Eject the instance which is interceptors of the wrapped compoonent attached into 
    to avoide the memory leakage.
    */
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor)
      axios.interceptors.request.eject(this.resInterceptor)
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