/* becodeorg/trouvkach
 *
 * /src/client/coponets/home.js - home Component
 *
 * coded by Andy, Steve D, Dan, Steve P
 * started at 21/02/2019
 */

import * as React from "react";
import {css} from "emotion";
import {percent, size} from "koutla-swiss";
import {Link} from "react-router-dom";

import imgLogo from "../../img/dollar_logo.png";

const styles = {
    container: css({
        ...size(percent(100)),
        display: "grid",
        placeItems: "center",
    }),
    logo: css({
        width: percent(55),
        clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
        transition: "1s",

        "&:hover": {
            clipPath: `polygon(50% 0, 100% 50%, 50% 100%, 0 50%)`,
            boxShadow: `0 0 8px white`,
        },
    }),
};

export default class Home extends React.Component {
    render() {
        return (
            <Link to="/mapPage">
                <div className={styles.container}>
                    <img className={styles.logo} src={imgLogo} alt={"logo"} />
                </div>
            </Link>
        );
    }
}
