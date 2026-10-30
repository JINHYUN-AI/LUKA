// LUKA 알림 공개 설정 — Firebase 콘솔 > 프로젝트 설정에서 복사한 값(웹 앱의 firebaseConfig + 웹 푸시 인증서 공개 키).
// 이 값들은 공개되어도 되는 값이다(비밀 키 아님). 서비스 계정 키(JSON)는 절대 여기에 넣지 않는다.
// apiKey 가 비어 있으면 화면에 알림 버튼이 나타나지 않는다(앱 설치 기능만 동작).
self.LUKA_FCM = {
  config: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  },
  vapidKey: ''
};
