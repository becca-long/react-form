import React, { Component } from 'react'
import Tab from './Tab'

class Tabs extends Component {
  render() {
    let {activeTab, changeTab} = this.props
    return (
        <div>
            <div className="tabs is-boxed is-medium">
                <ul>
                    <Tab label='Hello React' 
                         handleClick={() => changeTab(0)}
                         isActive={activeTab === 0}/>
                    <Tab label='Lorem Ipsum' 
                         handleClick={() => changeTab(1)}
                         isActive={activeTab === 1}/>
                    <Tab label='Login Form' 
                         handleClick={() => changeTab(2)}
                         isActive={activeTab === 2}/>
                </ul>
            </div>
        </div>
    )
  }
}

export default Tabs
