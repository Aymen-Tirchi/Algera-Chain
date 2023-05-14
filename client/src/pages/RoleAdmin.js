import React, { useEffect, useState } from "react";
import ResponsiveDrawer from "../components/Navbar";
import TextField from "@material-ui/core/TextField";
import { useRole } from "../context/RoleDataContext";
import { useStyles } from "../components/Styles";

function RoleAdmin(props) {
  const accounts = props.accounts;
  const supplyChainContract = props.supplyChainContract;
  const { roles, setRoles } = useRole();
  const navItem = [];

  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const assignAddresses = async () => {
      if (accounts.length > 1) {
        await setRoles({
          ...roles,
          manufacturer: accounts[0],
          warehouse: accounts[1],
          deliveryhub: accounts[accounts.length - 2], // Get the second last account as the delivery hub address
          customer: accounts[accounts.length - 1], // Get the last account as the customer address
        });

        localStorage.setItem("mRole", accounts[0]);
        localStorage.setItem("tpRole", accounts[1]);
        localStorage.setItem("dhRole", accounts[accounts.length - 2]);
        localStorage.setItem("cRole", accounts[accounts.length - 1]);

        try {
          // Add roles in the smart contract
          await Promise.all([
            supplyChainContract.methods
              .addManufacturerRole(accounts[0])
              .send({ from: accounts[0], gas: 100000 }),

            supplyChainContract.methods
              .addwarehouseRole(accounts[1])
              .send({ from: accounts[0], gas: 100000 }),

            supplyChainContract.methods
              .addDeliveryHubRole(accounts[accounts.length - 2])
              .send({ from: accounts[0], gas: 100000 }),

            supplyChainContract.methods
              .addCustomerRole(accounts[accounts.length - 1])
              .send({ from: accounts[0], gas: 100000 }),
          ]);

          setLoading(false);
        } catch (error) {
          console.log("Transaction reverted:", error.message);
          setLoading(false);
        }
      }
    };

    assignAddresses();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Removed the dependency array

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ResponsiveDrawer navItems={navItem}>
        <div className={classes.FormWrap}>
          <h1 className={classes.pageHeading}>Roles Addresses</h1>
          {console.log(roles)}

          <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.RoleForm}>
              <TextField
                id="manufacturerRole"
                label="Manufacturer Address"
                variant="outlined"
                value={roles.manufacturer || ""}
                style={{ width: "70%" }}
                disabled
              />
            </div>
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.RoleForm}>
              <TextField
                id="warehouseRole"
                label="Warehouse Address"
                variant="outlined"
                value={roles.warehouse || ""}
                style={{ width: "70%" }}
                disabled
              />
            </div>
          </form>

          <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.RoleForm}>
              <TextField
                id="deliveryHubRole"
                label="Delivery Hub Address"
                variant="outlined"
                value={roles.deliveryhub || ""}
                style={{ width: "70  % " }}
                disabled
              />
            </div>
          </form>
          <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.RoleForm}>
              <TextField
                id="customerRole"
                label="Customer Address"
                variant="outlined"
                value={roles.customer || ""}
                style={{ width: "70%" }}
                disabled
              />
            </div>
          </form>
        </div>
      </ResponsiveDrawer>
    </div>
  );
}

export default RoleAdmin;
