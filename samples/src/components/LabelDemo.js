import React from 'react';
import SmallLabel from '../../../src/components/SmallLabel';
// import SmallLabel from 'react-small-label';

export default class GeometricDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontSize: '1',
      unit: 'px',
      text: '测试test t455pmiy'
    };
  }

  render() {
    const fontSizeList = Array.from({ length: 50 }).map((item, index) => (index + 1).toString());
    return (
      <div style={{ padding: 20 }}>
        <div>
          <input onChange={(e) => { this.setState({ text: e.target.value }); }} value={this.state.text} style={{ width: 300 }} />
          <select onChange={e => this.setState({ fontSize: e.target.value })} style={{ marginLeft: 10 }}>
            {fontSizeList.map(item => <option key={item} value={item}>{item}</option>)}
          </select>
          <select onChange={e => this.setState({ unit: e.target.value })} style={{ marginLeft: 10 }} >
            <option value="px">px</option>
            <option value="rem">rem</option>
          </select>
        </div>
        <SmallLabel text={this.state.text} style={{ background: 'red' }} fontSize={`${this.state.fontSize}${this.state.unit}`} />
      </div>
    );
  }
}
