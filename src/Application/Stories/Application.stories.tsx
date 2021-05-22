import React from 'react';
import {MemoryRouter} from 'react-router';

import App from '../App';

export default {
  title: 'Main/Application',
};

export const _Application = () => <MemoryRouter><App/></MemoryRouter>;
