import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Typography, Paper } from '@mui/material';

const MonthlEvolutionLineChart = ({ data, year }) => {
  
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

  const chartData = data?.length > 0 ? data.map(d => d.hours) : new Array(12).fill(0);

  return (
    <Paper sx={{ p: 3, borderRadius: 4, boxShadow: '0px 4px 20px rgba(0,0,0,0.05)' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Evolución mensual {year}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Horas dedicadas y voluntarios únicos por mes
          </Typography>
        </Box>
        
        <Box sx={{ 
          bgcolor: '#fff0f0', 
          color: '#ce1d2c', 
          px: 1.5, py: 0.5, 
          borderRadius: 2, 
          fontSize: '0.8rem', 
          fontWeight: 'bold' 
        }}>
          {year}
        </Box>
      </Box>

      <Box sx={{ width: '100%', height: 300 }}>
        <LineChart
          xAxis={[{ 
            data: months, 
            scaleType: 'point',
            tickLabelStyle: { fontSize: 12, fill: '#666' }
          }]}
          yAxis={[{
            min: 0,
            max: 800,
            tickLabelStyle: { fontSize: 12, fill: '#666' }
          }]}
          series={[
            {
              data: chartData,
              area: true,
              color: '#ce1d2c',
              showMark: false,
              curve: "catmullRom",
              valueFormatter: (value) => `${value} horas`,
            },
          ]}
          
          sx={{
            '.MuiLineElement-root': {
              strokeWidth: 3,
            },
            '.MuiAreaElement-root': {
              fill: 'url(#gradient-red)',
              fillOpacity: 0.2,
            },
            '& .MuiChartsAxis-line': { display: 'none' },
            '& .MuiChartsAxis-tick': { display: 'none' },
          }}
          
          children={
            <defs>
              <linearGradient id="gradient-red" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ce1d2c" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ce1d2c" stopOpacity={0}/>
              </linearGradient>
            </defs>
          }
          margin={{ left: 40, right: 20, top: 20, bottom: 40 }}
        />
      </Box>
    </Paper>
  );
};

export default MonthlEvolutionLineChart;