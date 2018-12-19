import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { saveArticle, fetchArticle } from '../../../actions/articleActions';
import { connect } from 'react-redux';
import ArticleForm from '../../../components/Article/ArticleForm';
import uploadToCloudinary from '../../../utils/cloudinary';

class Create extends Component {
    state = {
        article: {
            title: '',
            description: '',
            tags: [],
            image: null,
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
        file: null,
        loading: null
    };

    handleImageUpload = e => {
        const imageUrl = e.target.files[0];
        this.setState({ file: imageUrl, loading: true }, () => {
            uploadToCloudinary(this.state.file).then(data => {
                this.setState(
                    { article: { ...this.state.article, image: data } },
                    () => {
                        this.setState({ loading: false });
                    }
                );
            });
        });
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
    handleSubmit = () => {
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
                              const { slug } = this.props.article.data.article;
                              this.props.fetchArticle(slug);
                              this.props.history.push(`/articles/${slug}`);
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
        const article = {
            title: '',
            description: '',
            tags: [],
            body: ''
        };
        return (
            <ArticleForm
                errors={this.state.errors}
                handleChange={this.handleChange}
                handleEditorChange={this.handleEditorChange}
                handleTagsChange={this.handleTagsChange}
                handleImageUpload={this.handleImageUpload}
                handleSubmit={this.handleSubmit}
                actionHeader="Create"
                actionBtn="Publish"
                article={article}
                success={this.state.success}
                loading={this.state.loading}
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
            fetchArticle,
            saveArticle
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Create);
