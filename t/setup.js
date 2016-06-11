import jsdom from 'jsdom';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { LocalStorage } from 'node-localstorage';
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';


global.document = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
global.window = global.document.defaultView;
global.localStorage = new LocalStorage(__dirname + '/ls-mock');


// let middlewares = [ thunk ],
//     mockStore = configureMockStore(middlewares);

export function renderComponent(ComponentClass, props, reduxState={}) {
    // let component = mount(<ComponentClass {...props} />, {
    //         context: { store: mockStore(reduxState) }
    //     });
    let component = shallow(<ComponentClass {...props} />);

    return component;
}

