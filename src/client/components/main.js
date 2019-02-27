/* becodeorg/trouvkach
 *
 * /src/client/components/main.js - Main Component
 *
 * coded by Andy, Steve D, Dan, Steve P
 * started at 10/02/2019
 */

import * as React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

import {css} from "emotion";
import {vh} from "koutla-swiss";

import Home from "./home";
import Map from "./mapPage";

const styles = {
    container: css({
        height: vh(100),
    }),
};

export default class Main extends React.Component {
    render() {
        return (
            <Router>
                <div className={styles.container}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/mapPage" component={Map} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
