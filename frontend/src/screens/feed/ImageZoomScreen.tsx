import ImageCarousel from '@/components/common/ImageCarouselProps';
import useDetailPostStore from '@/store/useDetailPostStore';
import {StackScreenProps} from '@react-navigation/stack';
import {FeedStackParamList} from '@/navigations/stack/FeedStackNavigator';
import {feedNavigations} from '@/constants';

type ImageZoomScreenProps = StackScreenProps<
  FeedStackParamList,
  typeof feedNavigations.IMAGE_ZOOM
>;

function ImageZoomScreen({route}: ImageZoomScreenProps) {
  const {index} = route.params;
  const {detailPost} = useDetailPostStore();
  return (
    <ImageCarousel images={detailPost?.images ?? []} pressedIndex={index} />
  );
}

export default ImageCarousel;
