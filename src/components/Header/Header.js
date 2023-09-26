import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import SocialMedia from "../SocialMedia/SocialMedia.component";
import {HeaderContainer, Div1, Div2, NavLink} from './HeaderStyles';
import pdf from './Miguel_s_Resume'

const Header = () => {
  const { route } = useRouter();

  return (
    <HeaderContainer sticky>
      {route === '/' ? (
        <Div1>
          <span style={{display: 'flex', alignItems: 'center'}}>
            Miguel González
          </span>
        </Div1>
      ) : (
        <Div1>
          <Link href='/'>
            <a style={{display: 'flex', alignItems: 'center'}}>
              Miguel González
            </a>
          </Link>
        </Div1>
      )
      }
      <Div2>
        <li>
          <Link href={route === '/all-projects' ? "/#about" : '#about'}>
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href={route === '/all-projects' ? "/#tech" : '#tech'}>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="https://mrmiguetara.github.io/mrmiguetara-terminal">
            Open in Terminal Version
          </Link>
        </li>
        <li>
          <Link href={pdf} target="_blank" rel="noreferrer" download="Miguel_Resume">
            Download My Resume
          </Link>
        </li>
      </Div2>
      <SocialMedia />
    </HeaderContainer>
  )
};

export default Header;
