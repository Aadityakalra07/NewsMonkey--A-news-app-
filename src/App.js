import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  pageSize = 10;
  apiKey= "5dbc05e61eec4b28a3cf7705083fe375";
  state={
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress });
};

  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946' 
          apiKey={this.apiKey}
          progress={this.state.progress}/>
        <Routes>
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pageSize={this.pageSize} country="us" category="business" />} />
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="us" category="general" />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pageSize} country="us" category="general" />} />
          <Route exact path="/health" element={<News setProgress={this.setProgress}  apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="health" />} />
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pageSize} country="us" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
        </Routes>
      </div>
    );
  }
}
