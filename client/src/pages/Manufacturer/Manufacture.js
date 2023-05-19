import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useRole } from "../../context/RoleDataContext";
import { useStyles } from "../../components/Styles";
import Grid from "@material-ui/core/Grid";
import Loader from "../../components/Loader";
import NavManufacture from "../../components/NavManufacture";

export default function Manufacture(props) {
  const supplyChainContract = props.supplyChainContract;
  const classes = useStyles();
  const { roles } = useRole();
  const [loading, setLoading] = React.useState(false);
  const [fvalid, setfvalid] = React.useState(false);
  const [manuForm, setManuForm] = React.useState({
    id: 0,
    manufacturerName: "",
    manufacturerDetails: "",
    manufacturerLongitude: "",
    manufacturerLatitude: "",
    productName: "",
    productCode: 0,
    productPrice: 0,
    productCategory: "",
    quantity: 0,
  });

  const handleChangeManufacturerForm = (e) => {
    setManuForm({
      ...manuForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitManufacturerForm = async () => {
    setLoading(true);

    if (
      manuForm.manufacturerName !== "" &&
      manuForm.manufacturerDetails !== "" &&
      manuForm.manufacturerLongitude !== "" &&
      manuForm.manufacturerLatitude !== "" &&
      manuForm.productName !== "" &&
      manuForm.productCode !== 0 &&
      manuForm.productPrice !== 0 &&
      manuForm.productCategory !== "" &&
      manuForm.quantity !== 0
    ) {
      setfvalid(false);

      for (let i = 0; i < manuForm.quantity; i++) {
        await supplyChainContract.methods
          .manufactureProduct(
            manuForm.manufacturerName,
            manuForm.manufacturerDetails,
            manuForm.manufacturerLongitude.toString(),
            manuForm.manufacturerLatitude,
            manuForm.productName,
            parseInt(manuForm.productCode),
            parseInt(manuForm.productPrice),
            manuForm.productCategory
          )
          .send({ from: roles.manufacturer, gas: 999999 })
          .on("transactionHash", function (hash) {
            handleSetTxhash(hash);
          });
      }

      setManuForm({
        id: 0,
        manufacturerName: "",
        manufacturerDetails: "",
        manufacturerLongitude: "",
        manufacturerLatitude: "",
        productName: "",
        productCode: 0,
        productPrice: 0,
        productCategory: "",
        quantity: 0,
      });
    } else {
      setfvalid(true);
    }

    setLoading(false);
  };

  const handleSetTxhash = async (hash) => {
    await supplyChainContract.methods
      .setTransactionHashOnManufacture(hash)
      .send({ from: roles.manufacturer, gas: 900000 });
  };

  const handleGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setManuForm({
          ...manuForm,
          manufacturerLatitude: position.coords.latitude.toString(),
          manufacturerLongitude: position.coords.longitude.toString(),
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return (
    <>
      <NavManufacture pageTitle={"Manufacturer"}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className={classes.FormWrap}>
              <h1 className={classes.pageHeading}>Add Product</h1>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    name="manufacturerName"
                    variant="outlined"
                    value={manuForm.manufacturerName}
                    onChange={handleChangeManufacturerForm}
                    label="Manufacturer Name"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    name="manufacturerDetails"
                    variant="outlined"
                    value={manuForm.manufacturerDetails}
                    onChange={handleChangeManufacturerForm}
                    label="Manufacturer Details"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleGeolocation}
                  >
                    Use Current Location
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    name="manufacturerLongitude"
                    variant="outlined"
                    value={manuForm.manufacturerLongitude}
                    onChange={handleChangeManufacturerForm}
                    label="Longitude"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    name="manufacturerLatitude"
                    variant="outlined"
                    value={manuForm.manufacturerLatitude}
                    onChange={handleChangeManufacturerForm}
                    label="Latitude"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    name="productName"
                    variant="outlined"
                    value={manuForm.productName}
                    onChange={handleChangeManufacturerForm}
                    label="Product Name"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    name="productCode"
                    variant="outlined"
                    value={manuForm.productCode}
                    onChange={handleChangeManufacturerForm}
                    label="Product Code"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    name="productPrice"
                    variant="outlined"
                    value={manuForm.productPrice}
                    onChange={handleChangeManufacturerForm}
                    label="Product Price"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    name="productCategory"
                    variant="outlined"
                    value={manuForm.productCategory}
                    onChange={handleChangeManufacturerForm}
                    label="Product Category"
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    name="quantity"
                    variant="outlined"
                    value={manuForm.quantity}
                    onChange={handleChangeManufacturerForm}
                    label="Quantity"
                    style={{ width: "100%" }}
                  />
                </Grid>
              </Grid>
              <br />
              <p>
                <b style={{ color: "red" }}>
                  {fvalid ? "Please enter all data" : ""}
                </b>
              </p>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmitManufacturerForm}
              >
                SUBMIT
              </Button>

              <br />
              <br />
            </div>
          </>
        )}
      </NavManufacture>
    </>
  );
}
