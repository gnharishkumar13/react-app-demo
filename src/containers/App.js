import React from "react";
import CardList from "../components/CardList/CardList";
import SearchBox from '../components/SearchBox/SearchBox'
import './App.css'
import Scroll from "../components/Scroll/Scroll";
import {requestData, setSearchField} from "../action";
import {connect} from "react-redux";
import {requestDataReducer} from "../reducers";


const mapStateToProps = (state) => {
    return {
        searchField: state.searchDataReducer.searchField, //state/reducer/field
        data: state.requestDataReducer.data,
        isPending: state.requestDataReducer.isPending,
        error: state.requestDataReducer.error

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)), //dispatch call/events to actions
        onRequestData:  () => requestData(dispatch)
    }
}

class App extends React.Component {

    //lifecycle components
    componentDidMount() {
        this.props.onRequestData()
    }

    render() {
        const {searchField, onSearchChange, data, isPending } = this.props; //destructuring
        const filteredData = data.filter(d => {
            return d.name.toLowerCase().includes(searchField.toLowerCase())
        })
        if (isPending) {
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
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
//connect() is a higher order function that returns another function.
//connect accepts 2 params, it is a pure function