interface Children {
  children: string;
}

export default function Header(props: Children) {
  const children = props.children;

  return <header>{children}</header>;
}
