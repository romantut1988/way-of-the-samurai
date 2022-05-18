import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="../img/images.png"/>
            </header>
            <nav className="nav">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className="content">
                <div>
                    <img
                        src="data:image/jpeg;base64,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"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New Post
                    </div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
