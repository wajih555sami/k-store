import { Button, Container, Link } from "@mui/material";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Image from "next/image";
import ListMenu from "./ListMenu";
import Search from "./Search";

const optionsLang = ['English', 'Arabic'];
const optionsCurr = ['USD $', 'SAR'];

export default function Header() {
    return (
        <Container maxWidth="lg">
            <div className="h-top">
                <Link href={'/'}>
                    <Image src="/img/logo.svg" alt="K Store Logo" width={186} height={48} />
                </Link>
                <Search />
                <div className="hold-lang-currency">
                    <ListMenu options={optionsLang}></ListMenu>
                    <ListMenu options={optionsCurr}></ListMenu>
                </div>
            </div>
            <div className="h-bottom">
                <ul className="menu">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/products'}>Products</Link>
                    </li>
                    <li>
                        <Link href={'/categories'}>Categories</Link>
                    </li>
                    <li>
                        <Link href={'/offers'}>Offers</Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>Contact Us</Link>
                    </li>
                </ul>
                <ul className="hold-icons">
                    <li>
                        <Link href={'/'}><Image src='/img/chat.svg' alt="icon" width={24} height={24}/></Link>
                    </li>
                    <li>
                        <Link href={'/'}><Image src='/img/heart.svg' alt="icon" width={24} height={24}/></Link>
                    </li>
                    <li>
                        <Link href={'/'}><Image src='/img/bell.svg' alt="icon" width={24} height={24}/></Link>
                    </li>
                    <li>
                        <Link href={'/'}><Image src='/img/user.svg' alt="icon" width={24} height={24}/></Link>
                    </li>
                    <li>
                        <Link href={'/'}><Image src='/img/Cart Icon.svg' alt="icon" width={24} height={24}/></Link>
                    </li>
                </ul>
            </div>
        </Container>
    )
}