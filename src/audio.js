import React, { Component } from "react";
import { fadeIn } from "./fade";

export default class extends Component {
  presenterMode() {
    return /presenter/.test(window.location.hash);
  }

  componentDidMount() {
    if (!this.presenterMode()) {
      this.song = new Audio(this.props.file);

      if (this.props.startAt) {
        this.song.currentTime = this.props.startAt;
      }

      this.song.play();

      if (this.props.fadeIn) {
        this.fadeIn = fadeIn(this.song);
      }
    }
  }

  componentWillUnmount() {
    if (!this.presenterMode()) {
      if (this.fadeIn) {
        this.fadeIn.cancel();
      }

      const fade = setInterval(() => {
        if (this.song.volume === 0.0) {
          clearInterval(fade);
          this.song.pause();
        } else {
          this.song.volume = Math.max(0.0, this.song.volume - 0.1);
        }
      }, 200);
    }
  }

  render() {
    return false;
  }
}
