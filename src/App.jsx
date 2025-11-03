import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"

const App = () => {
  return (
    <div className="w-[90vw] h-[90vh] gap-5 flex rounded-xl border border-white/10 bg-[rgba(17,25,40,0.75)] backdrop-blur-[19px]">
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App