import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';
import { useEffect, useState } from 'react';

const now = new Date();
const overview = {
  value: ""
}
const customers = {
  value: 0
}

// const [overview, setOverview] = useState({
//   value: 0
// });

// useEffect(() => {
//   fetch("/users").then((res) => 
//     res.json().then((data) => {
//       setOverview({
//         value: data.users
//       });
//     })
//   );
// }, [])

const Page = () => (
  <>
    <Head>
      <title>
        PaalBetBot Admin Dashboard
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: '100%' }}
              value={overview.value}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="1.6k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalProfit
              sx={{ height: '100%' }}
              value="$0k"
            />
          </Grid>
          <Grid
            xs={12}
            lg={8}
          >
            <OverviewSales
              chartSeries={[
                {
                  name: 'This year',
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                },
                {
                  name: 'Last year',
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={8}
          >
            <OverviewLatestOrders
              orders={[
                {
                  id: 'f69f88012978187a6c12897f',
                  ref: '0xf69f...',
                  amount: 30.5,
                  customer: {
                    name: '0xDd51ea238d361e19DD22fcc81E96B70A6d7B2D2C'
                  },
                  createdAt: 1555016400000,
                  status: 'pending'
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  ref: '0xheaa...',
                  amount: 25.1,
                  customer: {
                    name: '0xpbBeBd1C3BfCd0f4AC061aFfF577916D5aDAe017'
                  },
                  createdAt: 1555016400000,
                  status: 'Won'
                },
                {
                  id: '01a5230c811bd04996ce7c13',
                  ref: '0xd1a5...',
                  amount: 10.99,
                  customer: {
                    name: '0xe36e19DA6d7B2D2CD22fcc81E96B70Dd51ea238d'
                  },
                  createdAt: 1554930000000,
                  status: 'Loss'
                },
                {
                  id: '1f4e1bd0a87cea23cdb83d18',
                  ref: '0xbd0a...',
                  amount: 96.43,
                  customer: {
                    name: '0xA1c150189b481ee70adCdf271dDE5734DC7C37C6'
                  },
                  createdAt: 1554757200000,
                  status: 'pending'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: '0xf239...',
                  amount: 32.54,
                  customer: {
                    name: '0xD1c1501ee70adCdf271dDE5734DC7C37C6189b48'
                  },
                  createdAt: 1554670800000,
                  status: 'Won'
                },
                {
                  id: 'ffc83c1560ec2f66a1c05596',
                  ref: '0xffc8...',
                  amount: 16.76,
                  customer: {
                    name: '0xD22fcc81E96B70Dd51ea238d361e19DA6d7B2D2C'
                  },
                  createdAt: 1554670800000,
                  status: 'Won'
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
 
export default Page;
