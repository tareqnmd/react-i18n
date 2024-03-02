import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Counter = () => {
	const [count, setCount] = useState(0);
	const { t } = useTranslation();
	return (
		<div className="flex-center flex-column gap-4 my-20">
			<h3>{t('home.counter.title')}</h3>
			<button
				className="p-4"
				onClick={() => setCount((prev) => prev + 1)}
			>
				{t('home.counter.add')} +1
			</button>
			<p>{t('home.counter.count_value', { count })}</p>
		</div>
	);
};

export default Counter;
