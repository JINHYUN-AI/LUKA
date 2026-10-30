// LUKA 서비스 워커: 앱 설치 조건 + 푸시 알림 수신.
// 화면은 캐시하지 않는다(수정 내용이 바로 반영됨). 알림은 데이터 전용 메시지를 받아 여기서 직접 만든다.
importScripts('fcm-config.js');

var FCM = self.LUKA_FCM || {};
var FCM_READY = !!(FCM.config && FCM.config.apiKey);

if (FCM_READY) {
  importScripts(
    'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js'
  );
  firebase.initializeApp(FCM.config);
  var messaging = firebase.messaging();
  messaging.onBackgroundMessage(function (payload) {
    var d = (payload && payload.data) || {};
    var icons = { mail: '📧', mailDigest: '📧', stall: '⚠️', briefing: '🎙️', apply: '✅' };
    var title = (icons[d.type] ? icons[d.type] + ' ' : '') + (d.title || 'LUKA');
    return self.registration.showNotification(title, {
      body: d.body || '',
      icon: 'icons/icon-192.png',
      badge: 'icons/badge-96.png',
      tag: d.tag || d.type || 'luka',
      renotify: true,
      data: { open: d.open || '' }
    });
  });
}

self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* 설치 조건용(비워 둠) */ });

// 알림을 누르면 열려 있는 LUKA 창으로 가거나 새로 열고, 열 화면(mail 등)을 알려 준다.
self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  var open = (event.notification.data && event.notification.data.open) || '';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
      for (var i = 0; i < list.length; i++) {
        if (list[i].url.indexOf(self.registration.scope) === 0 && 'focus' in list[i]) {
          list[i].postMessage({ openLuka: open });
          return list[i].focus();
        }
      }
      return self.clients.openWindow(self.registration.scope + (open ? '?open=' + encodeURIComponent(open) : ''));
    })
  );
});
