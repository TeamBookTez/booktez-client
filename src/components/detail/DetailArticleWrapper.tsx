import styled from "styled-components";

interface DetailArticleWrapperProps {
  title: string;
}

const IIIIIII = styled.div`
  width: 5.2rem;
  height: 5.2rem;
  background-color: black;
`;

export default function DetailArticleWrapper(props: DetailArticleWrapperProps) {
  const { title } = props;

  return (
    <section>
      {/* 이미지 div */}
      <IIIIIII></IIIIIII>
      <h3>{title}</h3>
      <article></article>
    </section>
  );
}
