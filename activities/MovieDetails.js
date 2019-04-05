import React from 'react';
import { View,Image, StyleSheet, Text,} from 'react-native';

	


export class MovieDetails extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
          <Image
            style={styles.image}
            source={{ uri: 'https://image.tmdb.org/t/p/w200' + this.props.details.poster_path }} />
          <Text style={{fontSize: 20, textAlign:'center'}}>{this.props.details.title}</Text>
          <Text style={{marginTop:10,textAlign:'center'}}>Release Date: {this.props.details.release_date}</Text>
          <Text style={{textAlign:'center'}}>Average Vote: {this.props.details.vote_average}</Text>
          <Text style={{textAlign:'center'}}>Total Votes: {this.props.details.vote_count}</Text>
          <Text style={{textAlign:'center'}}>Popularity: {this.props.details.popularity}</Text>
          <Text style={{marginTop: 10,marginHorizontal:10, textAlign:'left', fontSize: 20}}>{this.props.details.overview}</Text>
      </View>
    );
  }
  }


const styles = StyleSheet.create({
    image:{
        flex:0.8,
        resizeMode:'contain'
    }
});