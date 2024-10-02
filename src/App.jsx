import './App.css'
import CustomAudioRecording from './components/CustomAudioRecoding'
import CustomVideo from './components/CustomVideo'

function App() {

  return (
    <div className='app-container'>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <CustomVideo />
      <CustomAudioRecording />
    </div>
  )
}

export default App
