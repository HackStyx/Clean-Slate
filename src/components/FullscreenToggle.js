import { Maximize2, Minimize2 } from 'lucide-react'

function FullscreenToggle({ isFullscreen, setIsFullscreen }) {
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  return (
    <div className="cursor-pointer" onClick={toggleFullscreen}>
      {isFullscreen ? <Minimize2 /> : <Maximize2 />}
    </div>
  )
}

export default FullscreenToggle