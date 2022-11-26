import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: "aidai", id: "1" },
    { name: "islam", id: "2" },
    { name: "aisa", id: "3" },
    { name: "begimai", id: "4" },
    { name: "beka", id: "5" },
    { name: "alier", id: "6" },
    { name: "gulzana", id: "7" },
  ]);

  return (
    <View style={styles.container}>
      
      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
      />

      {/* <ScrollView>
        {
          people.map((person) => (
            <View key={person.key}>
              <Text style={styles.item}>{person.name}</Text>
            </View>
          ))
        }
      </ScrollView> */}
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
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 24,
    marginTop: 24,
  }
});
