import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='portrait'>
                            <img
                                src={require('../../static/portrait2.jpg')}
                                alt='portrait'
                            />
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <p>
                            I'm a Computer Science major and Multidisciplinary
                            Design minor at UMichigan Engineering and pursuing a
                            career in full stack software engineering. I enjoy
                            creating web apps during my free time and am always
                            looking for new opportunities to grow.
                        </p>
                        <p>
                            The number of paths to take are endless, and I'm
                            excited to be a part of this technological world
                            that is rapidly transforming our lives everyday.
                        </p>
                        <p>
                            I have a passion for guitar, basketball, dancing,
                            footracing, and billiards, all of which I would love
                            to talk about if you're interested!
                        </p>
                        <p>
                            Feel free to contact me with any questions or
                            comments!
                        </p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-6'>
                        <div className='education'>
                            <div className='aboutTitle'>Education</div>
                            {/* <div>UNIVERSITY OF MICHIGAN - COLLEGE OF ENGINEERING</div> */}
                            <div>
                                University of Michigan - College of Engineering
                            </div>
                            <div>
                                Bachelor of Engineering in Computer Science
                            </div>
                            <div>Minor in Multidisciplinary Design</div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='courses'>
                            <div className='aboutTitle'>Favorite Courses</div>
                            <div>Data Structures & Algorithms</div>
                            <div>Multidisciplinary Software Engineering</div>
                            <div>Web Information & Database Systems</div>
                            <div>Database Management Systems</div>
                        </div>
                    </div>
                </div>

                <div className='aboutTitle'>Skills</div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='skillTitle'>Languages</div>
                        <div className='skillRow row'>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/javascript.png')}
                                    skillName='JavaScript'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/python.png')}
                                    skillName='Python'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/c++.png')}
                                    skillName='C++'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/java.png')}
                                    skillName='Java'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/kotlin.png')}
                                    skillName='Kotlin'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='skillTitle'>Front-end</div>
                        <div className='skillRow row'>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/react.png')}
                                    skillName='React'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/redux.png')}
                                    skillName='Redux'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/enzyme.png')}
                                    skillName='Enzyme'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/sass.png')}
                                    skillName='Sass'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/bootstrap.png')}
                                    skillName='Bootstrap'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='skillTitle'>Server-side</div>
                        <div className='skillRow row'>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/postman.png')}
                                    skillName='Postman'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/node.png')}
                                    skillName='Node'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/express.png')}
                                    skillName='Express'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/socketio.png')}
                                    skillName='Socket.io'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/flask.png')}
                                    skillName='Flask'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='skillTitle'>Database</div>
                        <div className='skillRow row'>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/mongodb.png')}
                                    skillName='MongoDB'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/mongoose.png')}
                                    skillName='Mongoose'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/sql.png')}
                                    skillName='SQL'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/firebase.png')}
                                    skillName='Firebase'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='skillTitle'>Other</div>
                        <div className='skillRow row'>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/github.png')}
                                    skillName='Github'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/gitlab.png')}
                                    skillName='Gitlab'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/vscode.png')}
                                    skillName='VSCode'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/xcode.png')}
                                    skillName='XCode'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/heroku.png')}
                                    skillName='Heroku'
                                />
                            </div>
                            <div className='col-2'>
                                <Skill
                                    icon={require('../../static/skills/aws.png')}
                                    skillName='AWS'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Skill = props => {
    return (
        <div className='skillBlock'>
            <img className='skillIcon' src={props.icon} alt={props.skillName} />
            <div>{props.skillName}</div>
        </div>
    );
};

export default About;
