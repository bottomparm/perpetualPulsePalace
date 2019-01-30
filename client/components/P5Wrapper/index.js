import React, {Component} from 'react'
import P5Wrapper from 'react-p5-wrapper'
import DrumSynth from './DrumSynth'
import p5 from 'p5'

export default class DrumSynthWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sketch: DrumSynth
    }
    // this.width = 0;
    // this.height = 0;
    // this.beatLength = 16;
    // this.cellWidth = this.width / this.beatLength
  }

  setup() {
    //   console.log('setup')
    //   console.log(this.props)
    // this.width = width
    // this.height = height
    // let hh = loadSound('drumSamples/hh_sample.mp3', () => {})
    // let clap = loadSound('drumSamples/clap_sample.mp3', () => {})
    // let bass = loadSound('drumSamples/bass_sample.mp3', () => {})
    // let hPat = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    // let cPat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // let bPat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // let sPat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    // let hPhrase = new p5.Phrase(
    //   'hh',
    //   time => {
    //     hh.play(time)
    //   },
    //   hPat
    // )
    // let cPhrase = new p5.Phrase(
    //   'clap',
    //   time => {
    //     clap.play(time)
    //   },
    //   cPat
    // )
    // let bPhrase = new p5.Phrase(
    //   'bass',
    //   time => {
    //     bass.play(time)
    //   },
    //   bPat
    // )
    // let drums = new p5.Part()
    // drums.addPhrase(hPhrase)
    // drums.addPhrase(cPhrase)
    // drums.addPhrase(bPhrase)
    // // drums.addPhrase('seq', sequence, sPat)
    // let bpmCTRL = createSlider(30, 200, 80, 1)
    // bpmCTRL.position(10, 70)
    // bpmCTRL.input(() => {
    //   drums.setBPM(bpmCTRL.value())
    // })
    // drums.setBPM('80')
    // this.drawMatrix()
  }

  render() {
    return (
      <div>
        <P5Wrapper sketch={this.state.sketch} />
      </div>
    )
  }
}
