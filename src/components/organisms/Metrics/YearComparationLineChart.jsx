import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography, Paper } from '@mui/material';

const YearlyComparisonChart = ({ data }) => {
  
  const COLORS = {
    hours: '#ce1d2c',  
    volunteers: '#1a1a1a',
    projects: '#f7a82b',  
  };

  const chartDataset = data || [];

  return (
    <Paper sx={{ p: 3, borderRadius: 4, boxShadow: '0px 4px 20px rgba(0,0,0,0.05)', bgcolor: 'white' }}>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Comparativa interanual
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Horas, voluntarios y proyectos por año
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: '100%', height: 400 }}>
        <BarChart
          dataset={chartDataset}
          xAxis={[
            { 
              scaleType: 'band', 
              dataKey: 'year',
              tickLabelStyle: { fontSize: 12, fill: '#666' }
            }
          ]}
          series={[
            { dataKey: 'hours', label: 'Horas', color: COLORS.hours, valueFormatter: (v) => `${v}h` },
            { dataKey: 'volunteers', label: 'Voluntarios', color: COLORS.volunteers },
            { dataKey: 'projects', label: 'Proyectos', color: COLORS.projects },
          ]}
          
          slotProps={{
            legend: {
              direction: 'row',
              position: { vertical: 'top', horizontal: 'right' },
              padding: 0,
              // labelStyle: { fontSize: 12 },
              // itemGap: 15,
            },
          }}
          
          sx={{
            '& .MuiChartsAxis-line': { display: 'none' }, // Quita la línea del eje
            '& .MuiChartsAxis-tick': { display: 'none' }, // Quita los ticks
            '& .MuiChartsGrid-line': { strokeDasharray: '5 5', stroke: '#ebebeb' }, // Líneas punteadas
          }}
          grid={{ horizontal: true }} 
          margin={{ top: 50, bottom: 30, left: 40, right: 10 }}
        />
      </Box>
    </Paper>
  );
};

export default YearlyComparisonChart;