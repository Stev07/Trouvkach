/* becodeorg/trouvkach
 *
 * /src/client/components/main.js - Main Component
 *
 * coded by Andy, Steve D, Dan, Steve P
 * started at 10/02/2019
 */

import * as React from "react";
import {css} from "emotion";
import {mq} from "koutla-swiss";

import Home from "./home";

const styles = {
    container: css({
        ...mq("min-width:250px"),
    }),
};

export default class Main extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Home />
            </div>
        );
    }
}
