import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography, Paper } from '@mui/material';

const GnoContributionBarChart = ({ data }) => {
  
  const COLORS = {
    hours: '#ce1d2c',
    volunteers: '#1a1a1a',
  };

  
  const chartDataset = data || [];

  return (
    <Paper sx={{ p: 3, borderRadius: 4, boxShadow: '0px 4px 20px rgba(0,0,0,0.05)', bgcolor: 'white' }}>
      
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Contribución por ONG
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Horas y voluntarios movilizados por organización
        </Typography>
      </Box>

      <Box sx={{ width: '100%', height: 500 }}>
        <BarChart
          skipAnimation={true}
          dataset={chartDataset}
          layout="horizontal" 
          yAxis={[
            { 
              scaleType: 'band', 
              dataKey: 'gnoName',
              width: 200,
              tickLabelStyle: { 
                fontSize: 12, 
                fill: '#444',
              },
            }
          ]}
          xAxis={[
            { 
              tickLabelStyle: { fontSize: 12, fill: '#666' },
            }
          ]}
          series={[
            { 
              dataKey: 'hours', 
              label: 'Horas', 
              color: COLORS.hours,
              valueFormatter: (v) => `${v} horas` 
            },
            { 
              dataKey: 'volunteers', 
              label: 'Voluntarios', 
              color: COLORS.volunteers,
              valueFormatter: (v) => `${v} personas`
            },
          ]}
          
          slotProps={{
            legend: {
              direction: 'row',
              position: { vertical: 'bottom', horizontal: 'center' },
              padding: 0,
              //labelStyle: { fontSize: 13 },
            },
          }}
         
          sx={{
            '& .MuiChartsAxis-line': { display: 'none' },
            '& .MuiChartsAxis-tick': { display: 'none' }, 
            '& .MuiChartsGrid-line': { strokeDasharray: '5 5', stroke: '#efefef' },
          }}
          grid={{ vertical: true }} 
          margin={{ left: 20, right: 20, top: 20, bottom: 60 }}
        />
      </Box>
    </Paper>
  );
};

export default GnoContributionBarChart;