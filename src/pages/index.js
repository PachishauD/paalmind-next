import Head from "next/head";
import { subDays, subHours } from "date-fns";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewBudget } from "src/sections/overview/overview-budget";
import { OverviewUsersBets } from "src/sections/overview/overview-latest-orders";
import { OverviewLatestProducts } from "src/sections/overview/overview-latest-products";
import { OverviewSales } from "src/sections/overview/overview-sales";
import { OverviewTasksProgress } from "src/sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "src/sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "src/sections/overview/overview-total-profit";
import { OverviewTraffic } from "src/sections/overview/overview-traffic";
import React, { useEffect, useState } from "react";
import axios from "axios";

const now = new Date();

const Page = () => {
  const [overview, setOverview] = useState({ value: 0 });
  const [customers, setCustomers] = useState({ value: 0 });
  const [users, setUsers] = useState({});
  const [transactions, setTransactios] = useState({});
  const [usersBets, setUsersBets] = useState([]);
  const [wallets, setWallets] = useState([]);
  useEffect(() => {
    axios.get('https:///6727-34-135-72-108.ngrok.io/customers')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log('error', error);
      });
    axios.get('https:///6727-34-135-72-108.ngrok.io/get_wallets')
      .then(response => {
        setWallets(response.data);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, []);
  console.log('users', users);
  const numUsers = users.length;

  return (
    <>
      <Head>
        <title>PaalBetBot Admin Dashboard</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewBudget
                difference={12}
                positive
                sx={{ height: "100%" }}
                value={overview.value}
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTotalCustomers
                difference={16}
                positive={false}
                sx={{ height: "100%" }}
                value={numUsers}
              />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewTotalProfit sx={{ height: "100%" }} value="$0k" />
            </Grid>
            <Grid xs={12} lg={8}>
              <OverviewSales
                chartSeries={[
                  {
                    name: "This year",
                    data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                  },
                  {
                    name: "Last year",
                    data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                  },
                ]}
                sx={{ height: "100%" }}
              />
            </Grid>
            <Grid xs={12} md={12} lg={8}>
              <OverviewUsersBets
                wallets={wallets}
                sx={{ height: "100%" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
