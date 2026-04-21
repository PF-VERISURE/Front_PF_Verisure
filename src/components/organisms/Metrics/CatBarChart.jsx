import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';
import { categories } from "../../../utils/categories";

const xLabels = Object.values(categories).map(cat => cat.cssVar);
const likesData = Object.values(categories).map(() => 50);
const applicationsData = Object.values(categories).map(() => 42);

export default function CatBarChart() {
  return (
    <Box sx={{ width: '100%', height: 300 }}>
      <BarChart
        xAxis={[
          {
            data: xLabels,
            scaleType: 'band',
            tickLabelStyle: {
              fontSize: 11,
              fontWeight: 2,
            },
          },
        ]}
        series={[
          {
            data: likesData,
            label: 'Likes',
          },
          {
            data: applicationsData,
            label: 'Applications',
          },
        ]}
      />
    </Box>
  );
}