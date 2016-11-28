import React from 'react';

export default class NewsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newsItem: {}};
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.newsItem);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={this.state.newsItem.title}  />
                </label>
                <label>
                    Summary:
                    <textarea value={this.state.newsItem.summary} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}