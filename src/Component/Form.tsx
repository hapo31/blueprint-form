import React, { ReactChildren } from "react";
import { Container, Paper, Typography } from "@material-ui/core";

type Props = {
  children?: ReactChildren;
  title: string;
};

export default (props: Props) => (
  <Container>
    <Paper>
      <Typography variant="h5">{props.title}</Typography>
    </Paper>
  </Container>
);
