import React from 'react';
import { Switch, Text, View } from 'react-native';

import BackgroundGeolocation, {
  Location,
  Subscription,
} from 'react-native-background-geolocation';

export default function Map() {
  const [enabled, setEnabled] = React.useState(false);
  const [location, setLocation] = React.useState('');

  React.useEffect(() => {
    /// 1.  Subscribe to events.
    const onLocation: Subscription = BackgroundGeolocation.onLocation(
      (location) => {
        console.log('[onLocation]', location);
        setLocation(JSON.stringify(location, null, 2));
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

    /// 2. ready the plugin.
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
      // HTTP / SQLite config
      url: 'http://192.168.2.72:8081/locations',
      batchSync: false, // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
      autoSync: true, // <-- [Default: true] Set true to sync each location to server as it arrives.
      headers: {
        // <-- Optional HTTP headers
        'X-FOO': 'bar',
      },
      params: {
        // <-- Optional HTTP params
        auth_token: 'maybe_your_server_authenticates_via_token_YES?',
      },
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
    <View style={{ alignItems: 'center' }}>
      <Text>Click to enable BackgroundGeolocation</Text>
      <Switch value={enabled} onValueChange={setEnabled} />
      <Text style={{ fontFamily: 'monospace', fontSize: 12 }}>{location}</Text>
    </View>
  );
}
