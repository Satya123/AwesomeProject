import React from 'react';
import { FlatList, ActivityIndicator, Text, View,Image,StyleSheet  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 100}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.container}>
        <FlatList
            data={this.state.dataSource.slice(0,4)}

          renderItem={({item,index}) => 
          <View style={[styles.listmain
            , index%2==0 ? { marginRight: 10 } : { marginLeft: 10 } ]}>
         
          <View style={styles.mainRow}>
          <View style={styles.subRow}>
         <Text style={styles.inputTextBold}>Name : {item.name}</Text>
          <Text style={styles.inputText}>Email : {item.email}</Text>
          <Text style={styles.inputText}>{item.address.suite}{item.address.street},{item.address.city}-{item.address.zipcode}</Text>
          <Text style={styles.inputText}>Phone : {item.phone}</Text>
          </View>
         <View style={styles.imagedelete}>
          <Image source={require('./assets/delete.png')} />
          </View>
</View>
<View style={styles.hyperlinkText}>
     <Text style={styles.hyperlinkTextLine}>{item.website}</Text>
</View>

          </View>

        }
          keyExtractor={({id}, index) => id}
        />

<View style={styles.fullWidth}>
     <Text style={{width: '100%',textAlign: 'center',fontSize:20
}} >Countinue for all the data ......</Text>
</View>
 </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop:20},
  listmain: {backgroundColor: '#eee',
   padding:10,marginBottom:20,
   borderRadius:10,height:140,borderWidth:1, flex: 1
  },
mainRow:{
  flexDirection:'row'
},
subRow:{
  height:30,width:'89%',height:100
},
inputText:{
  padding:0,
  fontSize:14
},
inputTextBold:{
  padding:0,
  fontSize:16,
  fontWeight:'bold'
},
imageDelete:{width:'10%',height:100
},
hyperlinkText:
{
  width:'100%',alignItems: 'center',
  
  justifyContent: 'center',

},
hyperlinkTextLine:
{
width:'100%',
textAlign: 'center', // <-- the magic
fontWeight: 'bold',
textDecorationLine: 'underline',
fontSize:16,
},
fullWidth:
{
  width:'100%',alignItems: 'center',

}

});

