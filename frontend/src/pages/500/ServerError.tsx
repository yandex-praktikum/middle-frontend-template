import React from 'react';

import ErrorPageTemplate from '../../components/ErrorPageTemplate';

const ServerError = () => {
  return <ErrorPageTemplate title="500" subtitle="упс, ошибка сервера" />;
};

export default ServerError;
