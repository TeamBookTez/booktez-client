![image](https://user-images.githubusercontent.com/73876068/148671692-f6cdd096-dab3-4d8e-9b51-443eb3b947ba.png)

## 📚 `북스테어즈`는 어떤 서비스인가요?
진짜 독서가들의 독서법, 북스테어즈 💡
<br/>
북스테어즈는 여러분들의 보다 똑똑한 독서를 돕습니다!
[랜딩페이지 바로가기](https://bookstairs.netlify.app/)
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
### 4. 메인 페이지
적용 사례를 통한 북노트 사용 가이드와 최근 작성한 북노트를 확인할 수 있습니다.

![book-stairs com_login (1)](https://user-images.githubusercontent.com/73876068/150490611-6c6b2b6d-002d-4978-8df4-a1142d8238c2.png)
<br />
<br />
### 5. 적용 사례 페이지
북노트 사용 구체적 예시와 캐러셀 모달을 통한 상세 설명을 제공합니다. 

![book-stairs com_login (4)](https://user-images.githubusercontent.com/73876068/150492076-85420c9f-9379-4006-bae1-cd1e7c830717.png)
<br />
<br />
### 6. 서재 페이지
전체, 독서 전, 독서 중, 독서 완료를 분기 처리하여 북노트 목록을 제공하며, 책추가 페이지로 이어집니다.

![book-stairs com_login (3)](https://user-images.githubusercontent.com/73876068/150491967-a9d27ecd-0763-4c70-920a-0de750753679.png)



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
