import React from 'react';
import PropTypes from 'prop-types';

const defaultFontSize = '14px';
const defaultFontFamily = 'sans-serif';
const defaultFontColor = '#000000';

/**
 * SmallLabel
 * @author terencewu
 */
export default class SmallLabel extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    fontSize: PropTypes.string,
    fontFamily: PropTypes.string,
    fontColor: PropTypes.string,
    text: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  };

  static defaultProps = {
    fontSize: defaultFontSize,
    fontFamily: defaultFontFamily,
    fontColor: defaultFontColor,
    text: ''
  };

  constructor(props) {
    super(props);
    this.canvasId = this.randomNum(10);
  }

  componentDidMount() {
    this.drawText(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.drawText(nextProps);
  }

  render() {
    const { className, style } = this.props;
    return (<canvas id={this.canvasId} className={className} style={style} />);
  }

  drawText(props) {
    const { text, width, height } = props;
    const fontSize = props.fontSize || defaultFontSize;
    const fontFamily = props.fontFamily || defaultFontFamily;
    const fontColor = props.fontColor || defaultFontColor;
    const canvas = document.getElementById(this.canvasId);
    const ctx = canvas.getContext('2d');
    ctx.font = `${fontSize} ${fontFamily}`;
    const fontSizeInPx = parseInt(ctx.font, 10);
    const tm = ctx.measureText(text);
    canvas.width = width || Math.round(tm.width * 1.01);
    canvas.height = height || Math.round(fontSizeInPx * 1.1);
    ctx.font = `${fontSize} ${fontFamily}`;
    ctx.fillStyle = fontColor;
    ctx.fillText(text, 0, Math.round(fontSizeInPx * 0.85));
  }

  randomNum(n) {
    let t = '';
    for (let i = 0; i < n; i++) {
      t += Math.floor(Math.random() * 10);
    }
    return t;
  }
}
