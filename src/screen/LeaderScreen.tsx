import { View, Text } from 'react-native'
import React from 'react'

export default function LeaderScreen({ route }: any) {
  const { point } = route.params;
  return (
    <View>
      <Text>LeaderScreen</Text>
      <Text>Your Score : {point}</Text>
    </View>
  )
}