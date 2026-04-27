import { PieChart, pieClasses } from '@mui/x-charts/PieChart';
import { categories } from "../../../utils/categories";


const CATEGORY_COLORS = {
    reduccion_de_las_desigualdades: 'rgb(221, 19, 103)',
    igualdad_de_genero: 'rgb(255, 58, 33)',
    fin_de_la_pobreza: 'rgb(229, 36, 59)',
    produccion_y_consumo_responsables: 'rgb(191, 139, 46)',
    agua_limpia_y_saneamiento: 'rgb(38, 189, 226)',
    ciudades_y_comunidades_sostenibles: 'rgb(253, 157, 36)',
    vida_submarina: 'rgb(10, 151, 217)',
    hambre_cero: 'rgb(221, 166, 58)',
    salud_y_bienestar: 'rgb(76, 159, 56)',
    energia_asequible_y_no_contaminante: 'rgb(252, 195, 11)',
};

// const chartData = Object.values(categories).map((cat) => ({
//    label: cat.cssVar,
//    value: 1,
//    color: CATEGORY_COLORS[cat.cssVar],
// }));

// const TOTAL = chartData.reduce((sum, item) => sum + item.value, 0);

// const getArcLabel = (params) => {
//   const percent = params.value / TOTAL;
//   return `${(percent * 100).toFixed(0)}%`;
// };

// const settings = {
//   margin: { right: 5 },
//   width: 600,
//   height: 300,
// };

const DonutChart = ({data}) => {

    const normalizeText = (text) => {
    if (!text) return '';
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim()
            .replace(/\s+/g, '_') 
            .replace(/[^\w]/g, ''); 
    };

    const formattedData = (data || []).map((item, index) => {
        const colorKey = normalizeText(item.categoryName);
        const assignedColor = CATEGORY_COLORS[colorKey] || '#666';

        return {
            id: index,
            value: item.count,
            label: item.categoryName,
            color: assignedColor,
        };
    });

    const finalPalette = formattedData.map(d => d.color);
    
    return (
        <PieChart
        colors={finalPalette}
        series={[
        {
          data: formattedData,
          innerRadius: 70,
          outerRadius: 100,
          paddingAngle: 3,
          cornerRadius: 4,
          cx: 150,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },

        // faded: {
        //         innerRadius: 45,
        //         additionalRadius: -10,
        //         color: 'rgba(0,0,0,0.2)',     
        // }
    ]}  
    width={600}
    height={300}
    margin={{ right: 200 }}
    slotProps={{
        legend: {
          direction: 'column',
          position: { vertical: 'middle', horizontal: 'right' },
          itemMarkWidth: 12,
          itemMarkHeight: 12,
          markGap: 8,
          itemGap: 12,
          labelStyle: {
            fontSize: 13,
            fontWeight: 500,
            fill: '#333',
          },
        },
      }}
        // series={[
        //     {
        //     data: {data},
        //     innerRadius: 40,
        //     outerRadius: 100,
        //     arcLabel: getArcLabel,
        //     arcLabelMinAngle: 10,
        //     highlightScope: {
        //         fade: 'global',
        //         highlight: 'item',
                
        //     },

        //     faded: {
        //         innerRadius: 45,
        //         additionalRadius: -10,
        //         color: 'rgba(0,0,0,0.2)',
                
        //     },
        //     },
        // ]}
    
        // sx={{
        //     [`& .${pieClasses.arcLabel}`]: {
        //         fill: 'white',
        //         fontWeight: 700,
        //         fontSize: 15,
        //         pointerEvents: 'none',
        //         textShadow: '0 1px 2px rgba(0,0,0,0.4)'
                
        //     },
        //     }}
        
        />
    );
}

export default DonutChart;