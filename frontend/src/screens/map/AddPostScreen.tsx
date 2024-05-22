import {StackScreenProps} from '@react-navigation/stack';
import {MapStackParamList} from '@/navigations/stack/MapStatckNavigator';
import React from 'react';
import {mapNavigations} from '@/constants';
import PostForm from '@/components/post/postForm';

type AddPostScreenProps = StackScreenProps<
  MapStackParamList,
  typeof mapNavigations.ADD_POST
>;

function AddPostScreen({route}: AddPostScreenProps) {
  const {location} = route.params;
  return <PostForm location={location} />;
}

export default AddPostScreen;
