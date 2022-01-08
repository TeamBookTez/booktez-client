export default function LoginForm() {
  return (
    <form>
      <label>이메일</label>
      <input placeholder="이메일을 입력해 주세요" />
      <label>비밀번호</label>
      <input placeholder="비밀번호를 입력해 주세요" />
      <button>로그인</button>
      <p>
        이메일/비밀번호를 잊어버리셨나요?
        <br />
        여기로 문의주세요.
      </p>
    </form>
  );
}
