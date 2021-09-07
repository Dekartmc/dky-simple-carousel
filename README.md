# Simple Carousel

> simple-carousel

[![NPM](https://img.shields.io/npm/v/simple-carousel.svg)](https://www.npmjs.com/package/simple-carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-carousel
```

## Usage

```jsx
import React, { Component } from 'react'

import { SimpleCarousel } from 'simple-carousel'
import 'simple-carousel/dist/index.css'

class Example extends Component {
  render() {
    return (
      <div className="slideContainer" style={{}}>
        <SimpleCarousel>
          <div className="slide">
            <h1>Title</h1>
            <h2>Sub-Title</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
              specimen book.
            </p>
          </div>
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
