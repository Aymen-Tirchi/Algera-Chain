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
    border: "2px solid #0a0a0a",
    borderRadius: 10,
    boxShadow: "2px 2px 10px #91A1FB",
  },
  TableContainer: {
    maxHeight: 600,
    borderRadius: 9,
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
    backgroundColor: "#0a0a0a !important",
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
    boxShadow: "2px 2px 10px #91A1FB",
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
    boxShadow: "2px 2px 10px #91A1FB",
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
    boxShadow: "2px 2px 10px #91A1FB",
  },

  //Modal
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#fff",
    padding: 15,
    outline: "none",
    width: "min(90%, 650px)",
    height: "80%",
    border: "2px solid #0a0a0a",
    borderRadius: 10,
    boxShadow: "2px 2px 10px #91A1FB",
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
    boxShadow: "2px 2px 10px #91A1FB",
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
      maxWidth: '600px',
      width: '80%',
      margin: 'auto',
      padding: theme.spacing(3),
      backgroundColor: '#f7f7f7',
      borderRadius: '20px',
      boxShadow: "2px 2px 10px #002B5B",
    },
    form: {
      
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    formHeading: {
      marginBottom: theme.spacing(2),
      textAlign: 'center',
    },
    inputField: {
      marginBottom: theme.spacing(2),
    },
    textArea: {
      marginBottom: theme.spacing(2),
      width: '100%',
      padding: theme.spacing(1),
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      color: '#fff',
    },
    footerContainer: {
      display: 'flex',
      alignItems: 'center',
      miHeight: '10vh',
      padding: '10px',
      justifyContent: 'center',
      backgroundColor: '#1597BB',
      flexDirection: 'column',
      
    },
    footerText: {
      paddingBottom: '3px',
    },
    footerDate: {
      opacity: '0.4',
    },
    '.fade-enter': {
      opacity: 0,
      transform: 'translateY(-50%)'
    },
  
    '.fade-enter-active': {
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'all 500ms'
    },
  
    '.fade-exit': {
      opacity: 1,
      transform: 'translateY(0)'
    },
  
    '.fade-exit-active': {
      opacity: 0,
      transform: 'translateY(50%)',
      transition: 'all 500ms'
    },
    
  
    submitButton: {
      width: '100%',
      padding: theme.spacing(1.5),
      fontSize: '16px',
      fontWeight: 'bold',
      backgroundColor: '#0077ff',
      color: '#fff',
      borderRadius: '5px',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#0060cb',
      },
    },
  }))
  

