// LUKA 알림 공개 설정 — Firebase 콘솔 > 프로젝트 설정에서 복사한 값(웹 앱의 firebaseConfig + 웹 푸시 인증서 공개 키).
// 이 값들은 공개되어도 되는 값이다(비밀 키 아님). 서비스 계정 키(JSON)는 절대 여기에 넣지 않는다.
// apiKey 또는 vapidKey 가 비어 있으면 화면에 알림 버튼이 나타나지 않는다(앱 설치 기능만 동작).
self.LUKA_FCM = {
  config: {
    apiKey: 'AIzaSyAAiuHhD7pasg-I96C59VIzrwXTaXtIa38',
    authDomain: 'luka-alert.firebaseapp.com',
    projectId: 'luka-alert',
    storageBucket: 'luka-alert.firebasestorage.app',
    messagingSenderId: '891099026394',
    appId: '1:891099026394:web:feb4231f58de0516bca6e3'
  },
  vapidKey: 'BH4jH8utf5hfKpipzWw2h6WcO_nm3D-NuKO-qSZNDZdSaZLsBUD5X2sMgVuFmxSvCRZ-fe5zVbsovCzLeLbpOt8'
};
