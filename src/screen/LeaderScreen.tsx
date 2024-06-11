import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function LeaderScreen({ route }: any) {
  const { point } = route.params;
  const leaderBoard = [{ point: 19, name: "Jame" }, { point: 18, name: "Art" }, { point: 15, name: "John" }, { name: "You", point: point }]
  leaderBoard.sort((a, b) => b.point - a.point)
  const top3Leader = leaderBoard.slice(0, 3);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>LeaderBoard Top 3</Text>
      <Text style={styles.score}>Your Score: {point}</Text>
      <View style={styles.leaderBoardContainer}>
        {top3Leader.map((item, index) => {
          return (
            <View key={index} style={styles.leaderItem}>
              <Text style={styles.leaderName}>{index + 1}. {item.name}</Text>
              <Text style={styles.leaderPoint}>{item.point}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  header: {
    color: 'black',
    fontWeight: '600',
    fontSize: 20,
    marginTop: 20,
  },
  score: {
    color: 'black',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 10,
  },
  leaderBoardContainer: {
    marginTop: 20,
    width: '100%',
  },
  leaderItem: {
    flexDirection: 'row',
    backgroundColor: '#EEEE',
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 5,
    marginBottom: 10,
  },
  leaderName: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
  leaderPoint: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
  },
});