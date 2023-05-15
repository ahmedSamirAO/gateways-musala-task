import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

import {
  Card as MuiCard,
  Paper as MuiPaper,
  Table,
  TableBody,
  TableCell as MuiTableCell,
  TableHead,
  TableRow as MuiTableRow,
  IconButton,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { Eye } from "react-feather";

import { GetGateways } from "../../redux/actions";

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

const GatewaysTable = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const gateways = useSelector(({ gateways }) => gateways.gateways);

  const openGatewayDetailsPage = (id) => {
    history.push(`/gateway/${id}`);
  };

  useEffect(() => {
    if (!gateways.length) {
      dispatch(GetGateways());
    }
  }, [dispatch, gateways]);

  return (
    <Card mb={6} className="table-container">
      <Paper className="table-paper">
        <TableWrapper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Serial Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>IPv4</TableCell>
                <TableCell>Devices Number</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gateways.map((row) => (
                <TableRow key={row.serialNumber}>
                  <TableCell className="data-text" scope="row">
                    {row.serialNumber}
                  </TableCell>
                  <TableCell className="data-text">{row.name}</TableCell>
                  <TableCell className="data-text">{row.IPv4}</TableCell>
                  <TableCell className="data-text">
                    {row.devices.length}
                  </TableCell>
                  <TableCell
                    className="cursor-pointer"
                    style={{ textAlign: "center" }}
                  >
                    <IconButton
                      onClick={() => {
                        openGatewayDetailsPage(row.serialNumber);
                      }}
                      variant="contained"
                    >
                      <Eye />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
        {/*
        // should add pagination when use the API
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={2}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        */}
      </Paper>
    </Card>
  );
};

export default GatewaysTable;
