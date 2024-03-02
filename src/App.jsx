import { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';

const locales = {
  en: { title: 'English' },
  bn: { title: 'Bangla' },
};

const App = () => {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState(0);
  return <Suspense fallback="...loading">
    <div>
      <ul>
        {Object.keys(locales).map((locale) => (
          <li key={locale}><button style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(locale)}>
            {locales[locale].title}
          </button></li>
        ))}
      </ul>
      <button onClick={() => setMessages(messages + 1)}>+1 message</button>
      <h1>{t('main.header')}</h1>
      <p>
        {t('main.new_messages', { count: messages })}
      </p>
    </div>
  </Suspense>
};

export default App;
