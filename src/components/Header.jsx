import LanguageSelector from "./LanguageSelector";

const Header = () => {
    return (
        <header className="flex-center-between border-bottom p-10">
            <h3>React I18n</h3>
            <LanguageSelector />
        </header>
    );
};

export default Header;