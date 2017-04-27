// React components
import React, {PropTypes, Component} from 'react';

// Material-ui components
import {
    FloatingActionButton
} from "material-ui";
import FileDownload from 'material-ui/svg-icons/file/file-download';

// Components
import ResumeComponent from '../components/resume.component';

const style = {
    fontSize: 50,
};

class ResumeView extends React.Component {

    state = {
        pdf: {
            width: 1000,
            hide: true
        }
    };

    handleResize() {
        let pdf = {
            width: window.innerWidth,
            hide: false
        };

        if (pdf.width > 1024) {
            pdf.width = pdf.width / 2 - 20;
        } else if (pdf.width > 768) {
            pdf.width = 550;
        } else if (pdf.width < 768) {
            pdf.hide = true;
        }
        this.setState({pdf: pdf});
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this))
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 center-md center-sm center-xs center-lg">
                        <div className="box " ref="pdfComponent">
                            <ResumeComponent props={this.state.pdf}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 center-md center-sm center-xs center-lg">
                        <div className="box">
                            <FloatingActionButton style={style} href="https://docs.google.com/document/d/19iUy9yWdQps8xeUAHZ28JkOeM9ILAKTTpQP7VTC2CUU/edit?usp=sharing">
                                <FileDownload/>
                            </FloatingActionButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResumeView;