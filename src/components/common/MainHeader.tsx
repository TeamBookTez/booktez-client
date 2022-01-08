interface MainHeaderProps {
  children: string;
}

export default function MainHeader(props: MainHeaderProps) {
  const children = props.children;

  return <header>{children}</header>;
}
