import React from 'react';
import _ from 'lodash';
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
      list: [],
    };
  }

  componentDidMount() {
    const txt = 'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら';
    this.drawSvg('Oradano-mincho-GSRR', 'Book', 'normal', 'normal', txt);
    this.drawSvg('Koku Mincho Regular', 'Regular', 'normal', 'normal', txt);
    this.drawSvg('02UtsukushiMincho', 'Regular', 'normal', 'normal', txt);
    this.drawSvg('HarenosoraMincho', 'Regular', 'normal', 'normal', txt);
    this.drawSvg('HannariMincho', 'Regular', 'normal', 'normal', txt);
    this.drawSvg('Honoka Mincho', 'Regular', 'normal', 'normal', txt);
    this.drawSvg('Dejima', 'mincho', 'normal', 'normal', txt);
    this.drawSvg('Aozora Mincho', 'Regular', 'normal', 'normal', txt);
    this.drawSvg('Aozora Mincho', 'Bold', 'normal', 'bold', txt);
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
        const list = this.state.list;
        list.push({ key: tn + ts, g: g.prop('outerHTML') });
        this.setState({ list });
      })
      .catch((res) => {
        console.error(res);
      });
  }

  render() {
    const nodes = [];
    _.each(this.state.list, (l) => {
      let svgInner = '';
      if (l.g) {
        svgInner = parser.parse(l.g);
      }
      nodes.push(
        <svg
          key={l.key}
          x="0px"
          y="0px"
        >
          {svgInner}
        </svg>
      );
    });
    return (
      <div>
        <h1>Kukai</h1>
        <div className="svgs">
          {nodes}
        </div>
      </div>
    );
  }
}

Container.propTypes = propTypes;

export default Container;
