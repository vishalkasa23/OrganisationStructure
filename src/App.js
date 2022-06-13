import React, { Component } from 'react';
import OrgChart from './tree';
import queryString from 'query-string'
class App extends Component {
        constructor(props) {
        super(props)
        this.state = {
            name: '',
            mode:''
        }
        }
            
            render(){
            let queries = queryString.parse(window.location.search)
	        this.setState(queries)
            var val=require(`./${queries.name}.json`)
            var modes_=queries.mode
            console.log()
                return (
                    <div>
                        <OrgChart nodes={val} modes={modes_} />
                    </div>
                    
                );
            }
        }
export default App;
