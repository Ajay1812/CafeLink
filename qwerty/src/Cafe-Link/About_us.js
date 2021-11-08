import React, { Component } from "react";

class About_us extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="Contact">
                <h2 className=""> About Us</h2> <br />
                <table>
                    <tr>
                        <td>
                            <p>
                                Welcome to CafeLink, your number one source for all things
                                product, ie: advertising there menu, reviews, on going events and offers.. We're dedicated to
                                giving you the very best of CafeLink, with a focus on three
                                characteristics, ie: dependability, customer service and
                                uniqueness.Founded in 2021 by Aaryan Gupta, CafeLink
                                has come a long way from its beginnings in a starting 
                                and are thrilled to be a part of the
                                [adjective, ie: quirky, eco-friendly, fair trade] wing of the
                                [industry type, ie: fashion, baked goods, watches] industry. We
                                hope you enjoy our products as much as we enjoy offering them to
                                you. If you have any questions or comments, please don't
                                hesitate to contact us. Sincerely, Name, [title, ie: CEO,
                                Founder, etc.]
                            </p>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default About_us;
