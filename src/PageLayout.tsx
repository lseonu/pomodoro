import { css } from "@emotion/react";
import { Link, Outlet } from "react-router-dom";

import {
  CaretLeft,
  CaretRight,
  Circles,
  ClockHour4,
  Coin,
  CurrentLocation,
  Home,
  List,
  UserCircle,
  UserPlus,
} from "tabler-icons-react";

const TabBarItem: React.FC<{
  name: string;
  path: string;
  icon: React.ReactNode;
}> = ({ name, path, icon }) => {
  return (
    <Link to={path}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        {icon}
        <div>{name}</div>
      </div>
    </Link>
  );
};

export const PageLayout: React.FC = () => {
  return (
    <div
      css={css`
        display: flex;
        margin-top: 16vh;
        margin-left: 0px;
        flex-direction: column;
        min-height: 100vh;
        width: 100vw;
        font-size: 10px;
      `}
    >
      <header
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 16vh;
          font-size: 9px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 12px;
          margin-left: auto;
          box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          background-color: lightgray;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <TabBarItem
            name="Throw"
            path="/"
            icon={<CurrentLocation size={25} strokeWidth={2} />}
          />
          <div
            css={css`
              display: flex;
              flex-direction: row;
              align-items: start;
              justify-content: space-around;
            `}
          >
            <TabBarItem
              name="Money"
              path="/"
              icon={<Coin size={25} strokeWidth={2} />}
            />
            <div
              css={css`
                display: flex;
                padding: 5px;
              `}
            />
            <TabBarItem
              name="Tomato"
              path="/"
              icon={<Circles size={25} strokeWidth={2} />}
            />
            <div
              css={css`
                display: flex;
                padding: 5px;
              `}
            />
            <TabBarItem
              name="My Profile"
              path="/"
              icon={<UserCircle size={25} strokeWidth={2} />}
            />
          </div>
        </div>

        <div
          css={css`
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: 9px;
            align-items: center;
          `}
        >
          <CaretLeft size={25} strokeWidth={5} />

          <TabBarItem
            name="Friend"
            path="/"
            icon={<UserCircle size={25} strokeWidth={2} />}
          />
          <TabBarItem
            name="Friend"
            path="/"
            icon={<UserCircle size={25} strokeWidth={2} />}
          />
          <TabBarItem
            name="Friend"
            path="/"
            icon={<UserCircle size={25} strokeWidth={2} />}
          />
          <TabBarItem
            name="Friend"
            path="/"
            icon={<UserCircle size={25} strokeWidth={2} />}
          />
          <TabBarItem
            name="Friend"
            path="/"
            icon={<UserCircle size={25} strokeWidth={2} />}
          />
          <TabBarItem
            name="Add Friend"
            path="/"
            icon={<UserPlus size={23} strokeWidth={2} />}
          />
          <CaretRight size={25} strokeWidth={5} />
        </div>
      </header>
      <main
        css={css`
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding-bottom: 60px;
        `}
      >
        <Outlet />
      </main>
      <nav
        css={css`
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100vw;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          padding: 12px;
          margin-left: 0px;
          box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          background-color: lightgray;
        `}
      >
        <TabBarItem
          name="Subject List"
          path="/SubjectList"
          icon={<List size={15} strokeWidth={2} />}
        />
        <TabBarItem
          name="Timer"
          path="/Timer"
          icon={<ClockHour4 size={15} strokeWidth={2} />}
        />
        <TabBarItem
          name="Home"
          path="/"
          icon={<Home size={15} strokeWidth={2} />}
        />
      </nav>
    </div>
  );
};
