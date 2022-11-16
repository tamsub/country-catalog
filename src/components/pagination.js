import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ numberOfPages, onPageChanged }) {
  return (
    <Pagination
      count={numberOfPages}
      color="primary"
      onChange={onPageChanged}
    />
  );
}
