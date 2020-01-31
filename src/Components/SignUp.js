import React from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text,Platform,Image, TouchableOpacity,ImageBackground,AsyncStorage,SafeAreaView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CustomHeader from './CustomHeader';
import DatePicker from 'react-native-datepicker';

class SignUp extends React.Component {
     constructor(props){
    super(props)
    //set value in state for initial date
    this.state = {date:"15-05-2018",
    UserName:'',
UserPassword:'',
UserEmail:''
  }
  }

  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
 UserRegistrationFunction=()=>
{
 const { UserName }  = this.state ;
 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;
 //alert(UserName)
if(UserName === '')
{
alert("Please enter UserName");

}else if(UserEmail==='')
{
 alert("Please enter name");
 
}


//"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"

}




        render() {
            return (
              <SafeAreaView style={styles.safeArea}>
                <View style={{width: '100%' }}>
                      <CustomHeader
                      headerText='test'
                      />
                </View>
               <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('../../assets/backgroundBlueHome.png')}>
                   <View style={styles.accountInfo}>
                      <View style={styles.MainContainer}>


<View>
 <View style={styles.imageBgColor}>
          <Image source={require('../../assets/camera.png')} style={styles.logo}
/>
          </View>

</View>


<View style={{height:50,width:'100%',flexDirection:'row'}}>
<View style={{height:50,width:'10%',marginTop:10}}>
<Image source={require('../../assets/user.png')} style={{width:30,height:30}}/>
</View>
<View style={{height:50,width:'90%'}}>
<TextInput
          placeholder="Enter User Name"
          onChangeText={UserName => this.setState({UserName})}
          value={this.state.UserName}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        /></View>
</View>
  <View style={{height:50,width:'100%',flexDirection:'row'}}>
<View style={{height:50,width:'10%',marginTop:10}}>
<Image source={require('../../assets/email.png')} style={{width:25,height:25}}/>
</View>
<View style={{height:50,width:'90%'}}>

        <TextInput
          placeholder="Enter User Email"
          onChangeText={UserEmail => this.setState({UserEmail})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
        /></View>
</View>

 <View style={{height:50,width:'100%',flexDirection:'row'}}>
<View style={{height:50,width:'10%',marginTop:10}}>
<Image source={require('../../assets/key.png')} style={{width:25,height:25}}/>
</View>
<View style={{height:50,width:'90%'}}>
 <TextInput
          placeholder="Enter User Password"
          onChangeText={UserPassword => this.setState({UserPassword})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
        />
        </View>
</View>
 
  <View style={{height:50,width:'100%',flexDirection:'row'}}>
<View style={{height:50,width:'100%'}}>
 <DatePicker

          style={{width: '100%'}}


          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36,
              borderWidth: 0,
borderBottomColor: 'grey',
borderBottomWidth: 3,
marginBottom: 7,
height: 50,
color:'#fff'
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
 


        </View>
</View>
      
 
        <Button title="Click Here To Register" onPress={this.UserRegistrationFunction} color="#2196F3" />
      
  
 
</View>
 
                  </View>
         </ImageBackground>
         </SafeAreaView>
            );
          }
        }

/*
  @styles:  these style constant are used to create a presentable ui .
*/

const styles = StyleSheet.create({
  safeArea: {
        flex: 1,
        backgroundColor: '#ddd'
    },
    imgBackground: {
        width: '100%',
        height: '100%',
        //resizeMode: 'cover',
        flex: 1,

    },
MainContainer :{
 
justifyContent: 'center',

margin: 10
},
imageBgColor :{
    justifyContent: 'center',
    alignItems: 'center',
},
 
TextInputStyleClass: {
marginBottom: 7,
color:'#fff',
height: 50,
borderBottomColor: 'grey',
borderBottomWidth: 2
},
logo:{
justifyContent: 'center',
alignItems:'center',
width: 100,
height: 100,
}
});

export default SignUp;
