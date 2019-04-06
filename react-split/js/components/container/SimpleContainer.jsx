import React, { Component } from "react";
import Li from "../presentational/LiItem.jsx";
const axios = require('axios');

class SimpleContainer extends Component {
    constructor() {
        super();
        this.state = {
            // this is where the data goes
            list: [],
            current: "",
            isLoading: true
        };
    }
    buildResults = (results) => {
        this.setState(({list, current }) => ({
            list: results,
            current: ''
        }));

    }

    searchGithub = (q) => {
        axios.get(`https://api.github.com/search/users?q=${q}`)
            .then(response => response.data.items)
            .then(
                response => {
                    const results = response;
                    this.buildResults(results);
                    this.setState({isLoading: false})
                }
            )
            .catch(function (error) {
                // handle error
                console.log('error');
                console.log(error);
            })
    };

    componentDidMount() {
        window.addEventListener('load', this.searchGithub('oshry'));

    }
    render() {
        const { current, list } = this.state;
        return (
            this.state.isLoading ?
                <div>Loading</div>
                : <div><ul>{list.map((obj, i) => {
                    return (<Li key={i} text={obj.login} />)
                    // return (<li key={i}>{obj.login}</li>)
                })}</ul></div>

        );
    }
}
export default SimpleContainer;