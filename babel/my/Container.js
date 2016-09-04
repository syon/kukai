import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import HtmlToReact from 'html-to-react';
const parser = new HtmlToReact.Parser(React);

const propTypes = {
  width: React.PropTypes.number,
};

class Container extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.drawSvg = this.drawSvg.bind(this);

    this.state = {
      g: '<div></div>',
    };
  }

  componentDidMount() {
    this.drawSvg('Oradano-mincho-GSRR', 'Book', 'normal', 'normal', 'Oradano明朝フォント');
    // this.drawSvg('Koku Mincho Regular', 'Regular', 'normal', 'normal', '刻明朝フォント');
    // this.drawSvg('02UtsukushiMincho', 'Regular', 'normal', 'normal', 'うつくし明朝体');
    // this.drawSvg('HarenosoraMincho', 'Regular', 'normal', 'normal', 'はれのそら明朝');
    // this.drawSvg('HannariMincho', 'Regular', 'normal', 'normal', 'はんなり明朝');
    // this.drawSvg('Honoka Mincho', 'Regular', 'normal', 'normal', 'ほのか明朝');
    // this.drawSvg('Dejima', 'mincho', 'normal', 'normal', '出島明朝フォント');
    // this.drawSvg('Aozora Mincho', 'Regular', 'normal', 'normal', 'あおぞら明朝 Regular');
    // this.drawSvg('Aozora Mincho', 'Bold', 'normal', 'bold', 'あおぞら明朝 Bold');
  }

  drawSvg(tn, ts, fs, fw, txt) {
    axios.get('/svg', { params: {
      ttfName: tn,
      ttfStyle: ts,
      fontStyle: fs, // italic, oblique
      fontWeight: fw, // 100 - 900, bold, etc.
      textBody: txt,
    } })
      .then((res) => {
        const g = $(res.data).find('g');
        this.setState({ g: g.prop('outerHTML') });
      })
      .catch((res) => {
        console.error(res);
      });
  }

  render() {
    let svgInner = '';
    if (this.state.g) {
      svgInner = parser.parse(this.state.g);
    }
    return (
      <div>
        <h1>Container</h1>
        <h5>width: {this.props.width} px</h5>
        <svg x="0px" y="0px" width="400" height="60" viewBox="0 0 400 40">
          {svgInner}
        </svg>
      </div>
    );
  }
}

Container.propTypes = propTypes;

export default Container;
