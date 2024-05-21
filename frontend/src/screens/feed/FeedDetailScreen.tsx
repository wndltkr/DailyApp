import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {FeedStackParamList} from '@/navigations/stack/FeedStackNavigator';
import {colors, feedNavigations} from '@/constants';
import useGetPost from '@/hooks/queries/useGetPost';
import Octicons from 'react-native-vector-icons/Octicons';

type FeedDetailScreenProps = StackScreenProps<
  FeedStackParamList,
  typeof feedNavigations.FEED_DETAIL
>;

function FeedDetailScreen({route}: FeedDetailScreenProps) {
  const {id} = route.params;
  const {data: post, isPending, isError} = useGetPost(id);

  if (isPending || isError) {
    return <></>;
  }

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.headerContainer}>
        <View>
          <Octicons name="arrow-left" size={30} color={colors.WHITE} />
        </View>
      </SafeAreaView>
      <View style={styles.imageContainer}>
        {post?.images.length > 0 && (
          <Image
            style={styles.image}
            source={{
              uri: `${
                Platform.OS === 'ios'
                  ? 'http://localhost:3030/'
                  : 'http://10.0.2.2:3030/'
              }${post?.images[0].uri}`,
            }}
            resizeMode="cover"
          />
        )}
        {post?.images.length === 0 && (
          <View style={styles.emptyImageContainer}>
            <Text>No Image</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  emptyImageContainer: {
    height: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.GRAY_200,
    borderColor: colors.GRAY_200,
    borderWidth: 1,
  },
  container: {
    position: 'relative',
    top: 0,
    zIndex: 1,
    width: '100%',
  },
  headerContainer: {
    position: 'absolute',
  },
});

export default FeedDetailScreen;
