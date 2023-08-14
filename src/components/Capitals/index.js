import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    countryText: 'India',
  }

  selectItem = e => {
    const country = e.target.value
    const CountryDisplay = countryAndCapitalsList.find(
      each => each.id === country,
    )
    this.setState({countryText: CountryDisplay.country})
  }

  render() {
    const {countryText} = this.state
    return (
      <div className="app-container">
        <div className="Capitals-container">
          <h1>Countries And Capitals</h1>
          <div className="dropdown-container">
            <select
              name="country"
              id="country"
              onChange={this.selectItem}
              className="dropdown"
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option value={eachCountry.id} key={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country</p>
          </div>

          <p>{countryText}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
