import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [adjective1, setAdjective1] = useState('');
  const [name, setName] = useState('');
  const [noun1, setNoun1] = useState('');
  const [noun2, setNoun2] = useState('');
  const [adjective2, setAdjective2] = useState('');
  const [animal, setAnimal] = useState('');
  const [verb, setVerb] = useState('');
  const [place, setPlace] = useState('');
  const [story, setStory] = useState('');

  const handleButtonPress = () => {
    const filledStory = `One day, a ${adjective1} explorer named ${name} decided to venture into the deepest part of the jungle. Armed with a ${noun1} and a ${noun2}, they bravely marched into the unknown. Suddenly, they encountered a ${adjective2} ${animal}. Without hesitation, ${name} used their ${noun1} to ${verb} the ${animal} and continued their journey. By the end of the day, they had discovered a ${adjective2} hidden ${place}, making it the most unforgettable day ever!`;
    
    setStory(filledStory);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Funny Fill-In Adventure!</Text>
      <Image
        source={{ uri: 'https://example.com/fun-picture.jpg' }} // Replace with an actual image URL
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter an adjective"
        value={adjective1}
        onChangeText={setAdjective1}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter a name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter a noun"
        value={noun1}
        onChangeText={setNoun1}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter another noun"
        value={noun2}
        onChangeText={setNoun2}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter another adjective"
        value={adjective2}
        onChangeText={setAdjective2}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter an animal"
        value={animal}
        onChangeText={setAnimal}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter a verb"
        value={verb}
        onChangeText={setVerb}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter a place"
        value={place}
        onChangeText={setPlace}
      />
      <Button title="Create Story" onPress={handleButtonPress} />
      {story ? <Text style={styles.story}>{story}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#7f8c8d',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  story: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});
