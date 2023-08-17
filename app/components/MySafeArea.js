import React from 'react';
import {StyleSheet, Text, SafeAreaView,Platform} from 'react-native';

function MySafeArea({children}) {
    return (
       <SafeAreaView style={styles.container}>
            {children}
       </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : 30 ,
    }
})

export default MySafeArea;