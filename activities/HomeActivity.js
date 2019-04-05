import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements';
import { Icon } from 'native-base'
class HomeActivity extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Header
                    backgroundColor="#3399CC"
                    placement="left"
                    leftComponent={<Icon style={{ color: 'white' }} name="menu" onPress={() => this.props.navigation.openDrawer()}></Icon> }
                    centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                />
                <Text style={{fontSize:30, marginTop: '50%',justifyContent:'center', textAlign:'center'}}>Welcome to the Movie Manager App</Text>
            </View>
        )
    }
}

export default HomeActivity;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
