export const escapeHtml = (str: string) => {
  return (
    str
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      // .replace(/&quot;/g, '"')
      // ESLint 설정 때문에 작은 따옴표 표시 불가
      .replace(/&#039;/g, "'")
      .replace(/&#39;/g, "'")
  );
};
