import React, { Component } from 'react';
import OrgChart from './tree';
import data from './data.json'
        export default class App extends Component {
            constructor(props) {
                super(props);
            }

            render() {
                return (
                    <div>
                        <OrgChart nodes={data} />
                    </div>
                );
            }
        }
        