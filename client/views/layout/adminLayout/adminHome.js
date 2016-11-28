/**
 * Created by harishreddy on 11/28/16.
 */

import NewsFormComponent from './components/NewsFormComponent.jsx';

Template.adminLayout.helpers({
    NewsForm() {
        return NewsFormComponent;
    }
})