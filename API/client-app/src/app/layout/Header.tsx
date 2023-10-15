import { Container, Menu, MenuItem } from "semantic-ui-react";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";

export default function Header() {
    return (
        <Menu inverted fixed='top'>
            <Container className="navigation">
                <div className = "navigation-brand">
                <MenuItem header >
                    <img src={logo} alt="Ириски" />
                    <MenuItem style={{color: "rgba(55, 65, 117, 1)", fontSize: "32", fontWeight: "bold"}} name="Инкубатор" />
                </MenuItem>
                </div>
                
                <div className = "navigation-items">
                
                    <MenuItem style={{color: "rgba(55, 65, 117, 1)"}} name="Все предложения" />
                    <MenuItem style={{color: "rgba(55, 65, 117, 1)"}} name="Мои идеи" />
                    <MenuItem style={{color: "rgba(55, 65, 117, 1)"}} name="Закладки" />
                    <MenuItem style={{color: "rgba(55, 65, 117, 1)"}} header>
                        <img src={user} alt="User" />
                    </MenuItem>
</div>
            </Container>
        </Menu>
    )
}