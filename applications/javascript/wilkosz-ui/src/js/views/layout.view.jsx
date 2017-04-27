// React components
import React, {PropTypes, Component} from 'react';
import {Link} from "react-router-dom";

// Material-ui components
import {
    AppBar,
    Paper,
    BottomNavigation,
    MenuItem,
    IconMenu,
    IconButton,
    Popover,
    Menu,
} from "material-ui";

const appBarStyle = {
    marginBottom: 20,
};

const paperBottomNavStyle = {
    marginTop: 50,
    paddingBottom: 10,
};

export default class LayoutView extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div>
                <div>
                    <AppBar
                        title="joshauwilkosz.com"
                        style={appBarStyle}
                        onLeftIconButtonTouchTap={this.handleTouchTap}
                    />
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        onRequestClose={this.handleRequestClose}
                    >
                        <MenuItem
                            primaryText="Profile"
                            containerElement={<Link to="/profile" />}
                            onTouchTap={this.handleRequestClose}

                        />
                        <MenuItem
                            primaryText="Resume"
                            containerElement={<Link to="/resume" />}
                            onTouchTap={this.handleRequestClose}
                        />
                    </Popover>
                </div>
                {this.state.children}
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 center-md center-sm center-xs center-lg">
                        <Paper zDepth={1} style={paperBottomNavStyle}>
                            <BottomNavigation>
                                <div>
                                    <p>
                                        My Location
                                        <i className="material-icons wilkosz-icon-move">person_pin_circle</i>
                                        Boston,
                                        Massachusetts
                                    </p>
                                </div>
                            </BottomNavigation>
                        </Paper>
                    </div>
                </div>
            </div>
        );
    }
}