// import { Grid, Typography } from "@material-ui/core";

// const Welcome = (props) => {
//   return (
//     <Grid
//       container
//       item
//       direction="column"
//       alignItems="center"
//       justify="center"
//       style={{ padding: "15px", minHeight: "35vh",
//       backgroundImage: "url(/logo-no-background.png)",
//       //backgroundSize: "cover",
//       backgroundPosition: "center",
//       background: "linear-gradient(to bottom, #f1c40f, #e67e22)"
//      }}
//     >
//       <Grid item>
//         <Typography variant="h2">Welcome to Smarthire</Typography>
//       </Grid>
//     </Grid>
//   );
// };

// export const ErrorPage = (props) => {
//   return (
//     <Grid
//       container
//       item
//       direction="column"
//       alignItems="center"
//       justify="center"
//       style={{ padding: "30px", minHeight: "93vh",
//       }}
//     >
//       <Grid item>
//         <Typography variant="h2">Error 404</Typography>
//       </Grid>
//     </Grid>
//   );
// };

// export default Welcome;
import { Grid, Typography } from "@material-ui/core";

const Welcome = (props) => {
  return (
    <div
      style={{
        //background: "linear-gradient(to bottom,#8ccbe3, #40b1f7)",
        background: "linear-gradient(120deg, #8ccbe3, #8e44ad)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/logo-no-background.png"
        alt="Logo"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
      <Grid
        container
        item
        direction="column"
        alignItems="center" // Align center horizontally
        style={{ padding: "460px", minHeight: "35vh" }}
      >
      <Grid item>
        <Typography variant="body1" style={{ fontFamily: 'Arial', fontSize: '25px', color: "white" }}>
          Where Talent Meets Opportunity: Join the Revolution
        </Typography>
      </Grid>

      </Grid>
    </div>
  );
};


export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
