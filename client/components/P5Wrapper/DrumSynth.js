// import p5 from 'p5'
// import 'p5/lib/addons/p5.sound'

// let hh, clap, bass // INSTRUMENT. will serve as a container that holds a sound source
// let hPat, cPat, bPat // INSTRUMENT PATTERN. it will be an array of numbers that we can manipulate
// let hPhrase, cPhrase, bPhrase // INSTRUMENT PHRASE. defines how the instrument pattern is interpreted
// let drums // PART. we will attach the phrase to the part, which will serve as transport to drive phrase
// let bpmCTRL
// let cnv
// let sPat
// let width, height
// let beatLength = 16
// let cellWidth = width / beatLength

// export default function DrumSynth(p) {
//   p.preload = function() {
//     hh = loadSound('drumSamples/hh_sample.mp3')
//   }

//   p.setup = function() {
//     console.log('setup')

//     p.createCanvas(500, 500)
//     width = p.width
//     height = p.height

    // clap = loadSound('drumSamples/clap_sample.mp3', () => {})
    // bass = loadSound('drumSamples/bass_sample.mp3', () => {})

    // hPat = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    // cPat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // bPat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // sPat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

    // hPhrase = new p5.Phrase(
    //   'hh',
    //   time => {
    //     hh.play(time)
    //   },
    //   hPat
    // )
    // cPhrase = new p5.Phrase(
    //   'clap',
    //   time => {
    //     clap.play(time)
    //   },
    //   cPat
    // )
    // bPhrase = new p5.Phrase(
    //   'bass',
    //   time => {
    //     bass.play(time)
    //   },
    //   bPat
    // )

    // drums = new p5.Part()

    // drums.addPhrase(hPhrase)
    // drums.addPhrase(cPhrase)
    // drums.addPhrase(bPhrase)
    // drums.addPhrase('seq', sequence, sPat)

    // bpmCTRL = p.createSlider(30, 200, 80, 1)
    // bpmCTRL.position(10, 70)
    // bpmCTRL.input(() => {
    //   drums.setBPM(bpmCTRL.value())
    // })
    // drums.setBPM('80')

//     p.drawMatrix()
//   }

//   p.draw = function() {
//     p.background('orange')
//     p.stroke('white')
//     p.strokeWeight(2.25)
//     p.fill('black')
//   }

//   p.drawMatrix = function() {
//     console.log('draw matrix')
//     p.stroke('white')
//     p.strokeWeight(2.25)
//     p.fill('black')
//     for (let i = 0; i < beatLength + 1; i++) {
//       // startx, starty, endx, endy
//       p.line(i * cellWidth, 0, i * cellWidth, height)
//     }

//     for (let i = 0; i < 4; i++) {
//       p.line(0, i * height / 3, width, i * height / 3)
//     }

//     p.noStroke()

//     for (let i = 0; i < beatLength; i++) {
//       if (hPat[i] === 1) {
//         p.ellipse(i * cellWidth + 0.5 * cellWidth, height / 6, 10)
//       }
//       if (cPat[i] === 1) {
//         p.ellipse(i * cellWidth + 0.5 * cellWidth, height / 2, 10)
//       }
//       if (bPat[i] === 1) {
//         p.ellipse(i * cellWidth + 0.5 * cellWidth, height * 5 / 6, 10)
//       }
//     }
//   }
// }

// let hh, clap, bass // INSTRUMENT. will serve as a container that holds a sound source
//   let hPat, cPat, bPat // INSTRUMENT PATTERN. it will be an array of numbers that we can manipulate
//   let hPhrase, cPhrase, bPhrase // INSTRUMENT PHRASE. defines how the instrument pattern is interpreted
//   let drums // PART. we will attach the phrase to the part, which will serve as transport to drive phrase
//   let bpmCTRL
//   let beatLength
//   let cellWidth
//   let cnv
//   let sPat

//   p.setup = function() {
//     cnv = p.createCanvas(320, 60)
//     cnv.mousePressed(p.canvasPressed)

//     p.beatLength = 16
//     p.cellWidth = p.width / p.beatLength

//     p.hh = p.loadSound('drumSamples/hh_sample.mp3', () => {})
//     p.clap = p.loadSound('drumSamples/clap_sample.mp3', () => {})
//     p.bass = p.loadSound('drumSamples/bass_sample.mp3', () => {})

//     p.hPat = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
//     p.cPat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     p.bPat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     p.sPat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

//     p.hPhrase = new p5.Phrase(
//       'hh',
//       time => {
//         hh.play(time)
//       },
//       p.hPat
//     )
//     p.cPhrase = new p5.Phrase(
//       'clap',
//       time => {
//         clap.play(time)
//       },
//       p.cPat
//     )
//     p.bPhrase = new p5.Phrase(
//       'bass',
//       time => {
//         bass.play(time)
//       },
//       p.bPat
//     )

//     p.drums = new p5.Part()

//     p.drums.addPhrase(p.hPhrase)
//     p.drums.addPhrase(p.cPhrase)
//     p.drums.addPhrase(p.bPhrase)
//     p.drums.addPhrase('seq', p.sequence, p.sPat)

//     p.bpmCTRL = p.createSlider(30, 200, 80, 1)
//     p.bpmCTRL.position(10, 70)
//     p.bpmCTRL.input(() => {
//       p.drums.setBPM(p.bpmCTRL.value())
//     })
//     p.drums.setBPM('80')

//     p.drawMatrix()
//   }

//   p.keyPressed = function() {
//     if (key === ' ') {
//       if (hh.isLoaded() && clap.isLoaded() && bass.isLoaded()) {
//         if (!p.drums.isPlaying) {
//           p.drums.metro.metroTicks = 0 // restarts playhead at beginning [0]
//           p.drums.loop()
//         } else {
//           p.drums.stop()
//         }
//       }
//     }
//   }

//   p.canvasPressed = function() {
//     let rowClicked = p.floor(3 * p.mouseY / p.height)
//     let indexClicked = p.floor(16 * p.mouseX / p.width)
//     if (rowClicked === 0) {
//       p.hPat[indexClicked] = p.invert(p.hPat[indexClicked])
//     } else if (rowClicked === 1) {
//       p.cPat[indexClicked] = p.invert(p.cPat[indexClicked])
//     } else if (rowClicked === 2) {
//       p.bPat[indexClicked] = p.invert(p.bPat[indexClicked])
//     }

//     p.drawMatrix()
//   }

//   p.drawMatrix = function() {
//     p.background('orange')
//     p.stroke('white')
//     p.strokeWeight(2.25)
//     p.fill('black')
//     for (let i = 0; i < p.beatLength + 1; i++) {
//       // startx, starty, endx, endy
//       p.line(i * p.cellWidth, 0, i * p.cellWidth, p.height)
//     }

//     for (let i = 0; i < 4; i++) {
//       p.line(0, i * p.height / 3, p.width, i * p.height / 3)
//     }

//     p.noStroke()

//     for (let i = 0; i < p.beatLength; i++) {
//       if (p.hPat[i] === 1) {
//         p.ellipse(i * p.cellWidth + 0.5 * p.cellWidth, p.height / 6, 10)
//       }
//       if (p.cPat[i] === 1) {
//         p.ellipse(i * p.cellWidth + 0.5 * p.cellWidth, p.height / 2, 10)
//       }
//       if (bPat[i] === 1) {
//         p.ellipse(i * p.cellWidth + 0.5 * p.cellWidth, p.height * 5 / 6, 10)
//       }
//     }
//   }

//   p.invert = function(bitInput) {
//     return bitInput ? 0 : 1
//   }

//   p.sequence = function(time, beatIndex) {
//     setTimeout(() => {
//       // syncs up the timing so the beats and the playhead are in sync
//       p.drawMatrix()
//       p.drawPlayhead(beatIndex)
//     }, time * 1000)
//   }

//   p.drawPlayhead = function(beatIndex) {
//     p.stroke('blue')
//     p.fill(255, 0, 0, 20)
//     p.rect((beatIndex - 1) * p.cellWidth, 0, p.cellWidth, p.height)
//   }
