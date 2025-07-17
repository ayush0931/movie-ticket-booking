const BlurCircle = ({top = "Auto", right = "Auto", left = "Auto",  bottom = "Auto",}) => {
  return (
    <div className="absolute -z-50 h-58 w-58 aspect-square rounded-full bg-primary/30
    blur-3xl" 
    style={{top:top, right:right, left:left, bottom:bottom }}>
      
    </div>
  )
}

export default BlurCircle
