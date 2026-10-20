# LUKA 전용 주소

등대의집 통합 에이전트 LUKA(31번 프로젝트)의 전용 주소입니다.
주소: https://jinhyun-ai.github.io/LUKA/

## 왜 필요한가
구글 웹앱은 화면을 자기 액자(iframe) 안에 넣어 보여주는데, 그 액자에 **마이크 권한이 없습니다**.
이 페이지는 LUKA를 감싸고, 마이크 버튼을 누르면 **이 페이지가 대신 듣고** 알아들은 글자를 LUKA에게 전달합니다(음성 브리지).

## 쓰는 법
- 등대의집(light4u.kr) 구글 계정으로 로그인된 크롬에서 접속합니다.
- 처음 한 번 "마이크 허용"을 눌러 주세요.
- 테스트 버전: 주소 뒤에 `?dev=1`

## 유지보수
- LUKA 배포 ID가 바뀌면 `index.html`의 `LUKA_EXEC`(정식), `LUKA_DEV`(테스트) 두 줄만 고칩니다.
- 브리지 메시지는 구글 웹앱(`*-script.googleusercontent.com`)에서 온 것만 받고, LUKA 쪽도 이 주소(`jinhyun-ai.github.io`)에서 온 메시지만 받습니다.
