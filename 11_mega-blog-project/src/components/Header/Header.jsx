import React from "react";
import { Container, Logo, Logout } from "../index";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Container from "./../containers/Container";

function Header() {
  const authStatus = useSelector((state) => state.auth.status); // Get auth status from Redux store
  const navigate = useNavigate(); // Get the navigate function from React Router

  // Define navigation items based on auth status

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

// the following section should be the logout button if authenticated

          <ul className=" flex ml-auto">
            {navItems.map((item) => {
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null;
            })}


            // Only show logout button if authenticated
            
            {authStatus && (
              // Logout button
              <li>
                <Logout />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
