import * as React from 'react';
import { useState, useEffect } from 'react';
import './index.less'
import Left from '../owns/left.jsx'
import mock from './leftmock.js'
import Content from '../owns/content.jsx'
const FontHome: React.FC<{}> = () => {
    return (
        <Left mock={mock} />
    )
};
export default FontHome;