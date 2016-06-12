import jsdom from 'jsdom';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { LocalStorage } from 'node-localstorage';


global.document = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
global.window = global.document.defaultView;
global.localStorage = new LocalStorage(__dirname + '/ls-mock');

export function renderComponent(ComponentClass, props) {
    return shallow(<ComponentClass {...props} />);
}
