import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS, SPACING } from '../theme/theme';
import InputHeader from '../components/InputHeader';
import { StatusBar } from 'react-native';
import { nowPlayingMovies, upcomingMovies, popularMovies, baseImagePath } from '../api/apicall';
import CategoryHeaders from '../components/CategoryHeaders';
import SubMovieCard from '../components/SubMovieCard';
import MovieCard from '../components/MovieCard';

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

      setNowPlayingMovieList(
        [{ id: 'dummy1' },
        ...tempNowPlaying.results, {
          id: 'dummy2'
        }]
      );

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
    >
      <StatusBar hidden />

      <View>
        <InputHeader searchFunction={searchMovieFunction} />
      </View>

      <CategoryHeaders title="Now playing" />
      <FlatList
        data={nowPlayingMovieList}
        keyExtractor={(item: any) => item.id}
        horizontal
        bounces={false}
        snapToInterval={width * 0.7 + SPACING.space_36}
        contentContainerStyle={styles.containerGap36}
        decelerationRate={0}
        renderItem={({ item, index }) => {
          if (!item.original_title) {
            return (
              <View style={{ width: (width - (width * 0.7 + SPACING.space_36 * 2)) / 2 }}></View>
            )
          }

          return (
            <MovieCard
              genres={item.genre_ids}
              title={item.original_title}
              isFirst={index == 0 ? true : false}
              isLast={index == upcomingMovieList?.length - 1 ? true : false}
              shouldMarginatedAtEnd={true}
              cardFunction={
                () => {
                  navigation.push("MovieDetailScreen", { movieId: item.id })
                }
              }
              imgPath={baseImagePath('w342', item.poster_path)}
              cardWidth={width * 0.7}
            />
          )
        }}
      />

      <CategoryHeaders title="Popular" />
      <FlatList
        data={popularMovieList}
        keyExtractor={(item: any) => item.id}
        horizontal
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <SubMovieCard
            title={item.original_title}
            isFirst={index == 0 ? true : false}
            isLast={index == upcomingMovieList?.length - 1 ? true : false}
            shouldMarginatedAtEnd={true}
            cardFunction={
              () => {
                navigation.push("MovieDetailScreen", { movieId: item.id })
              }
            }
            imgPath={baseImagePath('w342', item.poster_path)}
            cardWidth={width / 3}
          />
        )}
      />

      <CategoryHeaders title="Upcoming" />
      <FlatList
        data={upcomingMovieList}
        keyExtractor={(item: any) => item.id}
        horizontal
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <SubMovieCard
            title={item.original_title}
            isFirst={index == 0 ? true : false}
            isLast={index == upcomingMovieList?.length - 1 ? true : false}
            shouldMarginatedAtEnd={true}
            cardFunction={
              () => {
                navigation.push("MovieDetailScreen", { movieId: item.id })
              }
            }
            imgPath={baseImagePath('w342', item.poster_path)}
            cardWidth={width / 3}
          />
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.Black,
    flex: 1,
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
    // marginVertical: SPACING.space_4,
    backgroundColor: 'red'
  },

  containerGap36: {
    gap: SPACING.space_36
  }
});

export default HomeScreen;
