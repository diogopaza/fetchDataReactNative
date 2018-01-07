
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';



export default class App extends Component<{}> {
  
    state = {
        data:[]
    }

    componentWillMount(){
        this.fetchData();
       
    }

    
    fetchData = async () =>{
        const response = await fetch("https://randomuser.me/api?results=10")
        const json = await response.json();
        this.setState({data : json.results})
        console.log(json.results)

    }
    
    /*
    fetchData(){

        const response = await fetch("https://randomuser.me/api?results=20")
        const json = await response.json();
        this.setState({data : json.results})
        console.log(json.results)

    }
    */
    

    

  
    render() {
    return (
      <View style={styles.container}>
          <FlatList data={this.state.data}
           // keyExtractor={(x,i) => i }
                renderItem={({item}) =>
                    <Text>
                        { `${item.name.first} ${item.name.last}` }
                     </Text>}></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      marginTop: 15,
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#F5FCFF",
  }
});
