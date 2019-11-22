import React, {Component} from 'react'
import logo from '../../assets/images/images.jpeg'
import './LogotypeComponent.css'
class LogotypeComponent extends Component {
  render () {
    return (
      <div>
        <img src={logo} alt={'logo'}/>
      </div>
    )
  }
}
export default LogotypeComponent
