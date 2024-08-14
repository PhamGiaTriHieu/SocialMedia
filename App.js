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
  Dimensions,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';

import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {globalStyles} from './assets/styles/globalStyle';
import {userPosts, userStories} from './public/dummyData/dummyData';
import UserStory from './components/UserStory/UserStory.js';
import UserPost from './components/UserPost/UserPost.js';
import {scaleFontSize} from './assets/styles/scaling.js';

const App = () => {
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostRenderedData, setUserPostRenderedData] = useState([]);
  const [isLoadingUserPost, setIsLoadingUserPost] = useState(false);

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

    setIsLoadingUserPost(true);
    const getInitialDataPost = pagination(userPosts, 1, userPostsPageSize);
    setUserPostRenderedData(getInitialDataPost);
    setIsLoadingUserPost(false);
  }, []);

  return (
    <SafeAreaView>
      {/* Users Post */}
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={globalStyles.header}>
                <Title title="Let’s Explore" />
                <TouchableOpacity style={globalStyles.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color="#898DAE"
                    size={scaleFontSize(20)}
                  />
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
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
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
            </>
          }
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPost) {
              return;
            }
            setIsLoadingUserPost(true);
            console.log('fetching more data...', userPostsCurrentPage + 1);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(userPostsCurrentPage + 1);
              setUserPostRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPost(false);
          }}
          data={userPostRenderedData}
          // keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View
                key={'userPost' + item.id}
                style={globalStyles.userPostContainer}>
                <UserPost
                  key={'userPost' + item.id}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  image={item.image}
                  likes={item.likes}
                  bookmarks={item.bookmarks}
                  comments={item.comments}
                  location={item.location}
                  profileImage={item.profileImage}
                  id={item.id}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
