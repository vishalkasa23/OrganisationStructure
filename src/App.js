import React, { Component } from 'react';
import OrgChart from './tree';

        export default class App extends Component {
            constructor(props) {
                super(props);
            }

            render() {
                return (
                    <div style={{height: '100%'}}>

                        <OrgChart nodes={[
                            { id: 1,name: "Mini Thomas", title: "Principal Engineering Manager", img: "https://cdn.balkan.app/shared/2.jpg" ,tags: ['orange']},
                            { id: 2, pid: 1,name: "Sneha Naik", title: "Engineering Lead", img: "https://cdn.balkan.app/shared/3.jpg" },
                            { id: 3, pid: 1,name: "Ankit Mudgal",title: "Senior Engineering Lead", img: "https://cdn.balkan.app/shared/3.jpg" },
                            { id: 4, pid: 1,name: "Apoorv Ghildhiyal", title: "Engineering Lead", img: "https://cdn.balkan.app/shared/8.jpg" },
                            { id: 5, pid: 1,name: "Shakil Shaikh", title: "Lead Software Engineer", img: "https://cdn.balkan.app/shared/3.jpg" },
                            { id: 6, pid: 1,name: "Ashwini Ingle", title: "Senior Software Engineer", img: "https://cdn.balkan.app/shared/5.jpg" },
                            { id: 7, pid: 2,name: "Vishal Kasa", title: "Software Engineer", img: "https://cdn.balkan.app/shared/5.jpg" },
                            { id: 8, pid: 3, name: "Akash Gautam", title: "Software Engineer", img: "https://cdn.balkan.app/shared/6.jpg" },
                            { id: 9, pid: 3,name: "Aniket Thorat", title: "Software Engineer", img: "https://cdn.balkan.app/shared/7.jpg" },
                        ]} />
                    </div>
                );
            }
        }
        