import React, { Component } from 'react';
import './App.css';

import * as contentful from 'contentful-management';

import * as constants from './Constants';

class App extends Component {
  constructor(props){
    super(props);
    this.handleUpload = this.handleUpload.bind(this);
    this.convertLocation = this.convertLocation.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
    this.populateJsonToEntry = this.populateJsonToEntry.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.isJSON = this.isJSON.bind(this);

    this.state = {
      items: [],
      isLoaded: false,
      value: '',
      error: false,
      jsonLength: 0,
      total: 0
    }
  }

  handleFetch(){

    // fetch(constants.script_url, {
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   }
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //     this.setState({
    //       isLoaded: true,
    //       items: data
    //     })
    //   });'

        // this.setState({
        //   isLoaded: true,
        //   items: constants.sampleJSON
        // })
    
  }

  handleChange(e){
    this.setState({
      value: e.target.value,
      error: !this.isJSON(e.target.value),
      total: this.isJSON(e.target.value) ? this.getTotal(JSON.parse(e.target.value)) : 0,
      jsonLength: this.isJSON(e.target.value) ? this.getTotal(JSON.parse(e.target.value)) : 0,
    })
  }

  handleUpload(){
    const client = contentful.createClient({
      accessToken: constants.accessToken
    })

    if(this.isJSON(this.state.value)){
      var data = JSON.parse(this.state.value)

      data.records.map(json => {
        client.getSpace(constants.space)
        .then((space) => space.getEnvironment(constants.env))
        .then((environment) => { environment.createEntry(constants.contentType, this.populateJsonToEntry(json)) })
        .then((res) => {
          this.setState({
            total: this.state.total - 1
          })
        })
        .catch(console.error)
      })

    } else {
      this.setState({
        error: true
      })
    }
  }

  convertLocation(loc){
    var arr = loc.split("-")
  
    return {
      "lat": parseInt(arr[0]),
      "lon": parseInt(arr[1])
    }
  }

  populateJsonToEntry(json){
    return {
      "fields": {
        key: {
          "en-US": json.key
        },
        header: {
          "en-US": json.header
        },
        metaTitle: {
          "en-US": json.metaTitle
        },
        metaDescription: {
          "en-US": json.metaDescription
        },
        canonicalTag: {
          "en-US": json.canonicalTag
        },
        name: {
          "en-US": json.name
        },
        contentHeaderH2: {
          "en-US": json.contentHeaderH2
        },
        content: {
          "en-US": json.content
        }, 
        location: {
          "en-US": this.convertLocation(json.location)
        },
        address: {
          "en-US": json.address
        },
        region: {
          "en-US": json.region
        },
        schema: {
          "en-US": json.schema
        }
      }
    }
  }

  isJSON(str){
      try {
          JSON.parse(str);
      } catch (e) {
          return false;
      }
      return true;
  }

  getTotal(json){
    return json.records.length
  }

  render() {
    var { isLoaded, items } = this.state;

    return (
      <div className="App">
          
            <p className="header">City Data Batch Uploader</p>

            <button className="upload none" onClick={this.handleFetch}>1. Fetch from spreadsheet</button>
            <a className="none" href={constants.spreadSheetLink} target="_blank" rel="noopener noreferrer">Check spreadsheet here</a>

            <div className="inline">
              <a className="sheet" href={constants.spreadSheetLink} target="_blank" rel="noopener noreferrer">Preview Spreadheet</a> 
              <a href={constants.jsonLink} target="_blank" rel="noopener noreferrer">Get JSON here</a>
            </div>
            
            <textarea className="none" rows="10" value={isLoaded ? JSON.stringify(items) : ''} readOnly></textarea>
            
            <textarea rows="10" value={this.state.value} onChange={this.handleChange}></textarea>
            
            <button className={this.state.error ? 'upload gray' : 'upload'} disabled={this.state.error} onClick={this.handleUpload}>2. Upload to Contentful</button>
            <a href={constants.contentfulLink} target="_blank" rel="noopener noreferrer">Check contentful here</a>

            <h3 className={this.state.error ? 'error' : 'error none'}>Invalid JSON</h3>
            <p className={this.state.total === this.state.jsonLength ? 'progressMsg none' : 'progressMsg'}>
              {this.state.total !== 0 ? `Uploading ${this.state.total} / ${this.state.jsonLength}` : `Success`}
            </p>

      </div>
    );
    
  }
}

export default App;
