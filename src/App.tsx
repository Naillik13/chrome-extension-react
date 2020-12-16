import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Profile} from "./models/Profile";

interface State extends Profile {}

export class App extends React.Component<{}, State> {
  state = {} as State
  public componentDidMount(): void {
    if (chrome && chrome.tabs) {
      chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
        const tab = tabs[0];
        chrome.tabs.sendMessage(tab.id || 0, { from: "popup", subject: "getFullName" }, response => {
          this.setState({
            fullName: response.fullName,
            title: response.title,
            country: response.country,
            imageUrl: response.imageUrl,
          })
        });
      });
    }
  }
  render() {
    return (
        <div className="app">
          <div>{this.state.fullName}</div>
          <div>{this.state.title}</div>
          <div>{this.state.country}</div>
          <img src={this.state.imageUrl || "nosrc"} alt="profileImage"/>
        </div>
    );
  };
}

export default App;
