import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      people: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(people => this.setState({ people: [people] }))
      .catch(err => console.error(`Error here -> `, err))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { people, searchfield } = this.state
    let filteredPeople
    if (people.length) {
      console.log(people[0])
      filteredPeople = people[0].results.filter(person => {
        return person.name.toLowerCase().includes(searchfield.toLowerCase())
      })
    } else {
      console.log(`people undefined`)
    }
    return !people.length ?
    <h1 className='tc'>Loading...</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>Jedi Archive</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList people={filteredPeople}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    )
  }
}

export default App
