import React, { Component } from 'react';
import OrgChart from '@balkangraph/orgchart.js';
// import OrgChart  from '../../../../../Downloads/BALKAN_OrgChartJS_FREE_8.02.79/orgchart';
        export default class child extends Component {

            constructor(props) {
                super(props);
                this.divRef = React.createRef();
                
            }

            shouldComponentUpdate() {
                return false;
            }

            componentDidMount() {
                OrgChart.templates.diva = Object.assign({}, OrgChart.templates.diva);
                OrgChart.templates.diva.editFormHeaderColor = '#282534';
                this.chart = new OrgChart (this.divRef.current , {
                    scaleInitial: OrgChart.match.boundary,
                    // scaleInitial:OrgChart.match.height,
                    // scaleInitial:OrgChart.match.width,
                    orientation:OrgChart.orientation.left,
                    readOnly: true,
                    nodes: this.props.nodes,
                    padding:20,
                    // mouseScrool: OrgChart.action.none,
                    mouseScrool: OrgChart.action.zoom,
                    enableDragDrop:false,
                    template: "diva",
//                     collapse: {
//                         level: 1,
//                         allChildren: true
//                     },
                    nodeBinding: {
                        field_0: "name",
                        field_1: "title",
                        field_2: "manager",
                        field_3:"number",
                        img_0: "img"
                    },
                    tags: {
                        orange: {
                            template: 'diva'
                        }
                    },
                    editForm: {
                        generateElementsFromFields: false,
            elements: [
                { type: 'textbox', label: 'Full Name', binding: 'name'},
                { type: 'textbox', label: 'Designation', binding: 'title'},  
                { type: 'textbox', label: 'Contact Details', binding: 'number'},  
                { type: 'textbox', label: 'Manager', binding: 'manager'}        
            ],
                        buttons:  {
                            share: null,
                            pdf: null,
                            edit :null,
                            
                        },
                        
                    }
            
                });
                // this.chart.on('click', function (sender, args) {
                //     if (args.node.min) {
                //         sender.maximize(args.node.id);
                //     }
                //     else {
                //         sender.minimize(args.node.id);
                //     }
                //     return false;
                // });
            }

            render() {
                return (
                    <div id="tree" ref={this.divRef}>
                    </div>
                    
                );
            }
        }
