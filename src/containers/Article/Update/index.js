import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateArticle, fetchArticle } from '../../../actions/articleActions';
import ArticleForm from '../../../components/Article/ArticleForm';
import uploadToCloudinary from '../../../utils/cloudinary';

class Update extends Component {
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
        loading: false
    };

    componentDidMount() {
        const { slug } = this.props.match.params;
        this.props.fetchArticle(slug);
        this.setState({ article: { ...this.props.article.data } });
    }

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
        const { slug } = this.props.match.params;
        const { updateArticle } = this.props;
        const data = { article: this.state.article };
        updateArticle(slug, data.article);
        this.props.article.updated
            ? this.setState(
                  {
                      success: 'Successfully Updated your article'
                  },
                  () => {
                      setTimeout(() => {
                          this.setState({ success: null }, () => {
                              const { slug } = this.props.match.params;
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
                      ...this.props.article.errors.data.errors
                  }
              })
            : this.setState({ errors: this.state.errors });
    };

    render() {
        if (this.props.article.errors) {
            if (this.props.article.errors.status === 404) {
                this.props.history.push('/not_found');
            }
        }
        return this.props.article.fetched ? (
            <div>
                <ArticleForm
                    errors={this.state.errors}
                    handleChange={this.handleChange}
                    handleEditorChange={this.handleEditorChange}
                    handleTagsChange={this.handleTagsChange}
                    handleSubmit={this.handleSubmit}
                    handleImageUpload={this.handleImageUpload}
                    actionHeader="Edit"
                    actionBtn="Update"
                    loading={this.state.loading}
                    article={this.props.article.data}
                    success={this.state.success}
                />
            </div>
        ) : (
            'Loading...'
        );
    }
}

const mapStateToProps = state => ({
    article: state.articleCRD
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            updateArticle,
            fetchArticle
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Update);
