import { renderComponent , expect } from '../test_helper';
import GitSearch from '../../src/components/git_search';

describe('GitSearch' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(GitSearch);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
