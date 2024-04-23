import {useEffect, useState} from 'react';
import GeoLocation from '@react-native-community/geolocation';
import {LatLng} from 'react-native-maps';
import useAppState from '@/hooks/useAppState';

function useUserLocation() {
  const [userLocation, setUserLocation] = useState<LatLng>({
    latitude: 37.5516032365118,
    longitude: 126.98989626020192,
  });
  const [isUerLocationError, setIsUerLocationError] = useState(false);
  const {isComback} = useAppState();

  useEffect(() => {
    GeoLocation.getCurrentPosition(
      info => {
        const {latitude, longitude} = info.coords;
        setUserLocation({latitude, longitude});
        setIsUerLocationError(false);
      },
      () => {
        setIsUerLocationError(true);
      },
      {
        enableHighAccuracy: true,
      },
    );
  }, [isComback]);

  return {userLocation, isUerLocationError};
}

export default useUserLocation;
