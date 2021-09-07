/* eslint-disable prettier/prettier */
import React, { useState, useRef, useEffect } from 'react'
import styles from './styles.module.css'

import Section from './components/Section'

/* Example Component */
export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

/* Main Component */
export const SimpleCarousel = ({ children, className, style }) => {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  const arrayChildren = React.Children.toArray(children)
  console.log(arrayChildren)

  const delay = 2500

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === arrayChildren.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    )

    return () => {
      resetTimeout()
    }
  }, [index])

  return (
    <div className={styles.slideshow}>
      <div
        className={styles.slideshowSlider}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {arrayChildren.map((item, index) => (
          <div className={styles.slide} key={index}>
            <Section ClassName={item.props.className} Style={item.props.style}>
              {item.props.children}
            </Section>
          </div>
        ))}
      </div>

      <div className={styles.slideshowDots}>
        {arrayChildren.map((_, idx) => (
          // eslint-disable-next-line react/self-closing-comp
          <div
            key={idx}
            className={`${styles.slideshowDot} ${index === idx ? ' active' : ''}`}
            onClick={() => { setIndex(idx) }}
          ></div>
        ))}
      </div>
    </div>
  )
}
