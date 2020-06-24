/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {ThemeProvider, LightTheme} from '../../index.js';
import {StatefulTabs, Tab, ORIENTATION} from '../index.js';

export default function Scenario() {
  return (
    <ThemeProvider theme={{...LightTheme, direction: 'rtl'}}>
      <div dir="rtl">
        <StatefulTabs orientation={ORIENTATION.vertical}>
          <Tab title="Tab Link 1">Tab 1 content</Tab>
          <Tab title="Tab Link 2">Tab 2 content</Tab>
          <Tab title="Tab Link 3">Tab 3 content</Tab>
        </StatefulTabs>
      </div>
    </ThemeProvider>
  );
}