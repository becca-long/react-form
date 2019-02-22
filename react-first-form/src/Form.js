import React from 'react'

class Form extends React.Component {
    constructor() {
        super();
        this.state = {fname: '', lname: '', fruit: 'bananas', results: []};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFNameChange = this.handleFNameChange.bind(this);
        this.handleLNameChange = this.handleLNameChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
        
        let resultsArr = []

        let renderResults = () => {
            for (let i=0; i<50; i++) {
                resultsArr.push(this.state.fname + ' ' + this.state.lname + ' loves ' + this.state.fruit)
            }
            console.log(resultsArr)

            return resultsArr
        }

        this.setState({
            fname: '',
            lname: '',
            fruit: 'bananas',
            results: renderResults()
        })
    }

    handleFNameChange(event) {
        this.setState({fname: event.target.value})
    }

    handleLNameChange(event) {
        this.setState({lname: event.target.value})
    }

    update_fruit (event, key) {
        //why does this seem to work without needing a bind(this)?
        this.setState({[key]: event.target.value});
    }

    render() {
        return (
            <div>
                <h1>My Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Name:
                        <input 
                            type="text" 
                            value={this.state.fname} 
                            onChange={this.handleFNameChange}/>
                    </label>
                    <br/>
                    <label>
                        Last Name:
                        <input 
                            type="text" 
                            value={this.state.lname} 
                            onChange={this.handleLNameChange}/>
                    </label>
                    <br/>
                    <select 
                        value={this.state.fruit}
                        onChange={event => this.update_fruit(event, 'fruit')}>
                        <option value="bananas">bananas</option>
                        <option value="apricots">apricots</option>
                        <option value="strawberries">strawberries</option>
                    </select>
                    <br/>
                    <input type="submit" value="Submit"/>
                    <div id="test">
                    {this.state.results.map((itm) => {
                        return <div>{itm}</div>
                    })}
                    </div>
                </form>
            </div>
        )
    }
}

export default Form 