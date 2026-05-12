import Message from './components/Message';

function App() {
  return (
    <div className="min-h-screen bg-black text-white items-center justify-center flex">
      <div>
        <h1 className="text-5xl font-bold text-blue-400">
          Tailwind Works
        </h1>
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          <Message />
        </div>
      </div>
    </div>
  )
}

export default App;