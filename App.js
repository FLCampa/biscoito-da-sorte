// External Libraries
import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

function App() {
  // States
  const [image, setImage] = useState(require('./src/assets/biscoito.png'));
  const [phrase, setPhrase] = useState('');

  // Array
  const phrases = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'A vida trará coisas boas se tiveres paciência.',
    'Não há que ser forte. Há que ser flexível.',
    'São os nossos amigos que nos ensinam as mais valiosas lições.',
    'A maior de todas as torres começa no solo.',
    'Espere pelo mais sábio dos conselhos: o tempo.',
    'Todas as coisas são difíceis antes de se tornarem fáceis.',
    'Deixe de lado as preocupações e seja feliz.',
  ];

  // Function
  function breakBiscuit() {
    let randomNumber = Math.floor(Math.random() * phrases.length);
    let formattedRandomPhrase = '"' + phrases[randomNumber] + '"';

    setPhrase(formattedRandomPhrase);
    setImage(require('./src/assets/biscoitoAberto.png'));
  }

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <Text style={styles.phraseText}>{phrase}</Text>

      <TouchableOpacity style={styles.button} onPress={breakBiscuit}>
        <View style={styles.buttonArea}>
          <Text style={styles.buttonText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

// Stylization
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  phraseText: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  buttonArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;
