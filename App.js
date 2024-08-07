/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';

import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {globalStyles} from './assets/styles/globalStyle';
import {userStories} from './public/dummyData/dummyData';
import UserStory from './components/UserStory/UserStory.js';

const App = () => {
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    console.log('🚀 ~ pagination ~ currentPage:', currentPage);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= database.length) {
      return [];
    }

    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);
  }, []);

  return (
    <SafeAreaView>
      <View style={globalStyles.header}>
        <Title title="Let’s Explore" />
        <TouchableOpacity style={globalStyles.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} color="#898DAE" size={20} />
          <View style={globalStyles.messageNumberContainer}>
            <Text style={globalStyles.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* UserStories */}
      <View style={globalStyles.userStoriesContainer}>
        <FlatList
          onEndReached={() => {
            if (isLoadingUserStories) {
              return;
            }
            setIsLoadingUserStories(true);
            const contentToAppend = pagination(
              userStories,
              userStoriesCurrentPage + 1,
              userStoriesPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
              setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserStories(false);
          }}
          onEndReachedThreshold={0.5}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStoriesRenderedData}
          renderItem={({item}) => {
            return (
              <UserStory
                key={'userStory' + item.id}
                firstName={item.firstName}
                profileImage={item.profileImage}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // textStyled1: {
  //   fontFamily: 'Playfair Display',
  //   fontWeight: '500',
  //   fontSize: 50,
  // },
  // textStyled2: {
  //   fontFamily: baseTypography.fontFamily,
  //   fontSize: 50,
  //   fontWeight: baseTypography.fontWeightSemiBold,
  // },
});

export default App;
