import { useRouter } from 'next/router';
import Link from 'next/link';
import { Routes } from './constants';
import * as Styled from './styled';

const Header = () => {
  const router = useRouter();

  return (
    <Styled.Header>
      <Styled.Logo>
        <Link href="/">TOP MOVIES</Link>
      </Styled.Logo>
      <Styled.Navigation>
        {Routes.map((route) => {
          return (
            <Link key={route.id} href={route.url} passHref>
              <Styled.NavLink $isActive={router.pathname.includes(route.url)}>
                {route.title}
              </Styled.NavLink>
            </Link>
          );
        })}
      </Styled.Navigation>
    </Styled.Header>
  );
};

export default Header;
