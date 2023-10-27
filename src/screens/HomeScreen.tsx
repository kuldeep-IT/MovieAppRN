import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS, SPACING } from '../theme/theme';
import InputHeader from '../components/InputHeader';
import { StatusBar } from 'react-native';
import { nowPlayingMovies, upcomingMovies, popularMovies, baseImagePath } from '../api/apicall';
import CategoryHeaders from '../components/CategoryHeaders';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }: any) => {
  const [nowPlayingMovieList, setNowPlayingMovieList] = useState(undefined);
  const [upcomingMovieList, setupcomingMovieList] = useState(undefined);
  const [popularMovieList, setpopularMovieList] = useState(undefined);

  const searchMovieFunction = (data: string) => {
    navigation.navigate('Search');
    console.log("Search Data", data)
  };

  const getNowPlayingMovieList = async () => {
    // console.log('url::::', nowPlayingMovies);

    try {
      let response = await fetch(nowPlayingMovies);
      let json = await response.json();
      return json;
    } catch (error) {
      console.log('Error::getNowPlayingMovieList::', error);
    }
  };

  const getUpcomingMovieList = async () => {
    try {
      let response = await fetch(upcomingMovies);
      let json = await response.json();
      return json;
    } catch (error) {
      console.log('Error::getUpcomingMovieList::', error);
    }
  };

  const getPopularMovieList = async () => {
    try {
      let response = await fetch(popularMovies);
      let json = await response.json();
      return json;
    } catch (error) {
      console.log('Error::getPopularMovieList::', error);
    }
  };

  useEffect(() => {
    (async () => {
      let tempNowPlaying = await getNowPlayingMovieList();
      console.log("NOW PLAYING::::::::::", tempNowPlaying.results);

      setNowPlayingMovieList(tempNowPlaying.results);

      let tempPopularMovie = await getPopularMovieList();
      setpopularMovieList(tempPopularMovie.results);

      let tempUpcomingMovie = await getUpcomingMovieList();
      setupcomingMovieList(tempUpcomingMovie.results);
    })();
  }, []);

  // console.log(
  //   'DATA::::',
  //   nowPlayingMovieList.length,
  //   upcomingMovieList.length,
  //   popularMovieList.length,
  // );

  if (
    nowPlayingMovieList == undefined &&
    nowPlayingMovieList == null &&
    upcomingMovieList == undefined &&
    upcomingMovieList == null &&
    popularMovieList == undefined &&
    popularMovieList == null
  ) {
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.scrollContainer}>
        <StatusBar hidden />

        <View>
          <InputHeader searchFunction={searchMovieFunction} />
        </View>

        <View style={styles.center}>
          <ActivityIndicator color={COLORS.Orange} size={'large'} />
        </View>
      </ScrollView>
    );
  }
  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      contentContainerStyle={styles.scrollContainer}>
      <StatusBar hidden />

      <View
        style={
          {
            // backgroundColor: 'red',
          }
        }>
        <InputHeader searchFunction={searchMovieFunction} />
      </View>

      <CategoryHeaders title="Show movies" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.Black,
  },

  scrollContainer: {
    flex: 1,
  },

  center: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  inputHeader: {
    // paddingHorizontal: SPACING.space_36,
    marginVertical: SPACING.space_8,
  },
});

export default HomeScreen;
