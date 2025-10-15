import { useState } from "react";

const About = () => {
    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    });


    return (
        <>
            <div className="container">
                <h1 className="my-3">About Us</h1>
                <div className="accordion rounded" style={myStyle} id="accordionPanelsStayOpenExample">

                    {/* Founder */}
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>About Founder</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <strong>Sriram Kranthi Kumar</strong>
                                <p>
                                    I’m a React Developer skilled in building responsive, high-performance web applications using React and JavaScript.
                                    I specialize in component-based architecture, efficient state management with Redux, and modern frameworks like Next.js.
                                </p>
                                <p>
                                    I focus on creating accessible, visually appealing, and performant web interfaces with a strong emphasis on clean UI/UX design.
                                    I’m also experienced in frontend testing, deployment pipelines, and version control using Git, GitHub, and Vercel.
                                </p>
                                <p>
                                    <strong>Core Skills:</strong> React JS, JavaScript (ES6+), HTML, TailwindCSS, Bootstrap, CSS, Responsive Design, GSAP, Git, GitHub, VS Code, Vercel, React Testing Library.
                                </p>
                                <p>
                                    I’m passionate about writing clean, maintainable code and delivering production-grade web solutions that merge functionality with great design.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>About Text Conversion</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <strong>Why I Created Text Conversion</strong>
                                <p>
                                    I built Text Conversion as a learning project while following the <strong>CodeWithHarry</strong> tutorial.
                                    My goal was to practice and improve my skills in <strong>React, JavaScript, and front-end development</strong> by creating a real, usable application.
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>About Contact</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <p>
                                    <strong>Name:</strong> Sriram Kranthi Kumar<br />
                                    <strong>Email:</strong> <a href="mailto:sriramkranthikumar7672@gmail.com">sriramkranthikumar7672@gmail.com</a><br />
                                    <strong>Phone:</strong> <a href="tel:+916304436602">+91 63044 36602</a><br />
                                    <strong>Location:</strong> Hyderabad, Telangana, India
                                </p>
                                <p>
                                    <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sriram-kranthikumar-714167346" target="_blank" rel="noopener noreferrer">linkedin.com/in/sriram-kranthikumar</a><br />
                                    <strong>GitHub:</strong> <a href="https://github.com/Kranthi6600" target="_blank" rel="noopener noreferrer">github.com/Kranthi6600</a><br />
                                    <strong>X (Twitter):</strong> <a href="https://x.com/kranthiz7" target="_blank" rel="noopener noreferrer">x.com/kranthiz7</a>
                                </p>
                                <p>
                                    <strong>Role:</strong> Aspiring Front-End Developer<br />
                                    <strong>Resume:</strong> <a href="https://drive.google.com/file/d/1cSI9y7KfIFLJtaM0_qGoTdxy3ChNawyn/view?usp=drive_link" target="_blank" rel="noopener noreferrer">View Resume</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* New Accordion Item */}
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                style={myStyle}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                            >
                                <strong>About Uses</strong>
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                <p>
                                    <p><strong>Uses of Text Conversion</strong></p>
                                    <p>
                                        Text Conversion is designed to make text manipulation fast, easy, and efficient. Users can perform a variety of operations such as converting text to uppercase or lowercase, removing extra spaces, copying and pasting text, and quickly analyzing word and character counts. It’s useful for developers cleaning code snippets, students formatting essays, content writers preparing articles, or anyone who needs quick text editing without opening multiple apps. </p> <p> I built Text Conversion with privacy in mind. All text transformations happen entirely on the client side — nothing is sent to a server or stored online. This ensures your data remains completely private and secure, giving you confidence to work with sensitive or personal content safely.
                                    </p> Overall, Text Conversion is a lightweight, fast, and secure tool that saves time, reduces errors, and keeps your workflow smooth while respecting your privacy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default About;
