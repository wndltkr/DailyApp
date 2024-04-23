import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {colors} from '@/constants';
import useAuth from '@/hooks/queries/useAuth';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const {getProfileQuery} = useAuth();
  // @ts-ignore
  const {email, nickname, imageUri, kakaoImageUri} = getProfileQuery.data || {};
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.userInfoContainer}>
          <View style={styles.userImageContainer}>
            {imageUri === null && kakaoImageUri === null && (
              <Image
                source={require('@/assets/image.png')}
                style={styles.userImage}
              />
            )}
            {imageUri === null && !!kakaoImageUri && (
              <Image source={{uri: kakaoImageUri}} style={styles.userImage} />
            )}
            {imageUri !== null && (
              <Image source={{uri: imageUri}} style={styles.userImage} />
            )}
          </View>
          <Text style={styles.nameText}>{nickname ?? email}</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: colors.WHITE,
  },
  nameText: {
    color: colors.BLACK,
  },
  userInfoContainer: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 30,
    marginHorizontal: 15,
  },
  container: {
    flex: 1,
  },
  userImage: {
    width: '100%',
    height: '100%',
    borerRadius: 35,
  },
  userImageContainer: {
    width: 70,
    height: 70,
    borerRadius: 35,
    marginBottom: 10,
  },
});
export default CustomDrawerContent;
