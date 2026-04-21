import { PieChart, pieClasses } from '@mui/x-charts/PieChart';
import { categories } from "../../../utils/categories";


const CATEGORY_COLORS = {
  No_Pobreza: 'rgb(229, 36, 59)',
  Hambre_Cero: 'rgb(221, 166, 58)',
  Buena_Salud: 'rgb(76, 159, 56)',
  Igualdad_Genero: 'rgb(255, 58, 33)',
  Agua_Limpia: 'rgb(38, 189, 226)',
  Energia_Limpia: 'rgb(252, 195, 11)',
  Vida_Submarina: 'rgb(10, 151, 217)',
  Reduccion_Desigualdades: 'rgb(221, 19, 103)',
  Ciudad_Sostenibles: 'rgb(253, 157, 36)',
  Produccion_Responsables: 'rgb(191, 139, 46)',
};

const chartData = Object.values(categories).map((cat) => ({
  label: cat.cssVar,
  value: 1,
  color: CATEGORY_COLORS[cat.cssVar],
}));

const TOTAL = chartData.reduce((sum, item) => sum + item.value, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true, 
};

export default function DonutChart() {
    return (
        <PieChart
        series={[
            {
            data: chartData,
            innerRadius: 40,
            outerRadius: 100,
            arcLabel: getArcLabel,
            arcLabelMinAngle: 10,
            highlightScope: {
                fade: 'global',
                highlight: 'item',
                
            },

            faded: {
                innerRadius: 45,
                additionalRadius: -10,
                color: 'rgba(0,0,0,0.2)',
                
            },
            },
        ]}
        sx={{
            [`& .${pieClasses.arcLabel}`]: {
                fill: 'white',
                fontWeight: 700,
                fontSize: 15,
                pointerEvents: 'none',
                textShadow: '0 1px 2px rgba(0,0,0,0.4)'
                
            },
            }}
        {...settings}
        />
    );
}