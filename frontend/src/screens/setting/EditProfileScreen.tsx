import {Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import InputField from '@/components/common/inputField';
import useForm from '@/hooks/useForm';
import useAuth from '@/hooks/queries/useAuth';
import {validateEditProfile} from '@/utils';
import useImagePicker from '@/hooks/useImagePicker';

function EditProfileScreen() {
  const {getProfileQuery} = useAuth();
  const {nickname, imageUri, kakaoImageUri} = getProfileQuery.data || {};

  const imagePicker = useImagePicker({
    initialImages: imageUri ? [{uri: imageUri}] : [],
    mode: 'single',
  });

  const editProfile = useForm({
    initialValue: {nickname: nickname ?? ''},
    validate: validateEditProfile,
  });
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Pressable />
      </View>
      <InputField
        {...editProfile.getTextInputProps('nickname')}
        error={editProfile.errors.nickname}
        touched={editProfile.touched.nickname}
        placeholder="닉네임을 입력해주세요"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {},
});

export default EditProfileScreen;
