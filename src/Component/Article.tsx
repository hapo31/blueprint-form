import React, { ReactChild } from "react";
import { Container, Paper, Typography } from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

type Props = {
  children?: ReactChild | ReactChild[];
  title?: string;
  style?: CSSProperties;
};
export default (props: Props) => (
  <Container style={{ margin: "5px", ...props.style }}>
    <Paper style={{ margin: "5px" }}>
      {props.title != null ? (
        <Typography variant="h5">{props.title}</Typography>
      ) : null}
      <Typography variant="body2">{props.children}</Typography>
    </Paper>
  </Container>
);
