import { useEffect, useState } from "react"
import { View, Text, Pressable } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome'

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
    <View 
      style={{ 
        position: "absolute", 
        top: 10, 
        right: 125, 
        zIndex: 1, 
        textAlign: "center", 
        fontFamily: "Arial", 
        fontSize: 20, 
        backgroundColor: "#0a7e8c", 
        padding: 0, 
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        width: 200
      }}
    >
      <Text style={{fontSize: 45, color: "white"}}>{formatTime(time)}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10, backgroundColor: "yellow", width: "100%"}}>
        <Pressable onPress={() => setPlaying(true)}>
          <Text style={{ color: "black" }}>Iniciar</Text>
        </Pressable>
        <Pressable onPress={() => setPlaying(false)}>
          <FontAwesome name="pause" size={24} color="black" />
        </Pressable>
        <Pressable
            onPress={() => {
            setPlaying(false)
            setTime(InitialTime)
            }}
        >
            <Text style={{ color: "black" }}>Resetar</Text>
        </Pressable>
      </View>
    </View>
  )
}