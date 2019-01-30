import React from 'react'
import {Grid, Row, Col, Image, Thumbnail, Media} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Home = () => (
  <div className="home-center">
    <Media>
      <Media.Left>
        <LinkContainer to="/MetronomeCalc">
          <img width={200} height={200} src="artsy-metronome.jpg" />
        </LinkContainer>
      </Media.Left>
      <Media.Right>
        <LinkContainer to="/DrumSynth">
          <img width={200} height={200} src="artsy-drum-machine.jpg" />
        </LinkContainer>
      </Media.Right>
    </Media>
  </div>
)

export default Home
