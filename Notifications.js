import { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync, sendPushNotification } from './NotificationsConfig'

export const MyPushNotifications = () => {
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(undefined);

    useEffect(() => {
        registerForPushNotificationsAsync()
            .then(token => setExpoPushToken(token ?? ''))
            .catch(error => setExpoPushToken(`${error}`));

        const notificationListener = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            notificationListener.remove();
            responseListener.remove();
        };
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
            <Button
                title="Press to Send Notification"
                onPress={async () => {
                    await sendPushNotification(expoPushToken);
                }}
            />
        </View>
    );
}
