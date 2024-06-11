import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Button } from '@rneui/base';
import { QUESTION } from '../constants';

type ListQuestion = {
  answer: string;
  correct: boolean;
}

type QuestionType = {
  id: number;
  question: string;
  listQuestion: ListQuestion[];
  choseAnswer: number;
  point: number;
}


export default function QuestionScreen({ navigation }: any) {
  const [page, setPage] = useState(1)
  const [questionList, setQuestionList] = useState<QuestionType[]>(QUESTION)
  const question = questionList[page - 1]
  const index = page - 1

  const handleAnswer = (indexAnswer: number) => {
    setQuestionList(prev => prev.map(((question, indexQuestion) => {
      if (indexQuestion === index) {
        return ({
          ...question,
          choseAnswer: indexAnswer,
          point: question.listQuestion[indexAnswer].correct ? 1 : 0
        })
      }
      return question
    })))
  }

  const getCharacter = (id: number) => {
    switch (id) {
      case 0:
        return "A."
      case 1:
        return "B."
      case 2:
        return "C."
      case 3:
        return "D."
      default:
        break;
    }
  }

  function sumPoints(questions: typeof QUESTION): number {
    let totalPoints = 0;
    for (const question of questions) {
      totalPoints += question.point;
    }
    return totalPoints;
  }

  const countChosenAnswers = (questions: QuestionType[]) => {
    return questions.filter(question => question.choseAnswer > -1).length;
  }

  const isCompleteAnswer = countChosenAnswers(questionList) === questionList.length
  const totalPoints = sumPoints(questionList);
  return (
    <SafeAreaView style={{ padding: 10, backgroundColor: 'white' }}>
      <View style={{ display: 'flex', flexDirection: 'row', position: 'static', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
        <Text style={styles.title}>{page} of 20</Text>
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

            {question.listQuestion.map((item, index) => (
              <React.Fragment key={index}>
                <Button
                  onPress={() => handleAnswer(index)}
                  title={`${getCharacter(index)} ${item.answer}`}
                  loading={false}
                  buttonStyle={{
                    backgroundColor: `${question.choseAnswer === index ? "rgb(128, 191, 255)" : "rgb(191, 191, 191)"}`,
                    borderRadius: 5,
                  }}
                  titleStyle={{ fontWeight: 'bold', fontSize: 23, color: `${question.choseAnswer === index ? "rgba(255, 255, 255, 1)" : "rgb(26, 26, 26)"}` }}
                  containerStyle={{
                    height: 60,
                    width: "100%",
                  }}
                />
              </React.Fragment>
            ))}
          </View>
          <View style={{ flexDirection: 'row', display: 'flex', gap: 40 }}>
            <Button
              onPress={() => {
                if (page > 1) {
                  setPage(prev => prev - 1)
                }
              }}
              title={`Prev`}
              loading={false}
              buttonStyle={{
                backgroundColor: "rgb(128, 191, 255)",
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23, color: "rgba(255, 255, 255, 1)" }}
              containerStyle={{
                height: 60,
                width: "auto",
              }}
            />

            <Button
              onPress={() => {
                if (page < QUESTION.length) {
                  setPage(prev => prev + 1)
                }
              }}
              title={`Next`}
              loading={false}
              buttonStyle={{
                backgroundColor: "rgb(128, 191, 255)",
                borderRadius: 5,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23, color: "rgba(255, 255, 255, 1)" }}
              containerStyle={{
                height: 60,
                width: "auto",
              }}
            />
          </View>
          {isCompleteAnswer && <View >
            <Button
              title="SUBMIT"
              onPress={() => navigation.navigate('LeaderScreen', { point: totalPoints })}
              buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' }}
              containerStyle={{
                height: 40,
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              titleStyle={{
                color: 'white',
                marginHorizontal: 20,
              }}
            />
          </View>}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
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
