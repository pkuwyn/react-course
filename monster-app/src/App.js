import React, { Component } from "react";
import CardList from "./components/card-list";
import SearchBox from "./components/search-box";
import "./App.scss";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { monsters: [], searchField: "" };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { searchField, monsters } = this.state;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="app">
        <h1 className="app__title">Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          value={searchField}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
