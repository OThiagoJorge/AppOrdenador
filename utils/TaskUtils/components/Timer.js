import { useEffect, useState } from "react"
import { View, Text, Pressable } from "react-native"

const InitialTime = 15 * 60

export const Timer = () => {

  const [time, setTime] = useState(InitialTime)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing) return

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          setPlaying(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [playing])

  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0")
    const sec = String(seconds % 60).padStart(2, "0")
    return `${min}:${sec}`
  }

  return (
    <View style={{ 
      position: "absolute", 
      top: 10, 
      right: 125, 
      zIndex: 1, 
      textAlign: "center", 
      fontFamily: "Arial", 
      fontSize: 20, 
      backgroundColor: "#0a7e8c", 
      padding: 10, 
      borderRadius: 35
    }}>
      <Text style={{fontSize: 45, color: "white"}}>{formatTime(time)}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
        <Pressable onPress={() => setPlaying(true)}>
          <Text style={{ color: "white" }}>Iniciar</Text>
        </Pressable>
        <Pressable onPress={() => setPlaying(false)}>
          <Text style={{ color: "white" }}>Pausar</Text>
        </Pressable>
        <Pressable
            onPress={() => {
            setPlaying(false)
            setTime(InitialTime)
            }}
        >
            <Text style={{ color: "white" }}>Resetar</Text>
        </Pressable>
      </View>
    </View>
  )
}