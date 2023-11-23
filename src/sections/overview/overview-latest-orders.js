import { format } from "date-fns";
import PropTypes from "prop-types";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { SeverityPill } from "src/components/severity-pill";
import { useEffect } from "react";

const statusMap = {
  pending: "warning",
  Won: "success",
  Loss: "error",
};

export const OverviewUsersBets = (props) => {
  const { wallets = [], sx } = props;
  return (
    <Card sx={sx}>
      <CardHeader title="Registered Wallets" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Wallet Name</TableCell>
                <TableCell>Wallet Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wallets.map((wallet, i) => {
                return(
                  <TableRow hover key={i + 1}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{wallet[0]}</TableCell>
                  <TableCell>{wallet[2]}</TableCell>
                  <TableCell>{wallet[3]}</TableCell>
                </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

OverviewUsersBets.prototype = {
  usersBets: PropTypes.array,
  sx: PropTypes.object,
};
