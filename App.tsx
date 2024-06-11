import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import { QUESTION } from './src/constants';

function App(): React.JSX.Element {
  const [page, setPage] = useState(1)
  const question = QUESTION[page - 1]
  return (
    <SafeAreaView style={{ padding: 10, }}>
      <View style={{ display: 'flex', flexDirection: 'row', position: 'static', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
        <Text style={{ fontSize: 18 }}>{page} of 20</Text>
        <Text style={{ fontSize: 18 }}>Time</Text>
      </View>
      <ScrollView>
        <View style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', flex: 1, alignItems: 'center' }}>
          <View style={{ marginTop: 20, marginBottom: 30, width: '100%', gap: 14 }}>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 10 }}>
              <View >
                <Text style={styles.title}>Question {page}</Text>
              </View>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.detail}>{question.question}</Text>
              </View>
            </View>

            <TouchableHighlight
              style={styles.btnChoice}
              onPress={() => console.log('Left button pressed')}
              underlayColor="lightgray"
            >
              <Text style={styles.textChoice}>A. {question.listQuestion[0].answer}</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.btnChoice}
              onPress={() => console.log('Left button pressed')}
              underlayColor="lightgray"
            >
              <Text style={styles.textChoice}>B. {question.listQuestion[1].answer}</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.btnChoice}
              onPress={() => console.log('Left button pressed')}
              underlayColor="lightgray"
            >
              <Text style={styles.textChoice}>C. {question.listQuestion[2].answer}</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.btnChoice}
              onPress={() => console.log('Left button pressed')}
              underlayColor="lightgray"
            >
              <Text style={styles.textChoice}>D. {question.listQuestion[3].answer}</Text>
            </TouchableHighlight>
          </View>
          <View style={{ flexDirection: 'row', display: 'flex', gap: 10 }}>
            <Button title='PREV' onPress={() => {
              if (page > 1) {
                setPage(prev => prev - 1)
              }
            }} />
            <Button title='NEXT' onPress={() => {
              if (page < QUESTION.length) {
                setPage(prev => prev + 1)
              }
            }} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    fontSize: 20
  },
  title: {
    color: 'black',
    fontWeight: '900',
    fontSize: 24
  },
  detail: {
    color: 'black',
    fontWeight: '900',
    fontSize: 24
  },
  btnChoice: {
    padding: 20,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10
  },
  textChoice: {
    color: 'black',
    fontWeight: '600',
    fontSize: 20,
  }
});

export default App;
