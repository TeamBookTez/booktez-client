import { Outlet } from "react-router-dom";

export default function BookcaseContainer() {
  return (
    <section>
      <header>서재</header>
      <nav>
        <ul>
          <li>
            <a href="">전체</a>
          </li>
          <li>
            <a href="">도서 전</a>
          </li>
          <li>
            <a href="">독서 중</a>
          </li>
          <li>
            <a href="">독서 완료</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </section>
  );
}
