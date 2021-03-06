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

    this.drawSvg('Source Han Serif JP ExtraLight', 'Regular', 'normal', 'normal', txt);
    this.drawSvg('Source Han Serif JP Light', 'Regular', 'normal', 'normal', txt);
    this.drawSvg('Source Han Serif JP Regular', 'Regular', 'normal', 'normal', txt);
    this.drawSvg('Source Han Serif JP Medium', 'Regular', 'normal', 'normal', txt);
    this.drawSvg('Source Han Serif JP SemiBold', 'Regular', 'normal', 'normal', txt);
    this.drawSvg('Source Han Serif JP Bold', 'Regular', 'normal', 'normal', txt);
    this.drawSvg('Source Han Serif JP Heavy', 'Regular', 'normal', 'normal', txt);

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
      fontStyle: fs, // normal, italic, oblique
      fontWeight: fw, // 100 - 900, bold, etc.
      textBody: txt,
    } })
      .then((res) => {
        const g = $(res.data).find('g');
        const list = this.state.list;
        list.push({
          key: tn + ts,
          g: g.prop('outerHTML'),
          info: { tn, ts, fs, fw },
        });
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
        <div>
          <div className="info">
            <span>
              <code>{l.info.tn}</code>
              <code>({l.info.ts})</code>
            </span>
          </div>
          <svg
            key={l.key}
            x="0px"
            y="0px"
          >
            {svgInner}
          </svg>
        </div>
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
