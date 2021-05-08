import React from 'react';
import {About} from '../Pages/About';
import {Home} from '../Pages/Home';
import {Lobby} from '../Pages/Lobby';

export default {
  title: 'Pages/Common',
};

export const _Home = () => <Home/>;
export const _About = () => <About/>;
export const _Lobby = () => <Lobby/>;
