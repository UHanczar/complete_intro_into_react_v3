import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { shallow, render } from 'enzyme';
// import renderer from 'react-test-renderer';
// your can't use renderer with enzyme
// enzyme tests only aim component. If you want to go deeper use {render, static}
import store from './../store/store';
import { setSearchTerm } from './../actions/actionCreators';
import Search, { UnwrappedSearch } from './../components/Search';
import ShowCard from'./../components/ShowCard';
import preload from './../../data.json';

test('Search renders correctly', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount shows', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm='' />);
  expect(preload.shows.length).toEqual(component.find(ShowCard).length);
});

test('Search should render correct amount of shows based on search term – without Redux', () => {
  const searchWord = 'black';
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />);
  // component.find('input').simulate('change', { target: { value: searchWord } });
  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});

test('Search should render the correct amount of shows based on search term with Redux', () => {
  const searchWord = 'black';
  store.dispatch(setSearchTerm(searchWord));
  const component = render(
    <Provider store={store}>
      <MemoryRouter>
        <Search shows={preload.shows} />
      </MemoryRouter>
    </Provider>
  );
  // component.find('input').simulate('change', { target: {value: searchWord} });
  const showCount = preload.shows.filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0).length;

  expect(showCount).toEqual(component.find('.show-card').length);
});
