import React from 'react'
import styles from './customStyle.css'

import { ExampleComponent, SimpleCarousel } from 'simple-carousel'
import 'simple-carousel/dist/index.css'

const App = () => {
  return (
    <>
      {/* <ExampleComponent text="Create React Library Example 😄" /> */}
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
    </>
  );
}

export default App
