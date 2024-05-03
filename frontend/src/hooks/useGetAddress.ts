import {LatLng} from 'react-native-maps';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {errorMessages} from '@/constants';

function useGetAddress(location: LatLng) {
  const {latitude, longitude} = location;
  const [result, setResult] = useState('');
  useEffect(() => {
    (async () => {
      try {
        const {data} = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=street_address|route|political&key=AIzaSyDcTXALg_S_O-FFhle7ARtaw8pysLoares&language=KO`,
        );
        const address = data.result.length
          ? data.result[0].formatted_address
          : `${latitude.toFixed(4)},${longitude.toFixed(4)}`;
        setResult(address);
      } catch (error) {
        setResult(errorMessages.CANNOT_GET_ADDRESS);
      }
    })();
  }, [latitude, longitude]);

  return result;
}

export default useGetAddress;
