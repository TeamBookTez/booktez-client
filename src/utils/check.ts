export function checkEmailType(value: string) {
  const emailRegex =
    /^(([^<>()\].,;:\s@"]+(\.[^<>()\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  return emailRegex.test(value); // 형식에 맞는 경우 true 리턴
}

export function checkNicknameType(value: string) {
  const specialCheck = /[`~!@#$%^&*|\\'";:/?]/gi;

  // 기호 포함 여부
  if (specialCheck.test(value)) {
    return true;
  }

  // 공백 포함 여부
  if (value.search(/\s/) != -1) {
    return true;
  }

  // 문자수 10개 초과 여부
  if (value.length > 10) {
    return true;
  }
}
export function checkPwdType(value: string) {
  const passwordRegex = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*[!@#$%^&*-~])).{8,64}$/;

  return passwordRegex.test(value);
}
