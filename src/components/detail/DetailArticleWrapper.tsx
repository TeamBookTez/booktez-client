interface DetailArticleWrapperProps {
  title: string;
}

export default function DetailArticleWrapper(props: DetailArticleWrapperProps) {
  const { title } = props;

  return (
    <section>
      {/* 이미지 */}
      <h3>{title}</h3>
      <article></article>
    </section>
  );
}
