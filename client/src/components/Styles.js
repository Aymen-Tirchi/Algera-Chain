import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  pageWrap: {
    textAlign: "center",
    color: "#0a0a0a",
  },
  pageHeading: {
    textAlign: "center",
    margin: "10px auto",
    padding: 0,
    color: "#0a0a0a",
  },

  TableRoot: {
    width: "100%",
    maxWidth: 1500,
    margin: "5px auto",
    border: "2px solid #7B0402",
    borderRadius: 10,
    boxShadow: "2px 2px 10px #969393",
    
  },
  TableContainer: {
    maxHeight: 600,
    borderRadius: 9,
    color: "black",
  },
  AddressCell: {
    maxWidth: 150,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  tableCount: {
    textAlign: "center",
    margin: "10px auto",
    padding: 0,
    color: "#0a0a0a",
  },
  TableHead: {
    backgroundColor: "#7B0402 !important",
    color: "#fff !important",
  },
  TableCell: {
    color: "#0a0a0a !important",
  },

  FormWrap: {
    maxWidth: 900,
    margin: "30px auto",
    padding: 20,
    borderRadius: 10,
    boxShadow: "2px 2px 10px #969393",
  },

  RoleForm: {
    display: "flex",
    alignItems: "center",
    margin: "20px auto",
  },

  //Explorer
  Explorerroot: {
    padding: "2px 4px",
    margin: "10px",
    width: "100%",
  },
  ProductPaper: {
    padding: 10,
    borderRadius: 10,
    boxShadow: "2px 2px 10px #969393",
    border: "2px solid #0a0a0a",
  },
  ExplorerdRow: {
    width: "100%",
    borderBottom: `0px solid #222`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    margin: "0 auto",
    fontWeight: 600,
    color: "#0a0a0a",
  },
  TableRoot2: {
    width: "100%",
    maxWidth: 1300,
    margin: "5px auto",
    border: "2px solid #0a0a0a",
    borderRadius: 10,
    boxShadow: "2px 2px 10px #969393",
  },

  //Modal
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#c9d3cf",
    padding: 15,
    outline: "none",
    width: "min(90%, 650px)",
    height: "80%",
    border: "2px solid #0a0a0a",
    borderRadius: 10,
    boxShadow: "2px 2px 10px #969393",
    overflow: "scroll",
  },
  Reciptpaper: {
    backgroundColor: "#fff",
    border: "0px solid #000",
    padding: 15,
    outline: "none",
    width: "min(95%, 950px)",
    height: "500px",
    //border: "2px solid #0a0a0a",
    borderRadius: 10,
    boxShadow: "2px 2px 10px #000000",
    overflow: "scroll",
  },
  dRow: {
    width: "100%",
    borderBottom: `1px solid #222`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: "0 auto",
  },

  dCol1: {
    width: "30%",
    textAlign: "left",
    fontWeight: 600,
    color: "#0a0a0a",
  },
  dCol2: {
    width: "70%",
    textAlign: "left",
    fontWeight: 600,
    color: "#0a0a0a",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  //Home
  HomeBtn: {
    margin: 20,
  },
  HomeCardWrap: {
    maxWidth: 530,
    width: "90%",
    padding: 25,
    borderRadius: 30,
    boxShadow: "3px 3px 10px #E3DBDA",
    border: "2px solid #0a0a0a",
    margin: "20px auto",
  },

  formContainer: {
    maxWidth: "600px",
    width: "80%",
    margin: "auto",
    padding: theme.spacing(3),
    backgroundColor: "#f7f7f7",
    borderRadius: "20px",
    boxShadow: "2px 2px 10px #002B5B",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formHeading: {
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  inputField: {
    marginBottom: theme.spacing(2),
  },
  textArea: {
    marginBottom: theme.spacing(2),
    width: "100%",
    padding: theme.spacing(1),
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    color: "black",
  },
  footerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "10vh",
    padding: "10px",
    backgroundColor: "#c9d3cf",
  },
  footerText: {
    paddingBottom: "3px",
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1px",
    textAlign: "center",
  },
  footerDate: {
    opacity: "0.6",
    color: "black",
    textAlign: "center",
    fontSize: "0.8rem",
    marginTop: "20px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    "& svg": {
      color: "black",
      fontSize: "1.5rem",
      marginLeft: "10px",
      marginRight: "10px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "scale(1.2)",
      },
    },
  },
  ".fade-enter": {
    opacity: 0,
    transform: "translateY(-50%)",
  },

  ".fade-enter-active": {
    opacity: 1,
    transform: "translateY(0)",
    transition: "all 500ms",
  },

  ".fade-exit": {
    opacity: 1,
    transform: "translateY(0)",
  },

  ".fade-exit-active": {
    opacity: 0,
    transform: "translateY(50%)",
    transition: "all 500ms",
  },

  submitButton: {
    
      "--hover-shadows": "16px 16px 45px #0a0202, -16px -16px 33px #303030",
      "--accent": "fuchsia",
      "font-weight": "bold",
      "letter-spacing": "0.1em",
      "border": "none",
      "border-radius": "1.1em",
      "background-color": "#212121",
      "color": "white",
      "padding": "1em 2em",
      "transition": "box-shadow ease-in-out 0.4s, background-color ease-in-out 0.2s, letter-spacing ease-in-out 0.1s, transform ease-in-out 0.1s",
      "box-shadow": "13px 13px 10px #1c1c1c, -13px -13px 10px #0a0202"
    
  },
  
  subtitle: {
    //opacity: '0.4',
    paddingBottom: "30px",
    
    color: "#4E4D4D",
  },
  title: {
    paddingBottom: "15px",
    fontWeight: "bold",
    
  },
  title2: {
    padding: "0em 0em 0em 0em",

    fontWeight: "bolder",
    
  },
  gridContainer: {
    display: "flex",
    alignItems: "center",
    maxWidth: "1300px",
    padding: "50px",
  },
  heroBox: {
    width: "100%",
    display: "flex",
    minHeight: "600px",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionGridContainer: {
    width: "100%",
    minHeight: "500px",
  },
  sectionGridItem: {
    backgroundColor: "#edede9",
    textAlign: "center",
    padding: "30px",
    width: "200px",
    borderRadius: "10px",
    margin: "10px !important",
  },
  
  testimonialCard: {
    boxSizing: "border-box",
    width: "350px",
    height: "280px",
    backgroundColor: "#F1EDED",
    border: "1px solid white",
    boxShadow: "12px 15px 40px #DADADA",
    backdropFilter: "blur(6px)",
    borderRadius: "15px",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.7s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    fontWeight: "bolder",
    color: "black",
    margin: "10px", // Add margin to create space between cards
  
    "&:hover": {
      border: "2px solid black",
      transform: "scale(1.05)"
    },
    "&:active": {
      transform: "scale(0.95) rotateZ(1.7deg)"
    },
  },
  
    
  
  
  testimonialStatement: {
    paddingBottom: "25px",
  },
  avatar: {
    marginRight: "10px",
  },
  testimonialPosition: {
    fontSize: "14px",
    opacity: "0.6",
  },
  aboutUsContainer: {
    width: "100%",
    display: "flex",
    minHeight: "400px",
    alignItems: "center",
    justifyContent: "center",
    margin: "30px 0px 50px 0px",
  },

  aboutUsSubtitle: {
    opacity: "0.7",
    paddingBottom: "30px",
    fontSize: "18px",
    color: "#242020",
  },
  largeImage: {
    width: "100%",
  },
  
  textField: {
    width: "90%",
    color: "black"
  },
  
  
}));
