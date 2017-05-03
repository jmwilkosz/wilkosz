// React components
import React from 'react';

// Material-ui components
import {
    AppBar,
    Paper,
    BottomNavigation,
    Card,
    CardText,
    CardTitle
} from "material-ui";

// Components
import ResumeComponent from '../components/resume.component';

const Profile = () => (
    <Card>
        <CardTitle title={<div><i className="material-icons wilkosz-icon-move">person</i>Profile</div>}
                   subtitle="Joshua Wilkosz"/>
        <CardText>
            <p><i>A Software Engineer and Maker</i></p>
            <ul>
                <li className="wilkosz-no-list"><i className="material-icons wilkosz-icon-list">email</i>me@joshuawilkosz.com</li>
                <li className="wilkosz-no-list"><i className="material-icons wilkosz-icon-list">insert_link</i><a
                    href="https://github.com/wilkosz">https://github.com/wilkosz</a></li>
            </ul>
        </CardText>
    </Card>
);

const NiuginiHelicopters = () => (
    <Card>
        <CardTitle
            title={<div><i className="material-icons wilkosz-icon-move">airplanemode_active</i>Niugini Helicopters PTY.
                LTD.</div>} subtitle="Software Engineer | Jul2016-Current"/>
        <CardText>
            Github: <a href="https://github.com/wilkosz/Aviation">github.com/wilkosz/Aviation</a>
            <p>Continuous feature development and integration of a central business platform, targeted at managing
                helicopters, resources, and most importantly time. Platform consists of:</p>
            <ul>
                <li>JSON RESTful web service</li>
                <li>React UI</li>
            </ul>
            <p>Technologies: <i>Linux, React, MySQL, and Java EE</i></p>
        </CardText>
    </Card>
);

const PremierTechnologies = () => (
    <Card>
        <CardTitle
            title={<div><i className="material-icons wilkosz-icon-move">credit_card</i>Premier Technologies</div>}
            subtitle="Software Engineer  | Oct2015-Mar2017"/>
        <CardText>
            <p>Premier's Portfolio includes a complete suite of business solutions for Cloud Contact Services, Payments,
                and Receivables on an International Level.</p>
            <p>Projects: </p>
            <ul>
                <li>API service integration with clients and vendors</li>
                <li>Support Management Portal which allowed for more effective and efficient servicing of clients</li>
            </ul>
            <p><i>Technologies: C#, .NET, Internet Information Services, and MSSQL</i></p>
            <p><i>Website: <a href="http://www.premier.com.au/">http://www.premier.com.au</a></i></p>
        </CardText>
    </Card>
);

const OshiiDigital = () => (
    <Card>
        <CardTitle title={<div><i className="material-icons wilkosz-icon-move">web</i>Oshii Digital</div>}
                   subtitle="Co Founder/Developer | Jan2013-Jul2015"/>
        <CardText>
            <p>Engineering software solutions for businesses and clients. The company focused on website and application
                solutions, including:</p>
            <ul>
                <li>Integrations with medical management system Appointuit</li>
                <li>Front-end and back-end engineering solutions</li>
                <li>Digital marketing strategies</li>
            </ul>
            <p><i>Technologies: HTML/CSS, C#, and PHP</i></p>
            <p><i>Website: <a href="http://oshiidigital.com/">http://oshiidigital.com</a></i></p>
        </CardText>
    </Card>
);

class ProfileView extends React.Component {

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
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="box wilkosz-padding-bottom">
                                    <Profile />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="box wilkosz-padding-bottom">
                                    <NiuginiHelicopters />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="box wilkosz-padding-bottom">
                                    <PremierTechnologies />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="box wilkosz-padding-bottom hide-lg">
                                    <OshiiDigital />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 center-md center-sm center-xs center-lg">
                        <div className="box " ref="pdfComponent">
                            <Card>
                                {this.state.pdf.hide
                                ? <div></div>
                                : <ResumeComponent props={this.state.pdf}/>
                                }
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileView