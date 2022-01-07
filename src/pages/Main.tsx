// import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <main>
      <nav>
        <section>
          <img alt="프로필 사진" />
          <h3>북스테어즈</h3>
        </section>
        <ol>
          <li>홈</li>
          <li>서재</li>
          <li>마이페이지</li>
          <li>곧 만나요</li>
        </ol>
      </nav>
      <section>
        <header>메인</header>
        <section>
          <h2>독서북 사용 가이드북</h2>
          <h5>
            북스테이즈만의 독서법을 사용하여 책을 더욱 효율적으로 체험해보며 내가 가지고 있는 지식을 한계단 아뉘면
            두계단
          </h5>
          <button>독서 체험</button>
          <img alt="일러스트" />
        </section>
        <section>
          <nav>
            <ol>
              <li>전체</li>
              <li>독서 후</li>
              <li>독서 중</li>
              <li>독서 전</li>
            </ol>
          </nav>
          <section>
            <article>
              <img alt="아이콘" />
              <h3>다음 책을 쌓아볼까요?</h3>
              <h4>이정도면 좋겠니아ㅣㅏㄹ</h4>
              <button>+ 책 추가</button>
            </article>
            <article>
              <img alt="책 표지 이미지" />
              <h4>나는 왜 이 일을 하는가?</h4>
              <h5>데이빗 호킨스</h5>
            </article>
          </section>
          {/* <Outlet /> */}
        </section>
      </section>
    </main>
  );
}
