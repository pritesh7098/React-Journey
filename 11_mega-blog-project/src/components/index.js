import Header from "./Header/Header"; // importing the Header component from Header.js file. Similarly,
import Footer from "./Footer/Footer";
import container from "./containers/Container";
import Logo from "./Logo";
import Logout from "./Header/Logout";
import { Logout } from "../store/authSlice";
import RTE from "./RTE";
import Button from './Button';
import Input from "./Input";
import { Select } from './Select';

export { Header, Footer, container, Logo, Logout, RTE, Button,Input,Select }; // exporting the components for reusability in other components.
