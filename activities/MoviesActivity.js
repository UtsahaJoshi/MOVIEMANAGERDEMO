import React, { Component } from 'react';
import { 
    View, ScrollView, Image, Text, StyleSheet, 
    ActivityIndicator, TouchableOpacity } from 'react-native'
import { Header } from 'react-native-elements';
import { Icon } from 'native-base'
import { createStackNavigator } from 'react-navigation';
import {MovieDetails} from './MovieDetails'

class SecondActivity extends Component
{
 static navigationOptions =
 {
    title: 'Movie Details',
 };
 
 render()
 {
    return(
    
       <MovieDetails details = {this.props.navigation.state.params.param}/>
       
    );
 }
}

class MoviesActivity extends Component {
    static navigationOptions =
 {
    title: 'MoviesActivity',
    header: null
 };
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null
        }
    }

    renderMovieDetail=(param)=> {
       // Alert.alert(param);
        this.props.navigation.navigate('Second', {param})
    }

    componentDidMount() {
        return fetch('https://api.themoviedb.org/3/list/1?api_key=5211640eb3a9ddf747fd1085148dd018&language=en-US')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.items,
                } )

            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <Header
                        backgroundColor="red"
                        placement="left"
                        leftComponent={<Icon style={{ color: 'white' }} name="menu" onPress={() => this.props.navigation.openDrawer()}></Icon>}
                        centerComponent={{ text: 'All Movies', style: { color: '#fff' } }}
                    />
                    <ActivityIndicator />
                </View>
            )
        } else {
            var movies = this.state.dataSource.map((val, key) => {
                return <View style={styles.movieItem} key={key}>
                    <TouchableOpacity onPress={() => this.renderMovieDetail(val)}>
                        <View style={styles.movieItemInner}>
                            <Image
                                style={styles.image}
                                source={{ uri: 'https://image.tmdb.org/t/p/w200' + val.poster_path }} />

                            <Text style={{ fontSize: 17, color: '#424242', fontWeight: 'bold' }}>{val.title}</Text>

                        </View>
                    </TouchableOpacity>
                </View>

            })
            return (
                <View style={styles.container}>
                    <Header
                        backgroundColor="red"
                        placement="left"
                        leftComponent={<Icon style={{ color: 'white' }} name="menu" onPress={() => this.props.navigation.openDrawer()}></Icon>}
                        centerComponent={{ text: 'All Movies', style: { color: '#fff' } }}
                    />
                    <ScrollView>
                        <View style={styles.movies}>
                            {movies}
                        </View>
                    </ScrollView>

                </View>
            )
        }
    }
}

export default MoviesActivity= createStackNavigator({
    First: { screen: MoviesActivity },
    
    Second: { screen: SecondActivity }
   });;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    movies: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5
    },
    movieItem: {
        width: '50%',
        padding: 5,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    movieItemInner: {
        flex: 1,

    },
    image: {
        flex: 1,
        width: '100%',
        height: 250
    }
});
