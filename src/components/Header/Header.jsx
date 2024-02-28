import style from './Header.module.css'
const Header = () => {
    return (
        <header>
            <div>
                <span className={style.logo}>House Staff</span>
                    <ul className={style.list}>
                        <li className={style.listItem}>Про нас</li>
                        <li className={style.listItem}>Контакти</li>
                        <li className={style.listItem}>Кабінет</li>
                    </ul>
            </div>
            <div className={style.present}></div>
        </header>
    )
}

export default Header;