# DKy Simple Carousel

> dky-simple-carousel

[![npm version](https://img.shields.io/npm/v/dky-simple-carousel.svg?style=flat-square)](https://www.npmjs.com/package/dky-simple-carousel) [![License: MIT](https://img.shields.io/npm/l/dky-simple-carousel?style=flat-square)](https://opensource.org/licenses/MIT)

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
      <div>
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
