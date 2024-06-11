import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function LeaderScreen({ route }: any) {
  const { point } = route.params;
  const leaderBorder = [{ point: 19, name: "Jame" }, { point: 18, name: "Art" }, { point: 15, name: "John" }, { name: "You", point: point }]
  leaderBorder.sort((a, b) => b.point - a.point)
  const top3Leader = leaderBorder.slice(0, 3);

  return (
    <View style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', height: '100%' }}>
      <Text style={styles.text}>LeaderBorder</Text>
      <Text style={{ ...styles.text, marginTop: 20 }}>Your Score : {point}</Text>
      <View style={{ marginTop: 20, width: '100%', gap: 10, }}>
        {top3Leader.map((item, index) => {
          return <View key={index} style={{ display: 'flex', backgroundColor: '#EEEE', flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
            <Text style={styles.text}> {item.name}</Text>
            <Text style={styles.text}> {item.point}</Text>
          </View>
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontWeight: '600',
    fontSize: 20,
  }
});