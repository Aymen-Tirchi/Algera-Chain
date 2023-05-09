import React, { Component } from "react";
import SupplyChainContract from "./contracts/SupplyChain.json";
import { Router, Switch, Route } from "react-router-dom";
import { RoleDataContextProvider } from "./context/RoleDataContext";
// import history from "./history";
import { createBrowserHistory } from "history";
import getWeb3 from "./getWeb3";

import Manufacture from "./pages/Manufacturer/Manufacture";
import AllManufacture from "./pages/Manufacturer/AllManufacture";
import ShipManufacture from "./pages/Manufacturer/ShipManufacture";

import "./App.css";
import Receivewarehouse from "./pages/warehouse/Receivewarehouse";
import PurchaseCustomer from "./pages/Customer/PurchaseCustomer";
import Shipwarehouse from "./pages/warehouse/Shipwarehouse";
import ReceiveDeliveryHub from "./pages/DeliveryHub/ReceiveDeliveryHub";
import ShipDeliveryHub from "./pages/DeliveryHub/ShipDeliveryHub";
import ReceiveCustomer from "./pages/Customer/ReceiveCustomer";
import ReceivedByCustomer from "./pages/Customer/ReceivedByCustomer";
import Purchasewarehouse from "./pages/warehouse/Purshasewarehouse";
import RoleAdmin from "./pages/RoleAdmin";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/Theme";

import Explorer from "./pages/Explorer";
import Home from "./pages/Home";

class App extends Component {
  state = {
    web3: null,
    accounts: null,
    contract: null,
    mRole: null,
    tpRole: null,
    dhRole: null,
    cRole: null,
  };
  




  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SupplyChainContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SupplyChainContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      const mRole = localStorage.getItem("mRole");
      const tpRole = localStorage.getItem("tpRole");
      const dhRole = localStorage.getItem("dhRole");
      const cRole = localStorage.getItem("cRole");

      this.setState(
        {
          web3,
          accounts,
          contract: instance,
          mRole: mRole,
          tpRole: tpRole,
          dhRole: dhRole,
          cRole: cRole,
        },
        this.runExample
      );
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { contract } = this.state;
    console.log(contract);
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <RoleDataContextProvider
            mRole={this.state.mRole}
            tpRole={this.state.tpRole}
            dhRole={this.state.dhRole}
            cRole={this.state.cRole}
          >
            <Router history={createBrowserHistory()}>
              <Switch>
                <Route exact path="/roleAdmin">
                  <RoleAdmin
                    accounts={this.state.accounts}
                    supplyChainContract={this.state.contract}
                  />
                </Route>
                <Route exact path="/Explorer">
                  <Explorer
                    accounts={this.state.accounts}
                    supplyChainContract={this.state.contract}
                    web3={this.state.web3}
                  />
                </Route>
                <Route exact path="/">
                  <Home
                    accounts={this.state.accounts}
                    supplyChainContract={this.state.contract}
                  />
                </Route>

                <Route exact path="/manufacturer/manufacture">
                  {this.state.mRole !== "" ? (
                    <Manufacture
                      accounts={this.state.accounts}
                      supplyChainContract={this.state.contract}
                    />
                  ) : (
                    <h1>Set Manufacturer Role at /RoleAdmin</h1>
                  )}
                </Route>
                <Route exact path="/manufacturer/allManufacture">
                  {this.state.mRole !== "" ? (
                    <AllManufacture
                      accounts={this.state.accounts}
                      supplyChainContract={this.state.contract}
                    />
                  ) : (
                    <h1>Set Manufacturer Role at /RoleAdmin</h1>
                  )}
                </Route>
                <Route exact path="/manufacturer/ship">
                  {this.state.mRole !== "" ? (
                    <ShipManufacture
                      accounts={this.state.accounts}
                      supplyChainContract={this.state.contract}
                    />
                  ) : (
                    <h1>Set Manufacturer Role at /RoleAdmin</h1>
                  )}
                </Route>
                <Route exact path="/warehouse/allProducts">
                  {this.state.tpRole !== "" ? (
                    <Purchasewarehouse
                      accounts={this.state.accounts}
                      supplyChainContract={this.state.contract}
                    />
                  ) : (
                    <h1>Set warehouse Role at /RoleAdmin</h1>
                  )}
                </Route>
                <Route exact path="/warehouse/receive">
                  {this.state.tpRole !== "" ? (
                    <Receivewarehouse
                      accounts={this.state.accounts}
                      supplyChainContract={this.state.contract}
                    />
                  ) : (
                    <h1>Set warehouse Role at /RoleAdmin</h1>
                  )}
                </Route>
                <Route exact path="/Customer/buy">
                  {this.state.cRole !== "" ? (
                    <PurchaseCustomer
                      accounts={this.state.accounts}
                      supplyChainContract={this.state.contract}
                    />
                  ) : (
                    <h1>Set Customer Role at /RoleAdmin</h1>
                  )}
                </Route>
                <Route exact path="/warehouse/ship">
                  {this.state.tpRole !== "" ? (
                    <Shipwarehouse
                      accounts={this.state.accounts}
                      supplyChainContract={this.state.contract}
                    />
                  ) : (
                    <h1>Set warehouse Role at /RoleAdmin</h1>
                  )}
                </Route>
                <Route exact path="/DeliveryHub/receive">
                  {this.state.dhRole !== "" ? (
                    <ReceiveDeliveryHub
                      accounts={this.state.accounts}
                      supplyChainContract={this.state.contract}
                    />
                  ) : (
                    <h1>Set Delivery Hub Role at /RoleAdmin</h1>
                  )}
                </Route>
                <Route exact path="/DeliveryHub/ship">
                  {this.state.dhRole !== "" ? (
                    <ShipDeliveryHub
                      accounts={this.state.accounts}
                      supplyChainContract={this.state.contract}
                    />
                  ) : (
                    <h1>Set Delivery Hub Role at /RoleAdmin</h1>
                  )}
                </Route>
                <Route exact path="/Customer/receive">
                  {this.state.cRole !== "" ? (
                    <ReceiveCustomer
                      accounts={this.state.accounts}
                      supplyChainContract={this.state.contract}
                    />
                  ) : (
                    <h1>Set Customer Role at /RoleAdmin</h1>
                  )}
                </Route>
                <Route exact path="/Customer/allReceived">
                  {this.state.cRole !== "" ? (
                    <ReceivedByCustomer
                      accounts={this.state.accounts}
                      supplyChainContract={this.state.contract}
                    />
                  ) : (
                    <h1>Set Customer Role at /RoleAdmin</h1>
                  )}
                </Route>
              </Switch>
            </Router>
          </RoleDataContextProvider>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
