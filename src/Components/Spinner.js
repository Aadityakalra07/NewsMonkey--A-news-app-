import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center py-4'>
        <img className='my-3' src={loading} alt="Loading" style={{ width: '50px', opacity: 0.8 }} />
      </div>
    )
  }
}

export default Spinner
