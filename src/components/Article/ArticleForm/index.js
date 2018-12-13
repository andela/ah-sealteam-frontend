import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import SweetAlert from 'react-bootstrap-sweetalert';
import 'react-quill/dist/quill.snow.css';
import './index.css';

export default class ArticleForm extends Component {
    editorModules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6] }],
            [{ color: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ['link', 'image'],
            ['clean']
        ]
    };

    render() {
        let titleError, descriptionError, bodyError, tagsError;
        if (this.props.errors) {
            titleError = this.props.errors.title[0];
            descriptionError = this.props.errors.description[0];
            bodyError = this.props.errors.body[0];
            tagsError = this.props.errors.tags[0];
        }
        return (
            <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                    <h3 className="text-center">Create Article</h3>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="form-control"
                                onChange={this.props.handleChange}
                            />
                            <span className="text-danger">
                                <h6>{titleError}</h6>
                            </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                className="form-control"
                                onChange={this.props.handleChange}
                            />
                            <span className="text-danger">
                                <h6>{descriptionError}</h6>
                            </span>
                        </div>
                        <div className="form-group">
                            <ReactQuill
                                id="text-editor"
                                modules={this.editorModules}
                                name="body"
                                theme="snow"
                                className="quill-height article-body"
                                onChange={this.props.handleEditorChange}
                                placeholder="Write Something...,"
                            />
                            <span className="text-danger">
                                <h6>{bodyError}</h6>{' '}
                            </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="tags">Tags</label>
                            <input
                                type="text"
                                name="tags"
                                id="tags"
                                className="form-control"
                                placeholder="tag1, tag2, tag3"
                                onChange={this.props.handleTagsChange}
                            />
                            <span className="text-danger">
                                <h6>{tagsError}</h6>
                            </span>
                        </div>
                        {this.props.success ? (
                            <SweetAlert
                                success
                                title="Successfully published your article."
                            />
                        ) : (
                            ''
                        )}
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                onClick={this.props.handleSubmit}
                            >
                                Publish Article
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
