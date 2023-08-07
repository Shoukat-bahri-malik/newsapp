import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
         this is news components
        <NewsItem/>
      </div>
    )
  }
}

export default News
