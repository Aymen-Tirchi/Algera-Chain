import React from "react";
import ResponsiveDrawer from "../components/Navbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useRole } from "../context/RoleDataContext";
import { useStyles } from "../components/Styles";

function RoleAdmin(props) {
  const accounts = props.accounts;
  const supplyChainContract = props.supplyChainContract;
  const { roles, setRoles } = useRole();

  const classes = useStyles();
  const [manufacturerRole, setManufacturerRole] = React.useState("");
  const [warehouseRole, setwarehouseRole] = React.useState("");
  const [deliveryHubRole, setDeliveryHubRole] = React.useState("");
  const [customerRole, setCustomerRole] = React.useState("");
  const navItem = [];

  const handleAddManufacturerRole = async () => {
    await setRoles({
      ...roles,
      manufacturer: manufacturerRole,
    });

    localStorage.setItem("mRole", manufacturerRole);
    await supplyChainContract.methods
      .addManufacturerRole(manufacturerRole)
      .send({ from: accounts[0], gas: 100000 })
      .then(console.log);

    setManufacturerRole("");
  };

  const handleAddwarehouseRole = async () => {
    await setRoles({
      ...roles,
      warehouse: warehouseRole,
    });

    localStorage.setItem("tpRole", warehouseRole);
    await supplyChainContract.methods
      .addwarehouseRole(warehouseRole)
      .send({ from: accounts[0], gas: 100000 })
      .then(console.log);

    setwarehouseRole("");
  };

  const handleAddDeliveryHubRole = async () => {
    await setRoles({
      ...roles,
      deliveryhub: deliveryHubRole,
    });

    localStorage.setItem("dhRole", deliveryHubRole);
    await supplyChainContract.methods
      .addDeliveryHubRole(deliveryHubRole)
      .send({ from: accounts[0], gas: 100000 })
      .then(console.log);

    setDeliveryHubRole("");
  };

  const handleAddCustomerRole = async () => {
    await setRoles({
      ...roles,
      customer: customerRole,
    });

    localStorage.setItem("cRole", customerRole);
    await supplyChainContract.methods
      .addCustomerRole(customerRole)
      .send({ from: accounts[0], gas: 100000 })
      .then(console.log);

    setCustomerRole("");
  };

  return (
    <div>
      <ResponsiveDrawer navItems={navItem}>
        <div className={classes.FormWrap}>
          <h1 className={classes.pageHeading}>Add Roles </h1>
          {console.log(roles)}

          <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.RoleForm}>
              <TextField
                id="manufacturerRole"
                label="Enter Manufacturer Addres. Select a different address for each station"
                variant="outlined"
                value={manufacturerRole}
                onChange={(e) => setManufacturerRole(e.target.value)}
                style={{ width: "70%" }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddManufacturerRole}
                style={{ width: "30%", marginLeft: "20px" }}
              >
                Add Manufacturer
              </Button>
            </div>
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.RoleForm}>
              <TextField
                id="warehouseRole"
                label="Enter warehouse Address. Select a different address for each station "
                variant="outlined"
                value={warehouseRole}
                onChange={(e) => setwarehouseRole(e.target.value)}
                style={{ width: "70%" }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddwarehouseRole}
                style={{ width: "30%", marginLeft: "20px" }}
              >
                Add warehouse
              </Button>
            </div>
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.RoleForm}>
              <TextField
                id="deliveryHubRole"
                label="Enter Delivery Hub Address. Select a different address for each station"
                variant="outlined"
                value={deliveryHubRole}
                onChange={(e) => setDeliveryHubRole(e.target.value)}
                style={{ width: "70%" }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddDeliveryHubRole}
                style={{ width: "30%", marginLeft: "20px" }}
              >
                add delivery hub
              </Button>
            </div>
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.RoleForm}>
              <TextField
                id="customerRole"
                label=" Enter Customer Address. Select a different address for each station"
                variant="outlined"
                value={customerRole}
                onChange={(e) => setCustomerRole(e.target.value)}
                style={{ width: "70%" }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddCustomerRole}
                style={{ width: "30%", marginLeft: "20px" }}
              >
                add customer
              </Button>
            </div>
          </form>
        </div>
        <div className={classes.FormWrap}>
          <h1 className={classes.pageHeading}>Local Accounts</h1>
          {accounts.slice(1).map((acc) => (
            <h3 className={classes.tableCount}>{acc}</h3>
          ))}
        </div>
      </ResponsiveDrawer>
    </div>
  );
}

export default RoleAdmin;