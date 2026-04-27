import { PieChart, pieClasses } from "@mui/x-charts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CATEGORY_COLORS = {
  reduccion_de_las_desigualdades: "rgb(221, 19, 103)",
  igualdad_de_genero: "rgb(255, 58, 33)",
  fin_de_la_pobreza: "rgb(229, 36, 59)",
  produccion_y_consumo_responsables: "rgb(191, 139, 46)",
  agua_limpia_y_saneamiento: "rgb(38, 189, 226)",
  ciudades_y_comunidades_sostenibles: "rgb(253, 157, 36)",
  vida_submarina: "rgb(10, 151, 217)",
  hambre_cero: "rgb(221, 166, 58)",
  salud_y_bienestar: "rgb(76, 159, 56)",
  energia_asequible_y_no_contaminante: "rgb(252, 195, 11)",
};

const PieChartProjects = ({ data }) => {
  const normalizeText = (text) => {
    if (!text) return "";
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^\w]/g, "");
  };

  const formattedData = (data || []).map((item, index) => {
    const colorKey = normalizeText(item.categoryName);
    const assignedColor = CATEGORY_COLORS[colorKey] || "#666";

    return {
      id: index,
      value: item.count,
      label: item.categoryName,
      color: assignedColor,
    };
  });

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <PieChart
        series={[
          {
            data: formattedData,
            valueFormatter: (item) => `${item.value}%`,
            arcLabel: (item) => `${item.value}%`,
            arcLabelMinAngle: 35,
            arcLabelRadius: "60%",
            innerRadius: 40,
            paddingAngle: 2,
            cornerRadius: 4,
          },
        ]}
        width={300}
        height={250}
       
        slotProps={{
          legend: { hidden: true }
        }}
        
        sx={{
          "& .MuiChartsLegend-root": {
            display: "none !important",
          },
        
          [`& .${pieClasses.arcLabel}`]: {
            fontWeight: "bold",
            fill: 'white',
            fontSize: 12,
          },
        }}
      />

    
      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr',
          gap: 1.5, 
          width: '100%', 
          mt: 2,
          px: 2 
        }}
      >
        {formattedData.map((item) => (
          <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box 
              sx={{ 
                width: 12, 
                height: 12, 
                borderRadius: '50%', 
                backgroundColor: item.color,
                flexShrink: 0 
              }} 
            />
            <Typography 
              variant="caption" 
              sx={{ 
                fontSize: '0.75rem', 
                color: '#555',
                lineHeight: 1.2,
                fontWeight: 500
              }}
            >
              {item.label} ({item.value}%)
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PieChartProjects;
