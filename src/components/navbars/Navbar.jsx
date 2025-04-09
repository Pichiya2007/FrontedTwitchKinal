import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/EscudoPeque.svg';
import { useUserDetails } from '../../shared/hooks/useUserDetails';

const NavLogo = () => {
    return (
        <div className='nav-logo-container'>
            <img
                className='nav-logo'
                width='100%'
                height='100%'
                src={logo}
                alt='EscudoKinal'
            />
        </div>
    )
}

const NavButton = ({ text, onClickHandler }) => {
    return (
        <span className='nav-button' onClick={onClickHandler}>
            {text}
        </span>
    )
}

export const NavBar = () => {

    const { isLogged, logout } = useUserDetails()
    const navigate = useNavigate();

    const handleNavigateToAuthPage = () => {
        navigate('/auth')
    }

    const handleNavigateToSettingPage = () => {
        navigate('/settings')
    }

    const handleNavigateToChannelsPage = () => {
        navigate('/channels')
    }

    const handleLogout = () => {
        logout();
    }

    return (
        <div className='nav-container'>
            <NavLogo/>
            <div className='nav-button-container'>
                <NavButton text='Browse' onClickHandler={handleNavigateToChannelsPage}/>
                {!isLogged ? (
                    <NavButton text='Login' onClickHandler={handleNavigateToAuthPage}/>
                ) : (
                    <div>
                        <NavButton text='My account' onClickHandler={handleNavigateToSettingPage}/>
                        <NavButton text='logout' onClickHandler={handleLogout}/>
                    </div>
                )}
            </div>
        </div>
    )
}