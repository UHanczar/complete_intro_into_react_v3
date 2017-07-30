import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
// your can't use renderer with enzyme
// enzyme tests only aim component. If you want to go deeper use {render, static}
import Search from './../Search';
import ShowCard from'./../ShowCard';
import preload from './../../data.json';

test('Search renders correctly', () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount shows', () => {
  const component = shallow(<Search shows={preload.shows} />);
  expect(preload.shows.length).toEqual(component.find(ShowCard).length);
});

test('Search should render the correct amount of shows based on search term', () => {
  const searchWord = 'black';
  const component = shallow(<Search shows={preload.shows} />);

  component.find('input').simulate('change', { target: {value: searchWord} });
  const showCount = preload.shows.filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0).length;

  expect(component.find(ShowCard).length).toEqual(showCount);
});
