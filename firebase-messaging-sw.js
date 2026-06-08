// BookBack push notification service worker
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBhOo3iKmoisJDdXZuWrgHtAGqK3feTTSU",
  authDomain: "bookback-6954b.firebaseapp.com",
  projectId: "bookback-6954b",
  storageBucket: "bookback-6954b.firebasestorage.app",
  messagingSenderId: "166409653284",
  appId: "1:166409653284:web:a2b4d1af01823ce3875cb1"
});

const messaging = firebase.messaging();

// Handles notifications when the app is in the background or closed
messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification?.title || 'BookBack';
  const options = {
    body: payload.notification?.body || '',
    icon: '/logo.jpeg',
    badge: '/logo.jpeg'
  };
  self.registration.showNotification(title, options);
});
