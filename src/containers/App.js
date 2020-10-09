import React from "react";
import CardList from "../components/CardList/CardList";
import SearchBox from '../components/SearchBox/SearchBox'
import './App.css'
import Scroll from "../components/Scroll/Scroll";

class App extends React.Component {
    //Always have Class when using constructor to set the state
    constructor() {
        super();
        this.state = {
            data: [],
            searchField: ''
        }
    }

    //lifecycle components
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({data: users});
            })
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const filteredData = this.state.data.filter(d => {
            return d.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        if (this.state.data.length === 0) {
            return <h1> Loading ..</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'> Friends App </h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList data={filteredData}>
                        </CardList>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App