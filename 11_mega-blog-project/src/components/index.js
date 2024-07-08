import Header from "./Header/Header"; // importing the Header component from Header.js file. Similarly,
import Footer from "./Footer/Footer";
import container from "./containers/Container";
import Logo from "./Logo";
import Logout from "./Header/Logout";
import { Logout } from "../store/authSlice";
import RTE from "./RTE";
import Button from "./Button";
import Input from "./Input";
import { Select } from "./Select";
import { Signup } from "./Signup";
import { Login } from "./Login";
import Post from "./Post";
import PostForm from "./post-from/PostForm";
import PostCard from "./postCard";
import AuthLayout from "./AuthLayout";

export {
  Header,
  Footer,
  container,
  Logo,
  Logout,
  RTE,
  Button,
  Input,
  Select,
  Signup,
  Login,
  Post,
  PostForm,
  PostCard,
  AuthLayout,
}; // exporting the components for reusability in other components.
