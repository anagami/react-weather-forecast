import { expect } from 'chai';
import sinon from 'sinon';

import { renderComponent } from '../setup';
import FavoriteCity from '../../src/components/FavoriteCity';

describe('<FavoriteCity /> component', () => {
    let wrapper, defaultProps;

    beforeEach(() => {
        defaultProps = {
            id: 2988507,
            name: "Paris",
            country: "FR",
            current: false,
            deleteFavorite: sinon.spy(),
            selectFavorite: sinon.spy()
        };

        wrapper = renderComponent(FavoriteCity, defaultProps);
    });

    it('Has correct classes', () => {
        expect(wrapper.hasClass('list-group-item')).to.be.true;
        expect(wrapper.hasClass('active')).not.be.true;
    });

    it('Has correct title', () => {
        expect(wrapper.text()).to.contain('Paris(FR)');
    });

    it('Has delete button', () => {
        expect(wrapper.find('.delete-icon')).to.have.length(1);
    });

    it('On click component, fires correct handler with props', () => {
        wrapper.simulate('click', { preventDefault: sinon.spy() });
        expect(wrapper.instance().props.selectFavorite.withArgs(defaultProps.id, 'id').calledOnce).to.be.true;
    });

    it('On click delete button, fires correct handler with props', () => {
        wrapper.find('.delete-icon').simulate('click', { preventDefault: sinon.spy(), stopPropagation: sinon.spy() });
        expect(wrapper.instance().props.deleteFavorite.withArgs({id: defaultProps.id}).calledOnce).to.be.true;
    });

    it('Hightlight current city', () => {
        defaultProps.current = true;
        wrapper = renderComponent(FavoriteCity, defaultProps);

        expect(wrapper.hasClass('active')).to.be.true;
    });


    it('On click current city dont run selectFavorite handler', () => {
        defaultProps.current = true;
        wrapper = renderComponent(FavoriteCity, defaultProps);

        wrapper.simulate('click', { preventDefault: sinon.spy() });
        expect(wrapper.instance().props.selectFavorite.called).not.be.true;
    });
});
