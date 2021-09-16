# DKy Simple Carousel

> dky-simple-carousel

[![NPM](https://img.shields.io/npm/v/simple-carousel.svg)](https://www.npmjs.com/package/simple-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save dky-simple-carousel
```

## Usage

```jsx
import React, { Component } from 'react'

import { SimpleCarousel } from 'dky-simple-carousel'
import 'dky-simple-carousel/dist/index.css'

class Example extends Component {
  render() {
    return (
      <div className="slideContainer" style={{}}>
        <SimpleCarousel>
          <div>Test 1</div>
          <div>Test 2</div>
          <div>Test 3</div>
          <div>Test 4</div>
        </SimpleCarousel>
      </div>
    )
  }
}
```

## License

MIT © [Dekartmc](https://github.com/Dekartmc)
