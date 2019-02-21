/* becodeorg/trouvkach
 *
 * /src/client/core/styleGeneral.js - styleGeneral Component
 *
 * coded by Andy, Steve D, Dan, Steve P
 * started at 10/02/2019
 */

import * as React from "react";
import {css} from "emotion";
import {size, flexcolumn, percent, rem} from "koutla-swiss";

import imgLogo from "../../img/logo_test.png";

const styles = {
    container: css({
        ...size(percent(100)),
    }),
    logo: css({
        ...flexcolumn("center", "center"),
        width: rem(20),
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
