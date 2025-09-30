import { useState, useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync, sendPushNotification } from './NotificationsConfig'
import { styles } from '../Styles';

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
        <Pressable
            style={styles.button}
            onPress={async () => {
                await sendPushNotification(expoPushToken);
            }}
        >
            <Text style={styles.text}>Notificar</Text>
        </Pressable>
    );
}
