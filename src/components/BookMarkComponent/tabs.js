import React from 'react';
import './tabs.scss';
const Tabs = props => (
    <section id="tabs">
        <div className="container">
            <h6 className="section-title h1">Tabs</h6>
            <div className="row">
                <div className="col-xs-12 w-100">
                    <nav>
                        <div
                            className="nav nav-tabs nav-fill"
                            id="nav-tab"
                            role="tablist"
                        >
                            <a
                                className="nav-item nav-link active"
                                id="nav-bookmark-tab"
                                data-toggle="tab"
                                href="#nav-bookmark"
                                role="tab"
                                aria-controls="nav-bookmark-home"
                                aria-selected="true"
                            >
                                BookMarks
                            </a>
                            <a
                                className="nav-item nav-link"
                                id="nav-publish-tab"
                                data-toggle="tab"
                                href="#nav-publish"
                                role="tab"
                                aria-controls="nav-publish"
                                aria-selected="false"
                            >
                                Published
                            </a>
                            <a
                                className="nav-item nav-link"
                                id="nav-reads-tab"
                                data-toggle="tab"
                                href="#nav-reads"
                                role="tab"
                                aria-controls="nav-reads"
                                aria-selected="false"
                            >
                                My reads
                            </a>
                            <a
                                className="nav-item nav-link"
                                id="nav-favorite-tab"
                                data-toggle="tab"
                                href="#nav-favorite"
                                role="tab"
                                aria-controls="nav-favorite"
                                aria-selected="false"
                            >
                                Favorites
                            </a>
                        </div>
                    </nav>
                    <div
                        className="tab-content py-3 px-3 px-sm-0"
                        id="nav-tabContent"
                    >
                        <div
                            className="tab-pane fade show active"
                            id="nav-bookmark"
                            role="tabpanel"
                            aria-labelledby="nav-bookmark-tab"
                        >
                            <div className="p-3">{props.bookmarks}</div>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="nav-publish"
                            role="tabpanel"
                            aria-labelledby="nav-publish-tab"
                        >
                            <p>Thias are published</p>
                        </div>
                        <div
                            className="tab-pane fade"
                            id="nav-reads"
                            role="tabpanel"
                            aria-labelledby="nav-reads-tab"
                        >
                            Et et consectetur ipsum labore excepteur est
                            proident excepteur ad velit occaecat qui minim
                            occaecat veniam. Fugiat veniam incididunt anim
                            aliqua enim pariatur veniam sunt est aute sit dolor
                            anim. Velit non irure adipisicing aliqua ullamco
                            irure incididunt irure non esse consectetur nostrud
                            minim non minim occaecat. Amet duis do nisi duis
                            veniam non est eiusmod tempor incididunt tempor
                            dolor ipsum in qui sit. Exercitation mollit sit
                            culpa nisi culpa non adipisicing reprehenderit do
                            dolore. Duis reprehenderit occaecat anim ullamco ad
                            duis occaecat ex.
                        </div>
                        <div
                            className="tab-pane fade"
                            id="nav-favorite"
                            role="tabpanel"
                            aria-labelledby="nav-favorite-tab"
                        >
                            Et et consectetur ipsum labore excepteur est
                            proident excepteur ad velit occaecat qui minim
                            occaecat veniam. Fugiat veniam incididunt anim
                            aliqua enim pariatur veniam sunt est aute sit dolor
                            anim. Velit non irure adipisicing aliqua ullamco
                            irure incididunt irure non esse consectetur nostrud
                            minim non minim occaecat. Amet duis do nisi duis
                            veniam non est eiusmod tempor incididunt tempor
                            dolor ipsum in qui sit. Exercitation mollit sit
                            culpa nisi culpa non adipisicing reprehenderit do
                            dolore. Duis reprehenderit occaecat anim ullamco ad
                            duis occaecat ex.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export default Tabs;
