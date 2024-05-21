import HeaderButton from '@/components/common/HeaderButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '@/constants';
import React from 'react';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MainDrawerParamList} from '@/navigations/drawer/MainDrawerNavigator';
import {FeedStackParamList} from '@/navigations/stack/FeedStackNavigator';

type FeedHomeHeaderLeftProps = CompositeNavigationProp<
  StackNavigationProp<FeedStackParamList>,
  DrawerNavigationProp<MainDrawerParamList>
>;

function FeedHomeHeaderLeft(navigation: FeedHomeHeaderLeftProps) {
  return (
    <HeaderButton
      icon={<Ionicons name="menu" color={colors.BLACK} size={25} />}
      onPress={() => navigation.openDrawer()}
    />
  );
}

export default FeedHomeHeaderLeft;
