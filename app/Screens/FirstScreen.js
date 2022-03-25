import { Button, StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup'; //import Yup

import AppTextInput from './app/components/AppTextInput';

const schema = Yup.object().shape(
  {
    username: Yup.string().required(),
    password: Yup.string().required().min(4).max(8),
  }
)
function FirstScreen({navigation}) {
    return (
        <Formik
        initialValues={{username:'',passowrd:''}}
        onSubmit={values => console.log(values)}
        validationSchema={schema}>
          {({handleChange, handleSubmit, errors, setFieldTouched, touched})=>(
            <>
              <View style={styles.container}>
              <AppTextInput autoCapitalize='none' 
              autoCorrect={false} 
              placeholder="UserName"
              onBlur={()=>setFieldTouched("username")}
              onChangeText = {handleChange("username")}
              />
              {touched.username && <Text style={{color:"red", fontSize:10}}>{errors.username}</Text>}
              <AppTextInput
              autoCapitalize='none'
              autoCorrect={false}
              placeholder="Enter your Password"
              secureTextEntry
              onBlur={()=>setFieldTouched("password")}
              onChangeText={handleChange("password")}/>
              {touched.password && <Text style={{color:"red",fontSize:10}}>{errors.password}</Text>}
              <Button
              title='Submit'
              onPress={()=>navigation.navigate("SecondPage")}/>  
              </View>
            </>
          )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default FirstScreen;