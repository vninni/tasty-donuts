import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class TastyDonut extends Component {
  static propTypes = {
    stepNumber: PropTypes.number,
    gap: PropTypes.number,
    completed: PropTypes.number
  }

  render() {
    const { stepNumber, gap, completed } = this.props
    const step = 360 / stepNumber
    const magicNumber =
      stepNumber > 2 && stepNumber < 9
        ? 0.5 * (1 - Math.tan(1.5708 - 6.28319 / stepNumber)) * 100
        : 0.5 * (1 + Math.tan(6.28319 / stepNumber)) * 100

    const stepStyleGreater = `polygon(
          calc(50% + var(--g)/2) 50%, 
          calc(50% + var(--g)/2) 0%, 
          calc(${magicNumber}% - var(--g)/2) 0%,
          50% calc(50% - var(--g)/2))`

    const stepStyleLower = `polygon(
          calc(50% + var(--g)/2) 50%, 
          calc(50% + var(--g)/2) 0%, 
          100% 0%,
          100% calc(${magicNumber}% - var(--g)/2),
          50% calc(50% - var(--g)/2))`

    return (
      <div className={styles.donut} style={{ '--g': `${gap}px` }}>
        {Array.from(Array(stepNumber), (e, i) => {
          return (
            <div
              key={i}
              style={{
                '--d': `${step + step * i}deg`,
                clipPath:
                  stepNumber > 2 && stepNumber < 9
                    ? stepStyleLower
                    : stepStyleGreater
              }}
              className={
                completed > i + 1 || (completed >= 1 && i + 1 === stepNumber)
                  ? ''
                  : styles.emptystate
              }
            />
          )
        })}
      </div>
    )
  }
}
