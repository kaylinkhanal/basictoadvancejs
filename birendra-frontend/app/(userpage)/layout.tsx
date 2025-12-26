import ThinBar from '@/components/thin-bar/page'

const UserPageLayout = ({children}) => {
  return (
     <div>
    <div className=' flex h-screen'>
        <ThinBar/>
        {children}

    </div>
    </div>
  )
}

export default UserPageLayout