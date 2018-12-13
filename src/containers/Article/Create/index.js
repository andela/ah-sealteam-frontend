import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { saveArticle } from '../../../actions/articleActions';
import { connect } from 'react-redux';
import ArticleForm from '../../../components/Article/ArticleForm';

class Create extends Component {
    state = {
        article: {
            title: '',
            description: '',
            tags: [],
            body: ''
        },
        validation: {},
        errors: {
            title: [''],
            description: [''],
            tags: [''],
            body: ['']
        },
        success: null,
        file: null
    };

    handleChange = e => {
        this.setState({
            article: {
                ...this.state.article,
                [e.target.name]: e.target.value
            }
        });
    };

    handleTagsChange = e => {
        let data = [];
        data = e.target.value.split(',');
        data = data.map(tag => tag.trim());
        this.setState({
            article: {
                ...this.state.article,
                tags: data
            }
        });
    };
    handleEditorChange = e => {
        this.setState({
            article: {
                ...this.state.article,
                body: e
            }
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { saveArticle } = this.props;
        const data = { article: this.state.article };
        saveArticle(data.article);
        this.props.article.data.article
            ? this.setState(
                  {
                      success: 'Successfully Published your article'
                  },
                  () => {
                      setTimeout(() => {
                          this.setState({ success: null }, () => {
                              this.props.history.push(`/`);
                          });
                      }, 1500);
                  }
              )
            : this.props.article.errors
            ? this.setState({
                  errors: {
                      ...this.state.errors,
                      ...this.props.article.errors.data.article
                  }
              })
            : this.setState({ errors: this.state.errors });
    };
    render() {
        return (
            <ArticleForm
                errors={this.state.errors}
                handleChange={this.handleChange}
                handleEditorChange={this.handleEditorChange}
                handleTagsChange={this.handleTagsChange}
                handleSubmit={this.handleSubmit}
                success={this.state.success}
            />
        );
    }
}

const mapStateToProps = state => ({
    article: state.articleCRD
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            saveArticle
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Create);
