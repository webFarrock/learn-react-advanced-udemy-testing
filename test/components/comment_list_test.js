import {renderComponent, expect} from '../test_helper.js';
import CommentList from '../../src/components/comment_list.js';

describe('CommentList', () => {
    let component;

    beforeEach(() => {
        const props = { comments: ['new coomment', 'other comment' ] };
        component = renderComponent(CommentList, null, props);
    });

    it('shows an LI for each comment', () => {
        console.log('!!! ', component.find('li'));
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each  comment that is provided', () => {
        expect(component).to.contain('new coomment');
        expect(component).to.contain('other comment');
    });
});