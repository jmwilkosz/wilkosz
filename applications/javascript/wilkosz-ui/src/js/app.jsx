// React components
import React, {PropTypes, Component} from 'react';
import {
    HashRouter,
    Route,
    Switch,
    Link,
} from 'react-router-dom';

// Components
import ResumeView from './views/resume.view';
import ProfileView from './views/profile.view';
import LayoutView from './views/layout.view';

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <LayoutView>
                        <Switch>
                            <Route path="/profile" component={ProfileView}/>
                            <Route path="/resume" component={ResumeView} />
                            <Route component={ProfileView}/>
                        </Switch>
                    </LayoutView>
                </div>
            </HashRouter>
        );
    }
}

export default App;



