// Higher order component that force updates component on themer change
// and passes down theme through props
import React, { Component } from 'react';

import themer from './index';
import { themePropTypes } from './utils';

function withTheme(InnerComponent) {
    class Wrapped extends Component {
        static displayName = `withTheme(${InnerComponent.displayName})`;

        static propTypes = {
            reactAbleTheme: themePropTypes
        };

        componentDidMount() {
            this.unsubscribe = themer.subscribe(this.onThemeChange);
        }

        componentWillUnmount() {
            this.unsubscribe();
        }

        onThemeChange = () => {
            this.forceUpdate();
        };

        render() {
            return <InnerComponent {...this.props} reactAbleTheme={themer.themeConfig} />;
        }
    }

    return Wrapped;
}

export default withTheme;
