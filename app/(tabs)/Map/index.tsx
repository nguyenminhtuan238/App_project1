import React from 'react';
import { Switch, Text, View } from 'react-native';

import BackgroundGeolocation, {
  Location,
  Subscription,
} from 'react-native-background-geolocation';
import MapView from 'react-native-maps';
export default function Map() {
  const [enabled, setEnabled] = React.useState(false);
  const [location, setLocation]: any = React.useState('');

  React.useEffect(() => {
    /// 1.  Subscribe to events.
    const onLocation: Subscription = BackgroundGeolocation.onLocation(
      (location) => {
        // console.log('[onLocation]', location);
        setLocation(location);
      }
    );

    const onMotionChange: Subscription = BackgroundGeolocation.onMotionChange(
      (event) => {
        console.log('[onMotionChange]', event);
      }
    );

    const onActivityChange: Subscription =
      BackgroundGeolocation.onActivityChange((event) => {
        console.log('[onActivityChange]', event);
      });

    const onProviderChange: Subscription =
      BackgroundGeolocation.onProviderChange((event) => {
        console.log('[onProviderChange]', event);
      });

    BackgroundGeolocation.ready({
      // Geolocation Config
      desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
      distanceFilter: 10,
      // Activity Recognition
      stopTimeout: 5,
      // Application config
      debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
      logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
      stopOnTerminate: false, // <-- Allow the background-service to continue tracking when user closes the app.
      startOnBoot: true, // <-- Auto start tracking when device is powered-up.
    })
      .then((state) => {
        setEnabled(state.enabled);
        console.log(
          '- BackgroundGeolocation is configured and ready: ',
          state.enabled
        );
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      // Remove BackgroundGeolocation event-subscribers when the View is removed or refreshed
      // during development live-reload.  Without this, event-listeners will accumulate with
      // each refresh during live-reload.
      onLocation.remove();
      onMotionChange.remove();
      onActivityChange.remove();
      onProviderChange.remove();
    };
  }, []);

  /// 3. start / stop BackgroundGeolocation
  React.useEffect(() => {
    const a = async () => {
      try {
        if (enabled) {
          await BackgroundGeolocation.start();
        } else {
          await BackgroundGeolocation.stop();
          setLocation('');
        }
      } catch (error: any) {
        console.log(error);
      }
    };
    a();
  }, [enabled]);

  return (
    <View className="flex-1">
      <Switch value={enabled} onValueChange={setEnabled} />
      <MapView
        region={{
          latitude: location ? location.coords.latitude : 16.16666666,
          longitude: location ? location.coords.longitude : 107.83333333,
          latitudeDelta: 0.04,
          longitudeDelta: 0.05,
        }}
        className="w-full h-full"
      />
    </View>
  );
}
