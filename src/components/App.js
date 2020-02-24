import React, { Component } from "react";
import { asyncGetData } from "../redux/actions";
import { connect } from 'react-redux';
import axios from 'axios';

class App extends Component {
    state = {};

    componentDidMount() {
        this.props.asyncGetData();
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(data => console.log('data :', data.data))

    }

    render() {
        return <>fsgd</>;
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         onGetData: () => {
//             dispatch(actionCreator)
//         }
//     }
// }

export default connect(null, { asyncGetData })(App);

