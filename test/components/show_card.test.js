import ShowCard from '../../src/components/show_card';
import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


test('ShowCard carga el texto enviado', () => {
    const testInfo = { name: "Life is a Test", image: "http://xiostorage.com/wp-content/uploads/2015/10/test.png",
                    startDate: 'Viernes, 1 de enero de 1979', location: "Teatro de Test" };
    const wrapper = mount(
        <ShowCard name={ testInfo.name } image={ testInfo.image } startDate={ testInfo.startDate } location={ testInfo.location } />
    );
    //Testeamos el contenido del Component
    const h4 = wrapper.find('h4');
    expect(h4.text()).toBe(testInfo.name);

    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(testInfo.image);

    const p = wrapper.find('.card-text');
    expect(p.text()).toBe(testInfo.startDate +" " +testInfo.location);
});

describe('Todo component renders the todo correctly', () => {
    it('renders correctly', () => {
        const testInfo = { name: "Life is a Test", image: "http://xiostorage.com/wp-content/uploads/2015/10/test.png",
        startDate: 'Viernes, 1 de enero de 1979', location: "Teatro de Test" };
        const rendered = renderer.create(
            <ShowCard name={ testInfo.name } image={ testInfo.image } startDate={ testInfo.startDate } location={ testInfo.location } />
            );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
  });