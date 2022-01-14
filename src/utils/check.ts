export function isEmail(value: string) {
  const emailRegax =
    /^(([^<>()\].,;:\s@"]+(\.[^<>()\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  return emailRegax.test(value); // 형식에 맞는 경우 true 리턴
}
