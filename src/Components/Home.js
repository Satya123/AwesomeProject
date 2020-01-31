import React from 'react'
import { TouchableOpacity, Text,View,StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

  class Home extends React.Component {
            constructor(props) {
                 super(props);
                 this.state = {
                      isProfile: false,
                      isHome: true,
                      isMenu: false,
                      isNotification: false,
                    };
                 }


clickuserList(){
                  Actions.userlist();
                     }

clickSignUp(){
                  Actions.signup();
                     }

    render() {
            return (
 <View style={styles.container}> 
<View style={{flexDirection:'row',height:50,width:'100%'}}>
 <TouchableOpacity style = {{ }} onPress={() => { this.clickuserList(); }}>
          <Text style={{color:'blue',}}>UserList</Text>
      </TouchableOpacity>
      
 </View>
      <View style={{flexDirection:'row',height:30,width:'100%'}}>
         
         <TouchableOpacity style = {{ padding:0 }} onPress={() => { this.clickSignUp(); }}>
          <Text style={{color:'blue',}}>Sign Up</Text>
      </TouchableOpacity>
      
 </View>


 </View>


   )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  }
 })

export default Home
