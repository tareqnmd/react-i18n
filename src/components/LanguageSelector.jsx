import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const locales = [{
    code: 'en',
    title: 'English',
}, {
    code: 'bn',
    title: 'Bangla',
}, {
    code: 'ar',
    title: 'Arabic',
}];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const languageChange = (e) => {
        // i18n.resolvedLanguage;
        const { value } = e.target
        i18n.changeLanguage(value)
    }
    useEffect(() => {
        i18n.changeLanguage(import.meta.env.VITE_APP_DEFAULT_LANGUAGE)
    }, [i18n])

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n, i18n.language])

    return (
        <select name="lang-selector" onChange={languageChange}>
            {locales.map(item => <option key={item.code} value={item.code}>
                {item.title}
            </option>)}
        </select>
    );
};

export default LanguageSelector;