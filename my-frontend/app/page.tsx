import { Circle, MessageCircle, Settings2 } from "lucide-react";

const chatUi = () => {

  return (
    <div className="flex h-60 justify-center m-20" >

      <div className="bg-red-200 w-10">
        <MessageCircle></MessageCircle>
        <Settings2></Settings2>
      </div>


      <div className="bg-blue-100  w-50">
        <div>
          <div className="bg-white rounded-md "><input type="text" placeholder="search chat " /></div>
          <div>
            <ul>
              <li>Ram bahadur</li>
              <li>Prakash magar</li>
              <li>Kiran khatri</li>
              <li>Bhum silwal</li>
              <li>Hari roka</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 w-100">this is not</div>
    </div>
  )
}
export default chatUi;