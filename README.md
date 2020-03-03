# tasty-donuts

> 

[![NPM](https://img.shields.io/npm/v/tasty-donuts.svg)](https://www.npmjs.com/package/tasty-donuts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo Page

You can find a demo [Here](https://yuledev.github.io/tasty-donuts/) 

## Install

```bash
npm install --save tasty-donuts
```

## Usage

```jsx
import React, { Component } from 'react'

import TastyDonut from 'tasty-donuts'

class Example extends Component {
  render () {
    return (
      <TastyDonut
          stepNumber={10}
          gap={5}
          completed={7}
          type='percentage'
        />
    )
  }
}
```

![Demo Donut](../assets/donut.png?raw=true)

## License

MIT © [](https://github.com/)
