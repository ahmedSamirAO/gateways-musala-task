import React from "react";
import styled from "styled-components/macro";

import {
  Card as MuiCard,
  Paper as MuiPaper,
  Table,
  TableBody,
  TableCell as MuiTableCell,
  TableHead,
  TableRow as MuiTableRow,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);
const Paper = styled(MuiPaper)(spacing);

const TableWrapper = styled.div`
  overflow-y: auto;
  max-width: calc(100vw - ${(props) => props.theme.spacing(12)}px);
`;

const TableRow = styled(MuiTableRow)`
  background-color: ${(props) => props.theme.palette.grey.inputBg};
  font-size: 16px;
  font-weight: bold;
  padding-top: 4px;
`;

const TableCell = styled(MuiTableCell)`
  &.data-text {
    font-size: 14px;
    font-weight: bold;
  }
`;

const GatewayDevicesTable = ({ devices = [] }) => {
  return (
    <Card mb={6} className="table-container">
      <Paper className="table-paper">
        <TableWrapper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>UID</TableCell>
                <TableCell>Vendor</TableCell>
                <TableCell>Creation Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {devices.map((row) => (
                <TableRow key={row.uid}>
                  <TableCell className="data-text" component="th" scope="row">
                    {row.uid}
                  </TableCell>
                  <TableCell className="data-text" component="th" scope="row">
                    {row.vendor}
                  </TableCell>
                  <TableCell className="data-text">{row.created_at}</TableCell>
                  <TableCell className="data-text">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      </Paper>
    </Card>
  );
};

export default GatewayDevicesTable;
