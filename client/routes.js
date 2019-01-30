import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Home, MetronomeCalc, DrumSynth} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/MetronomeCalc" component={MetronomeCalc} />
        <Route path="/DrumSynth" component={DrumSynth} />
        <Route path="/" component={Home} />
      </Switch>
    )
  }
}

export default Routes
