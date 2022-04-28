import React, { Component } from 'react';
import OrgChart from './tree';
import queryString from 'query-string'
class App extends Component {
            state = {
                name: 'vishal'
            }
            render(){
            let queries = queryString.parse(window.location.search)
	        this.setState(queries)
            var val=require(`./${queries.name}.json`)
            console.log()
                return (
                    <div>
                        <OrgChart nodes={val} />
                    </div>
                    
                );
            }
        }
export default App;
