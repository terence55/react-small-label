import React from 'react';
import LabelDemo from './LabelDemo';

const config = [
  {
    type: 'label',
    link: '/component/label',
    comp: <LabelDemo />
  }
];

const pageMap = {};
config.forEach(item => (pageMap[item.type] = item.comp));

export default {
  config: config,
  pageMap: pageMap
};
