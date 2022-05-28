![image](https://bookstairs-bucket.s3.ap-northeast-2.amazonaws.com/bookstairs_og_img_2.png)

## 📚 `북스테어즈`는 어떤 서비스인가요?

진짜 독서가들의 독서법, 북스테어즈 💡
<br/>
뇌 과학 기반의 차별화 된 독서법을 제안합니다.
[랜딩페이지 바로가기](https://book-stairs.com)
<br/>
<br/>

## 🧩 워크플로우

![150529139-ece76c3d-dd7d-4f6e-bde0-6067adb67e72](https://user-images.githubusercontent.com/73876068/150552674-bbed29b9-629c-4bb2-bb67-430c2de4ae22.png)
<br />
<br />

## 👨‍👩‍👦‍👦 누가 만들어나요?

| [김소령(soryeongk)](https://github.com/soryeongk) | [이주함(joohaem)](https://github.com/joohaem) | [김규민(q-bit-junior)](https://github.com/q-bit-junior) | [석상언(sharpcoder312)](https://github.com/sharpcoder312)|
| :----------------------------------------: | :---------------------------------: | :---------------------------------: | :---------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/40630964?v=4" width="300px"> | <img src="https://avatars.githubusercontent.com/u/47105088?v=4" width="300px"> | <img src="https://avatars.githubusercontent.com/u/87220517?v=4" width="300px"> | <img src="https://avatars.githubusercontent.com/u/73876068?v=4" width="300px"> |

<br />

## 🛠 기술 스택

뚝딱뚝딱 마이그레이션 진행 중

```json
"axios": "^0.24.0",
"framer-motion": "^6.2.3",
"react-hook-form": "^7.28.1",
"react-responsive": "^9.0.0-beta.6",
"react-textarea-autosize": "^8.3.3",
"recoil": "^0.6.1",
"recoil-persist": "^4.0.0",
"styled-components": "^5.3.3",
"styled-reset": "^4.3.4",
"swr": "^1.2.1",
"typescript": "^4.5.4"
```

현재 저희는 **더 좋은 유저 경험과 확장성, 그리고 우리의 성장**을 위해 **Next.js**로의 마이그레이션을 진행하고 있습니다.

우리 서비스에 적합하고, 공부할 가치가 있는 기술을 사용해보고, 틀에 갇힌 코드를 작성하지 않도록 **🎉[Discussions(클릭)](https://github.com/TeamBookTez/nextjs-book-stairs/discussions)를 오픈했습니다🎉**

**북스테어즈 팀원이 아닌 분들도 자유롭게 의견을 내주시고, 새로운 지식을 알려주시면 감사하겠습니다 :))**

<br />

## ✉ 커밋 컨벤션

| 제목     | 내용                                   |
| -------- | -------------------------------------- |
| init     | 작업 세팅 커밋 (패키지 설치 등)        |
| feat     | 기능 추가 및 변경 (화면 영향 o)        |
| design   | only css 변경                          |
| fix      | 기존의 버그 수정                       |
| refactor | 더 좋은 코드 개선 (화면 영향 x)        |
| etc      | 문서 작성 or 그 외 커밋(주석, 개행 등) |

<br />

## 💻 프로젝트 뷰

### 1. 랜딩 페이지

![book-stairs com_ (1)](https://user-images.githubusercontent.com/73876068/150489230-1a83d582-1985-454d-bb86-e4395e842ffe.png)
<br />
<br />

### 2. 회원가입 페이지

3단계 구성의 절차를 통해 회원가입이 이루어집니다.

![book-stairs com_signup_3](https://user-images.githubusercontent.com/73876068/150490051-bf01ff99-f7cc-4377-8aa4-0d4cdc105ddc.png)
<br />
<br />

### 3. 로그인 페이지

![book-stairs com_login](https://user-images.githubusercontent.com/73876068/150490216-48db45d5-b596-4b98-ab30-16b3fd26c9c1.png)
<br />
<br />

### 4. 마이 페이지

현재까지 작성한 북노트 권 수를 제공하며, 고객과 북스테어즈의 커뮤니케이션 통로의 역할을 합니다.

![book-stairs com_login (5)](https://user-images.githubusercontent.com/73876068/150492563-1ad7c2e1-3391-409e-b546-df9d7b29f6e3.png)
<br />
<br />

### 5. 메인 페이지

적용 사례를 통한 북노트 사용 가이드와 최근 작성한 북노트를 확인할 수 있습니다.

![book-stairs com_login (1)](https://user-images.githubusercontent.com/73876068/150490611-6c6b2b6d-002d-4978-8df4-a1142d8238c2.png)
<br />
<br />

### 6. 적용 사례 페이지

북노트 사용 구체적 예시와 캐러셀 모달을 통한 상세 설명을 제공합니다.

![book-stairs com_login (4)](https://user-images.githubusercontent.com/73876068/150492076-85420c9f-9379-4006-bae1-cd1e7c830717.png)
<br />
<br />

### 7. 서재 페이지

전체, 독서 전, 독서 중, 독서 완료를 분기 처리하여 북노트 목록을 제공하며, 책 추가 페이지로 이어집니다.

![book-stairs com_login (3)](https://user-images.githubusercontent.com/73876068/150491967-a9d27ecd-0763-4c70-920a-0de750753679.png)
<br />
<br />

### 8. 책 추가 페이지

카카오 api를 통해 책 DB를 등록된 책들을 검색할 수 있습니다.

![book-stairs com_login (6)](https://user-images.githubusercontent.com/73876068/150493421-4976ea06-c0b4-4de7-9cc5-c861add48a67.png)
![book-stairs com_login (7)](https://user-images.githubusercontent.com/73876068/150493738-625fd513-dd0e-4369-aa8c-6b7031a2822c.png)
<br />
<br />

### 9. 독서 전 페이지

본격적인 독서 전, 나만의 독서 전략을 세워 독서 방향성 정립에 도움을 줍니다.

![book-stairs com_book-note](https://user-images.githubusercontent.com/73876068/150494975-655ea8ef-dcee-4ca2-9d58-6f9ccdd925e6.png)
<br />
<br />

### 10. 독서 중 페이지

질문 리스트를 최대 4뎁스까지 구조화하여 질문과 답변을 등록할 수 있습니다.
<br />
또한, Step Up과 예시 버튼을 통해 북노트 작성에 도움을 얻을 수 있습니다.

![book-stairs com_book-note (2)](https://user-images.githubusercontent.com/73876068/150496350-9039cab3-2025-49ba-a276-c6b28c444172.png)
![book-stairs com_book-note (3)](https://user-images.githubusercontent.com/73876068/150496640-f195ef6a-6823-4162-8c20-a429f2d370b7.png)
<br />
<br />

### 11. 독서 완료 페이지

완료된 북노트를 확인할 수 있으며, 북노트 삭제 및 수정 기능을 제공합니다.

![book-stairs com_detail-book-note](https://user-images.githubusercontent.com/73876068/150620355-51e944a7-1420-48ca-8d2a-308803d85fef.png)
<br />
<br />

### 12. 준비 중 페이지

현재 북스테어즈가 준비 중인 기능을 안내함과 동시에 피드백 통로를 제공합니다.

![book-stairs com_book-note (5)](https://user-images.githubusercontent.com/73876068/150497399-04065268-bfc4-42a9-bbf0-6cdd53d931ba.png)
<br />
<br />

### 13. 404 페이지

![book-stairs com_404](https://user-images.githubusercontent.com/73876068/150620472-512a488e-79a2-4e18-b67d-5fc8181bd547.png)
<br />
<br />

