import { PieChart, pieClasses } from '@mui/x-charts';
import { Box, Typography, Stack } from '@mui/material';

const ParticipationPieChart = ({ data }) => {

    const formattedData = data ? [
        { id: 0, value: data.enrolled || 0, label: 'Inscritos', color: 'red' },
        { id: 1, value: data.waitlist || 0, label: 'En lista de espera', color: 'brown' },
        { id: 2, value: data.likes || 0, label: 'Interesados', color: 'orange' }
    ] : [];

    if (formattedData.length === 0 || formattedData.every(item => item.value === 0)) {
        return <Box sx={{ p: 2, textAlign: 'center' }}>Cargando datos de participación...</Box>;
    }

    return (
        <>
        <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        width: '100%',
        mb: 2,
        '& .MuiChartsLegend-root': { display: 'none' } 
      }}>
            
            <PieChart
                skipAnimation={true}
                series={[
                    {
                        innerRadius: 60, 
                        outerRadius: 120, 
                        paddingAngle: 2,
                        cornerRadius: 5,
                        data: formattedData,
                        valueFormatter: (item) => `${item.value} personas`,
                    }
                ]}
                width={300}
                height={250}
                slotProps={{ legend: { hidden: true } }}
             
            />
        </Box>

        <Stack spacing={3} 
                sx={{ 
                    px: 1,
                    width: '100%', 
                    maxWidth: '280px',
                    mt: 2,
                    mx: 'auto' }}>
            {formattedData.map((item) => (
            <Box 
                key={item.id} 
                sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between'
                }}
                >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box 
                        sx={{ 
                        width: 14, 
                        height: 14, 
                        borderRadius: '50%', 
                        bgcolor: item.color 
                        }} 
                    />
                        <Typography sx={{ color: '#555', fontSize: '0.95rem' }}>
                            {item.label}
                        </Typography>
                </Box>
                
                <Typography sx={{ fontWeight: 'semi-bold', fontSize: '1rem' }}>
                    {item.value}
                </Typography>
            </Box>
            ))}
        </Stack>
        </>
    );
};

export default ParticipationPieChart;