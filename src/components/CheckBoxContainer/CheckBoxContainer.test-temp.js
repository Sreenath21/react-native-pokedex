import React from 'react';
import axios from 'axios';
import CheckBoxContainer from './CheckBoxContainer';
import renderer, {act} from 'react-test-renderer';

describe('CheckBox Container renders correctly', () => {
  it('Should show entries when url is set', async () => {
    const FAKE_HITS = [
      {name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/'},
      {name: 'fighting', url: 'https://pokeapi.co/api/v2/type/2/'},
    ];

    const axiosGetSpy = jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce({data: {results: FAKE_HITS}});

    let component;
    await act(async () => {
      component = renderer.create(<CheckBoxContainer title="Normal" />);
    });
    console.log('COMPONENT', component);
    expect(axiosGetSpy).toBeCalledWith('https://pokeapi.co/api/v2/type');
    expect(component).toMatchSnapshot();
    axiosGetSpy.mockRestore();
  });
});
