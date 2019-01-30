import React from 'react'
import {Button, PageHeader, Table} from 'react-bootstrap'
import Tone from 'tone'

class MetronomeCalc extends React.Component {
  constructor() {
    super()

    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.setup = this.setup.bind(this)
    this.reset = this.reset.bind(this)

    this.state = {
      elapsedTime: 0,
      keyPresses: 0,
      resetStart: 0,
      now: 0
    }
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress, false)
    this.setState({elapsedTime: 0})
    this.props.history.push('/MetronomeCalc')
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress)
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps)
    if (prevProps.match.params.path !== this.props.match.params.path) {
      this.setState(() => ({
        elapsedTime: 0,
        keyPresses: 0,
        resetStart: 0
      }))
    }
  }

  setup() {
    Tone.Transport.start()
    this.setState(() => ({
      resetStart: 1,
      now: Tone.now()
    }))
    console.log(this.state.now)
  }

  reset() {
    this.setState(() => ({
      keyPresses: 0,
      resetStart: 1,
      now: 0
    }))
    // alert('waiting on that start button!')
  }

  handleKeyPress(e) {
    e.preventDefault()
    if (e.keyCode === 32) {
      this.setState(state => ({
        elapsedTime: Tone.Transport.seconds,
        keyPresses: state.keyPresses + 1
      }))
      Tone.Transport.stop().start()
    }
  }

  render() {
    // let audioContextClock = Tone.now().toFixed(2)
    let transportClock = Tone.Transport.seconds.toFixed(2)
    let elapsedTimeDisplay = this.state.elapsedTime.toFixed(2)
    let BPM = (60 / this.state.elapsedTime).toFixed(0)

    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'}
    return (
      <div className="center">
        <PageHeader>
          BPM Calculator<br />
        </PageHeader>
        <h5>
          Simply click start to activate the tracker, and tap your space bar to
          the beat!
        </h5>
        <Table striped bordered condensed hover>
          <tbody>
            {/* <tr>
              <td>audioContextClock</td>
              <td>{this.state.now}</td>
            </tr>
            <tr>
              <td>transportClock</td>
              <td>{transportClock}</td>
            </tr>
            <tr>
              <td>elapsedTimeDisplay</td>
              <td>{elapsedTimeDisplay}</td>
            </tr>
            <tr>
              <td>Key Presses</td>
              <td>{this.state.keyPresses}</td>
            </tr> */}
            <tr>
              <td>
                <strong>BPM</strong>
              </td>
              <td>
                <strong>{BPM}</strong>
              </td>
            </tr>
          </tbody>
        </Table>
        <hr />
        <div className="well" style={wellStyles}>
          <Button onClick={this.setup} bsStyle="primary" bsSize="large" block>
            Start
          </Button>
          <Button onClick={this.reset} bsSize="large" block>
            Reset
          </Button>
        </div>
      </div>
    )
  }
}

export default MetronomeCalc
