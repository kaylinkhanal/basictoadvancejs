

import { Sidebar } from 'lucide-react'
import { Children } from 'react'


const UserPageLayout = ( {Children}) => {
  return (
    <div>
    <div className=' flex h-screen'>
      <div>

      </div>

            {Children}
    </div>

    </div>
  )
}

export default UserPageLayout