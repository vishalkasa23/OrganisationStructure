import React, { Component } from 'react';
import OrgChart from '@balkangraph/orgchart.js';
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
//                     readOnly: true,
                    nodes: this.props.nodes,
//                     mouseScrool: OrgChart.action.none,
                    template: "diva",
                    nodeBinding: {
                        field_0: "name",
                        field_1: "title",
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
                { type: 'textbox', label: 'Designation', binding: 'title'}        
            ],
                        buttons:  {
                            share: null,
                            pdf: null,
                            edit :null
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
