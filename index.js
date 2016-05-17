import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import Counter from './components/counter'
import Greeter from './components/greeter'




render(
  <div>
    <Greeter name='Rahmona'/>
  </div>, document.querySelector('main'))
