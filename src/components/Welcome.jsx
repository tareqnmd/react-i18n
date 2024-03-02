import { useTranslation } from 'react-i18next';

const Welcome = () => {
	const { t } = useTranslation();
	return <h1 className="flex-center mt-20">{t('home.header')}</h1>;
};

export default Welcome;
