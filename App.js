import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: "aidai", key: "1" },
    { name: "islam", key: "2" },
    { name: "aisa", key: "3" },
    { name: "begimai", key: "4" },
    { name: "beka", key: "5" },
    { name: "alier", key: "6" },
    { name: "gulzana", key: "7" },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          people.map((person) => (
            <View key={person.key}>
              <Text style={styles.item}>{person.name}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
  }
});
