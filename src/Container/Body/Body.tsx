import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import Form from "../../Component/Form";

import api from "../../../api.json";

export default () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (list.length === 0) {
      fetch(api.list, {
        mode: "cors",
      })
        .then((res) => res.json())
        .then((json) => setList(json));
    }
  }, [list]);

  return (
    <Container>
      <Form title="areare"></Form>
      {JSON.stringify(list)}
    </Container>
  );
};
