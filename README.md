# react-small-label

## Features

- React components to create labels in small font(eg.less than 12px).

## Installation

```bash
npm install react-small-label --save
```
    
## Usage

```js
import SmallLabel from 'react-small-label';

ReactDOM.render(<SmallLabel text="Test Content" fontSize="6px" />, container);
```

## API

Prop | Type | Description | Default
:----|:----:|:------|:-----:
| className | string | custom class ||
| style | object | custom style||
| fontSize | string | custom font size | `'14px'` |
| fontFamily | string | custom font family | `'sans-serif'` |
| fontColor | string | custom font color | `'#000000'` |
| text | string | label content ||
| width | number | custom width of label ||
| height | number | custom height of label ||
