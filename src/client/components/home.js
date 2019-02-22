/* becodeorg/trouvkach
 *
 * /src/client/coponets/home.js - home Component
 *
 * coded by Andy, Steve D, Dan, Steve P
 * started at 21/02/2019
 */

import * as React from "react";
import {css} from "emotion";
import {flexcolumn, percent, size} from "koutla-swiss";

import imgLogo from "../../img/logo_test.png";

const styles = {
    container: css({
        ...flexcolumn("center", "center"),
        ...size(percent(100)),
    }),
    logo: css({
        width: percent(50),
    }),
};

export default class Home extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <img className={styles.logo} src={imgLogo} alt={"logo"} />
            </div>
        );
    }
}
