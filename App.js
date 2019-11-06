/**
 * Vídeo #7:Modal - Módulo 11 - React Native Intermediário - B7Web
 * Link para a documentação oficial: https://facebook.github.io/react-native/docs/modal
 */

import React, {Component} from 'react';
import {View, StyleSheet, Modal, Text, Button} from 'react-native';

export default class ModalExemplo extends Component{

  constructor(props){
    super(props);
    this.state={
      modalVisible:false
    };
    this.exibirModal = this.exibirModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
  }

  exibirModal(){
    let s = this.state;
    s.modalVisible = true;
    this.setState(s);
  }

  fecharModal(){
    let s = this.state;
    s.modalVisible = false;
    this.setState(s);
  }

  render(){
    return(
        <View style={styles.body}>
          <Modal animationType="slide" visible={this.state.modalVisible}>
            <View style={styles.modal}>
              <Button title="X" onPress={this.fecharModal} />
              <Text style={styles.textModal}>Testando o uso de modal.</Text>
            </View>
          </Modal>
          <Button title="Exibir Modal" onPress={this.exibirModal}/>
        </View>
    );
  }

}//fim classe

const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    //backgroundColor:'#222222'
  },
  modal:{
    flex:1,
    backgroundColor:'#A4D3EE',
    padding:20,
    alignItems:'flex-start'
  },
  textModal:{
    marginTop:20,
    fontSize:20
  }
});
