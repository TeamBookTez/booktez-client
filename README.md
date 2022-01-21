![image](https://user-images.githubusercontent.com/73876068/148671692-f6cdd096-dab3-4d8e-9b51-443eb3b947ba.png)

## 📚 `북스테어즈`는 어떤 서비스인가요?
진짜 독서가들의 독서법, 북스테어즈 💡
<br/>
뇌 과학 기반의 차별화 된 독서법을 제안합니다.
[랜딩페이지 바로가기](https://book-stairs.com)
<br/>
<br/>

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

![book-stairs com_book-note (4)](https://user-images.githubusercontent.com/73876068/150497049-e0bea121-1aa0-42af-a222-a10b3bdef4f0.png)
<br />
<br />
### 12. 준비 중 페이지
현재 북스테어즈가 준비 중인 기능을 안내함과 동시에 피드백 통로를 제공합니다. 

![book-stairs com_book-note (5)](https://user-images.githubusercontent.com/73876068/150497399-04065268-bfc4-42a9-bbf0-6cdd53d931ba.png)
<br />
<br />


## 🛠 기술 스택
<img src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=flat" height=40>&nbsp;&nbsp;<img src="https://img.shields.io/badge/-Typescript-3074BF?logo=Typescript&logoColor=white&style=flat" height=40>&nbsp;&nbsp;
```json
"axios": "^0.24.0",
"lodash": "^4.17.21",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-router-dom": "^6.2.1",
"recoil": "^0.5.2",
"styled-components": "^5.3.3",
"styled-reset": "^4.3.4",
"swr": "^1.1.2",
"typescript": "^4.5.4",
```
<br/>

## 🗂 프로젝트 폴더 구조
```
.
├── components
│   ├── addBook
│   │   ├── AddBookDefault.tsx
│   │   ├── BookEmpty.tsx
│   │   ├── BookInfoWrapper.tsx
│   │   ├── BookList.tsx
│   │   ├── ModalWrapper.tsx
│   │   ├── SearchBar.tsx
│   │   └── ShowModal.tsx
│   ├── bookcase
│   │   ├── cardSection
│   │   │   ├── AddBookCard.tsx
│   │   │   ├── BookCard.tsx
│   │   │   └── Empty.tsx
│   │   ├── Card.tsx
│   │   ├── Navigation.tsx
│   │   ├── NoCards.tsx
│   │   ├── PeriRead.tsx
│   │   ├── PostRead.tsx
│   │   ├── PreRead.tsx
│   │   ├── Total.tsx
│   │   └── index.ts
│   ├── common
│   │   ├── styled
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── LabelHidden.tsx
│   │   │   ├── LabelQuestion.tsx
│   │   │   ├── NoteModalWrapper.tsx
│   │   │   └── Popup.tsx
│   │   ├── AlertLabel.tsx
│   │   ├── CommonLayout.tsx
│   │   ├── NavHeader.tsx
│   │   ├── InputEmail.tsx
│   │   ├── InputPwd.tsx
│   │   ├── MainHeader.tsx
│   │   ├── MainLayout.tsx
│   │   ├── NavHeader.tsx
│   │   ├── NavWrapper.tsx
│   │   ├── PopUpDelete.tsx
│   │   ├── PopUpExit.tsx
│   │   └── index.ts
│   ├── detail
│   │   ├── DetailArticleWrapper.tsx
│   │   ├── DetailArticleWrapperLabeling.tsx
│   │   ├── ExamplePeriNote.tsx
│   │   ├── ExamplePreNote.tsx
│   │   ├── ExamplePreNoteLabeling.tsx
│   │   ├── StepUpOnExample.tsx
│   │   └── index.ts
│   ├── landing 
│   │   ├── LandingCard.tsx
│   │   ├── LandingOne.tsx
│   │   ├── LandingTwo.tsx
│   │   ├── LandingThree.tsx
│   │   ├── LandingFour.tsx
│   │   ├── LandingFive.tsx
│   │   ├── LandingHeader.tsx
│   │   ├── LandingFooter.tsx
│   │   └── index.ts
│   ├── login
│   │   ├── LoginForm.tsx
│   │   ├── LoginNavSection.tsx
│   │   └── index.ts
│   ├── main
│   │   ├── Banner.tsx
│   │   ├── Recent.tsx
│   │   └── index.ts
│   ├── myPage
│   │   ├── BookComment.tsx
│   │   ├── BottomContent.tsx
│   │   ├── TopBanner.tsx
│   │   ├── TopContent.tsx
│   │   └── index.ts
│   ├── signup
│   │   ├── FirstStep.tsx
│   │   ├── SecondStep.tsx
│   │   ├── ThirdStep.tsx
│   │   ├── LastStep.tsx
│   │   └── index.ts
│   └── Router.tsx
├── pages
│   ├── AddBook.tsx
│   ├── Bookcase.tsx
│   ├── BookNote.tsx
│   ├── DetailBookNote.tsx
│   ├── DetailExample.tsx
│   ├── Landing.tsx
│   ├── Login.tsx
│   ├── Main.tsx
│   ├── MyPage.tsx
│   ├── Signup.tsx
│   ├── Test.tsx
│   ├── ToBe.tsx
│   └── index.ts
├── states
│   └── index.ts
├── styles
│   ├── globalStyle.ts
│   ├── styled.d.ts
│   └── theme.ts
├── utils
│   ├── lib
│   │   ├── api.ts
│   │   └── index.ts
│   ├── check.ts
│   ├── dataType.ts
│   └── mockData.ts
├── App.tsx
├── index.tsx
└── tsconfig.json
```
<br />

## ✉ 커밋 컨벤션
|제목|내용|
|------|---|
|init|작업 세팅 커밋 (패키지 설치 등)|
|feat|기능 추가 및 변경 (화면 영향 o)|
|design|only css 변경|
|fix|기존의 버그 수정|
|refactor|더 좋은 코드 개선 (화면 영향 x)|
|etc|문서 작성 or 그 외 커밋(주석, 개행 등)|
<br />

## 👨‍💻👩‍💻 팀원

- [👧 김소령](https://github.com/orgs/TeamBookTez/people/soryeongk)
- [🧑 이주함](https://github.com/orgs/TeamBookTez/people/soryeongk)
- [👱‍♂️ 석상언](https://github.com/orgs/TeamBookTez/people/soryeongk)
- [🤴 김규민](https://github.com/orgs/TeamBookTez/people/soryeongk)
