import React from 'react'
import Chat from './chat/page'
import Archive from './archive/page'
import Profile from './profiles/page'
import Settings from './settings/page'

const Layout = ({children}) => {
    return (
        <div>
            sidebar
          {children}
        </div>
    )
}

export default Layout