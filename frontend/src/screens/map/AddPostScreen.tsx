import {StackScreenProps} from '@react-navigation/stack';
import {MapStackParamList} from '@/navigations/stack/MapStatckNavigator';
import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {colors, mapNavigations} from '@/constants';
import InputField from '@/components/inputField';
import Octicons from 'react-native-vector-icons/Octicons';
import CustomButton from '@/components/CustomButton';
import useForm from '@/hooks/useForm';
import {getDateWithSeparator, validateAddPost} from '@/utils';
import AddPostHeaderRight from '@/components/AddPostHeaderRight';
import useMuatateCreatePost from '@/hooks/queries/useMuatateCreatePost';
import {MarkerColor} from '@/types/domain';
import useGetAddress from '@/hooks/useGetAddress';
import MarkerSelector from '@/components/MarkerSelector';
import ScoreInput from '@/components/ScoreInput';
import DatePickerOption from '@/components/DatePickerOption';
import useModal from '@/hooks/useModal';
import ImageInput from '@/components/ImageInput';
import usePermission from "@/hooks/usePermission";

type AddPostScreenProps = StackScreenProps<
  MapStackParamList,
  typeof mapNavigations.ADD_POST
>;

function AddPostScreen({route, navigation}: AddPostScreenProps) {
  const {location} = route.params;
  const descriptionRef = useRef<TextInput | null>(null);
  const createPost = useMuatateCreatePost();
  const addPost = useForm({
    initialValue: {title: '', description: ''},
    validate: validateAddPost,
  });

  const [markerColor, setMarkerColor] = useState<MarkerColor>('RED');
  const [score, setScore] = useState(5);
  const [date, setDate] = useState(new Date());
  const [isPicked, setIsPicked] = useState(false);
  const dateOption = useModal();
  const address = useGetAddress(location);
  usePermission('PHOTO');

  const handleSelectMarker = (name: MarkerColor) => [setMarkerColor(name)];

  const handleChangeScore = (value: number) => {
    setScore(value);
  };

  const handleConfirmDate = () => {
    setIsPicked(true);
    dateOption.hide();
  };

  const handleChangeDate = (pickedDate: Date) => {
    setDate(pickedDate);
  };

  const handleSubmit = () => {
    const body = {
      date,
      title: addPost.values.title,
      description: addPost.values.description,
      color: markerColor,
      score,
      imageUris: [],
    };
    createPost.mutate(
      {address, ...location, ...body},
      {
        onSuccess: () => navigation.goBack(),
      },
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => AddPostHeaderRight(handleSubmit),
    });
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <InputField
            value={address}
            disabled
            icon={
              <Octicons name="location" size={16} color={colors.GRAY_500} />
            }
          />
          <CustomButton
            variant="outlined"
            size="large"
            label={isPicked ? getDateWithSeparator(date, '. ') : '날짜 선택'}
            onPress={dateOption.show}
          />
          <InputField
            placeholder="제목을 입력하세요."
            error={addPost.errors.title}
            touched={addPost.touched.title}
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => descriptionRef.current?.focus()}
            {...addPost.getTextInputProps('title')}
          />
          <InputField
            ref={descriptionRef}
            placeholder="기록하고 싶은 내용을 입력하세요."
            error={addPost.errors.description}
            touched={addPost.touched.description}
            multiline
            returnKeyType="next"
            {...addPost.getTextInputProps('description')}
          />
          <MarkerSelector
            score={score}
            markerColor={markerColor}
            onPressMarker={handleSelectMarker}
          />
          <ScoreInput score={score} onChangeScore={handleChangeScore} />
          <ImageInput onChange={() => {}} />
          <DatePickerOption
            isVisible={dateOption.isVisible}
            date={date}
            onChangeDate={handleChangeDate}
            onConfirmDate={handleConfirmDate}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    marginBottom: 10,
  },
});

export default AddPostScreen;
