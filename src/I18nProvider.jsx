import PropTypes from 'prop-types';
import './i18n';

const I18nProvider = ({ children }) => {
    return <>{children}</>;
};

I18nProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default I18nProvider;