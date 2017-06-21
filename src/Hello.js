import React from 'react'
import Loadable from 'react-loadable'

const Header = Loadable({
  loader: () => import('./Header'),
  loading: () => null
})

function Hello () {
  return (
    <div>
      <Header />
      <h1>Hello from React </h1>
    </div>
  )
}

export default Hello
