import { useTranslation } from 'react-i18next';

const Welcome = () => {
	const { t } = useTranslation();
	return (
		<>
			<h1 className="flex-center">{t('home.header')}</h1>
		</>
	);
};

export default Welcome;
