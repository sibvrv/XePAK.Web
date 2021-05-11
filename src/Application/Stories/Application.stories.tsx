import React from 'react';
import App from '../App';
import {MemoryRouter} from 'react-router';

export default {
  title: 'Main/Application',
};

export const _Application = () => <MemoryRouter><App/></MemoryRouter>;
