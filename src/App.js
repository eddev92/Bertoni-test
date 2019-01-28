import React, { Component } from 'react';
import './App.css';
import Api from './api/api'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      itemSelected: null,
      itemsUpdated: [],
      name: ''
    };
  }

  componentDidMount() {
    this.getItems();
  }

  // componentDidUpdate() {
  //   const { items, itemsUpdated } = this.state;

  //   // if ((items &&items.length) !== (itemsUpdated && itemsUpdated.length )) {
  //   //   this.setState({items: itemsUpdated});
  //   //   // getItems
  //   // }
  // }
  getItems = () => {
    const api = new Api();
    return api.getItems()
              .then(res => this.setState({items: res}))
              .catch(error => console.log(error))
  }

  handleChange = (e) => {
    if (e) {
      this.setState({ name: e.target.value });
    }
  }

  saveItem = () => {
    const { name, items } = this.state;
    let itemsUpdatedAux = [];
    if (name) {
      itemsUpdatedAux = [ ...items ];
      itemsUpdatedAux.push(name)
      // api saveIem
      const api = new Api();
      return api.saveItem(name)
                .then(res => {
                  this.setState({itemsUpdated: itemsUpdatedAux});
                })
                .catch(error => console.log(error))
    }
  }

  renderItem = () => {
    const { items } = this.state;
    let getItems = [];
    if (items && items.length) {
      getItems = items.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item}</td>
              <td>
                <button onClick={this.deleteItem(item)}>Borrar</button>
            </td>
          </tr>
        )
      });
      return getItems;
    } else {
      return (
        <tr>
          <td>No existen registros</td>
        </tr>
      )
    }
  }

  deleteItem = (name) => {
    const { items, itemsUpdated } = this.state;
    if (items && items.length && name && itemsUpdated && itemsUpdated.length) {
      this.state.itemsUpdated.map((item, index) => {
        if (item === name ) {
          this.setState({ itemsUpdated: items.slice(index, 1) })
        }
      })
    }
   return null;
  }

  updateItem = () => {
    const { items } = this.state;

  }

  render() {
    const { name } = this.state;
    console.log(this.state.items)

    return (
      <div className="App container">
        <div className="row">
          <div className="col-md-6">
            <table className="main-table">
              <thead>
                <th>Item</th>
              </thead>
              <tbody>
                {this.renderItem()}
              </tbody>
            </table>
          </div>
          <div className="col-md-6 main-form">
            <form>
              <label>Nombre</label>
              <input type="text" value={name} onChange={this.handleChange}/>
            </form>
          <button onClick={this.saveItem}>Grabar Item</button>
          <button onClick={this.updateItem}>Modificar Item</button>
          </div>
        </div>        
      </div>
    );
  }
}

export default App;
