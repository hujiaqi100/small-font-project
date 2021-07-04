import React from 'react';
class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                {
                    this.props.children ? (Object.prototype.toString.call(this.props.children).slice(8, -1) !== 'Object' ?
                        this.props.children.map(val => {
                            return val;
                        })
                        : this.props.children
                    ) : null
                }
            </div>
        );
    }
}
// Tabs.Tabplane = (props) => {
//     return (
//         <div>
//             {props.children}
//         </div>
//     )
// }
export default Tabs;
