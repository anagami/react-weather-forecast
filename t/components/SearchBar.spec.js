import { expect } from 'chai';
import sinon from 'sinon';

import { renderComponent } from '../setup';
import SearchBar from '../../src/components/SearchBar';

describe('<SearchBar /> component', () => {
    let wrapper, defaultProps;

    beforeEach(() => {
        defaultProps = {
            onSubmit: sinon.spy()
        };

        wrapper = renderComponent(SearchBar, defaultProps);
    });

    it('Has correct class and controls', () => {
        expect(wrapper.hasClass('search-form')).to.be.true;
        expect(wrapper.is('form')).to.be.true;
        expect(wrapper.find('input[type="text"]')).to.have.length(1);
        expect(wrapper.find('button[type="submit"]')).to.have.length(1);
    });

    it('Search field is empty', () => {
        expect(wrapper.state('query')).to.be.empty;
    });

    it('On fill search field, state propertly updated', () => {
        wrapper.find('input[type="text"]').simulate('change', {target: {value : 'qwerty'}});
        expect(wrapper.state('query')).to.equal('qwerty');
    });

    it('On submit form fires onSubmit handler with correct arguments', () => {
        wrapper.find('input[type="text"]').simulate('change', {target: {value : 'qwerty'}});
        wrapper.simulate('submit', { preventDefault: sinon.spy() });
        expect(wrapper.instance().props.onSubmit.withArgs('qwerty', 'q').calledOnce).to.be.true;
    });

    it('If search by ZIP, fire handler with correct arguments', () => {
        wrapper.find('input[type="text"]').simulate('change', {target: {value : '123456'}});
        wrapper.simulate('submit', { preventDefault: sinon.spy() });
        expect(wrapper.instance().props.onSubmit.withArgs('123456', 'zip').calledOnce).to.be.true;
    });
});
