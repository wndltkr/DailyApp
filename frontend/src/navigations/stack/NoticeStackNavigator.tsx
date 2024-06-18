import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LatLng} from 'react-native-maps';

import {colors, noticeNavigations} from '@/constants';
import useThemeStore from '@/store/useThemeStore';
import NoticeDetailScreen from "@/screens/notice/NoticeDetailScreen";
import NoticePostScreen from "@/screens/notice/NoticePostScreen";
import NoticeHomeScreen from "@/screens/notice/NoticeHomeScreen";

export type NoticeStackParamList = {
  [noticeNavigations.NOTICE_HOME]: undefined;
  [noticeNavigations.NOTICE_DETAIL]: {id: number};
  [noticeNavigations.EDIT_NOTICE]: {location: LatLng};
};

const Stack = createStackNavigator<NoticeStackParamList>();

function NoticeStackNavigator() {
  const {theme} = useThemeStore();

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: colors[theme].WHITE,
        },
        headerStyle: {
          shadowColor: colors[theme].GRAY_200,
          backgroundColor: colors[theme].WHITE,
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: colors[theme].BLACK,
      }}>
      <Stack.Screen
        name={noticeNavigations.NOTICE_HOME}
        component={NoticeHomeScreen}
        options={({navigation}) => ({
          headerTitle: '공지사항',
          headerLeft: () => NoticeHomeHeaderLeft(navigation),
        })}
      />
      <Stack.Screen
        name={noticeNavigations.NOTICE_DETAIL}
        component={NoticeDetailScreen}
        options={{
          headerShown: false,
          headerTitle: ' ',
          cardStyle: {
            backgroundColor: colors[theme].GRAY_100,
          },
        }}
      />
      <Stack.Screen
        name={noticeNavigations.EDIT_NOTICE}
        component={NoticePostScreen}
        options={{
          headerTitle: '공지 수정',
        }}
      />
    </Stack.Navigator>
  );
}

export default NoticeStackNavigator;
