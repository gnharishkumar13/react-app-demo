import React,{useState, useEffect} from "react";
import CardList from "../components/CardList/CardList";
import SearchBox from '../components/SearchBox/SearchBox'
import './App.css'
import Scroll from "../components/Scroll/Scroll";

function App() {
    //Always have Class when using constructor to set the state
    // constructor() {
    //     super();
    //     this.state = {
    //         data: [],
    //         searchField: ''
    //     }
    // }
    //

    //useState returns 2 params - data, and function that set the value setData.
    //Set the initial state using useState and the value for it.
    //In this case, the initial state value and is empty array
    const [data, setData] = useState([]) //array destructirng
    const [searchField, setSearchField] = useState('') //array destructirng


    // //lifecycle components
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(users => {
    //             this.setState({data: users});
    //         })
    // }

    //useEffect replaces componentDidMount
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    return response.json();
                })
                .then(users => {
                    //setData replaces below
                    //this.setState({data: users});
                    setData(users)
                })
    },[]) //[] - literally means run once similar to componentDidMount


    const onSearchChange = (event) => {
        //replaces
        //this.setState({searchField: event.target.value})
        setSearchField(event.target.value)
    }

    const filteredData = data.filter(d => {
        return d.name.toLowerCase().includes(searchField.toLowerCase())
    })

    if (!data.length) {
        return <h1> Loading ..</h1>
    } else {
        return (
            <div className='tc'>
                <h1 className='f1'> Friends App </h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList data={filteredData}>
                    </CardList>
                </Scroll>
            </div>
        );
    }

}

export default App