import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
// import { robots } from './robots';
import './App.css'

class App extends React.Component {
// const App = () => {
    constructor() {
        super();
        this.state = {
            robots:[],
            searchField: ''
        };
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value}); // have to do this, react syntax
        // console.log(filteredRobots);
    }
    componentDidMount(){
        // everytime state change, render() runs again
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => { return response.json();})
        .then(users => { this.setState({robots: users}) });
        document.title = "RoboFriends";
    }
    render() {
        const { robots, searchField } = this.state; // destructure this.state
        const filteredRobots = robots.filter (robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length ? (<h1>Loading</h1>) : 
                (
                    <div className='tc'>
                        <h1 className='f1' >RoboFriends</h1>
                        <SearchBox searchChange = {this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots={filteredRobots}/>
                            </ErrorBoundary>

                        </Scroll>
                    </div>
                );
    }
}

export default App;