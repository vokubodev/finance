"use client";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  padding: 0.625rem;
  height: 3.125rem;
  background-color: #03001c;
`;

export const Header = () => {
  const router = useRouter();
  function handleLogout() {
    localStorage.removeItem("user_id");
    router.push("/login");
  }
  return (
    <HeaderStyled>
      <div>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </HeaderStyled>
  );
};
