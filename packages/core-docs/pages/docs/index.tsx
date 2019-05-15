import React from 'react'
import Router from 'next/router'
import componentsNames from '../../data/componentsNames'

class IndexPage extends React.PureComponent {
  public static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: `/docs/${componentsNames[0].toLowerCase()}`
      })
      res.end()
    } else {
      Router.replace(`/docs/${componentsNames[0].toLowerCase()}`)
    }
    return {}
  }
}

export default IndexPage
