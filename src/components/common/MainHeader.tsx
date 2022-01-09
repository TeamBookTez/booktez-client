interface MainHeaderProps {
  children: string;
}

export default function MainHeader(props: MainHeaderProps) {
  const children = props.children;

  return (
    <header>
      <h2>{children}</h2>
    </header>
  );
}
