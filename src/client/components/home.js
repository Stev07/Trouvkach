/* becodeorg/trouvkach
 *
 * /src/client/core/styleGeneral.js - styleGeneral Component
 *
 * coded by Andy, Steve D, Dan, Steve P
 * started at 10/02/2019
 */

import * as React from "react";
import {css} from "emotion";
import {flexrow, size, percent} from "koutla-swiss";

const styles = {
    container: css({
        ...size(percent(100)),
    }),
    logo: {
        ...flexrow("center", "center,"),
        color: "white",
    },
};

export default class Home extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.logo}>{"Logo"}</h1>
            </div>
        );
    }
}
