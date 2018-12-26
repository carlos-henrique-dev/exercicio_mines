import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/params'
import MineField from './src/components/MinedField'
import { createMinedBoard } from './src/functions'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  /* define a quantidade de minas com base no numero de linhas
  e colunas e o nível de dificuldade */
  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  /* cria o estado do jogo colocando o tabuleiro preenchido */
  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.instructions}> Tamanho da grade:
        {params.getRowsAmount()} x {params.getColumnsAmount()}
        </Text>

        <View style={styles.board}>
          <MineField board={this.state.board} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',

  }
});
