import style from '../AdminMetrics/AdminMetrics.module.css'
import { useState, useEffect, useMemo, useCallback } from 'react'
import { Printer, FileDown } from 'lucide-react'
import {
  Clock,
  Users2,
  HeartHandshake,
  Sparkles,
  Heart,
  UserPlus,
  Hourglass,
} from 'lucide-react'
import { useDashboard } from '../../../../hooks/useDashboard'
import Title from '../../../atoms/Title/Title'
import Subtitle from '../../../atoms/Subtitle/Subtitle'
import YearFilter from '../../../atoms/YearFilter/YearFilter'
import MonthFilter from '../../../atoms/MonthFilter/MonthFilter'
import ModalAlert from '../../../atoms/ModalAlerts/ModalAlert'
import KpiCard from '../../../atoms/KpiCard/KpiCard'
import ProjectsPieChart from '../../../organisms/Metrics/ProjectsPieChart'
import ParticipationPieChart from '../../../organisms/Metrics/ParticipationPieChart'
import YearComparationLineChart from '../../../organisms/Metrics/YearComparationLineChart'
import MonthEvolutionLineChart from '../../../organisms/Metrics/MonthEvolutionLineChart'
import GnoContributionBarChart from '../../../organisms/Metrics/GnoContributionBarChart'

const AdminMetrics = () => {

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [showNoDataModal, setShowNoDataModal] = useState(false);

  const { data, loading, error } = useDashboard(
    selectedYear ? Number(selectedYear) : null,
    selectedMonth ? Number(selectedMonth) : null
  );

  const { 
    hours = {}, 
    volunteers = {}, 
    projects = {}, 
    topCategory = {}, 
    conversion = {}, 
    waitlist = {} 
  } = data?.dashboardKpis || {};

  const { totalHours = 0, yoyTrend = "0% YoY" } = hours;
  const { totalVolunteers = 0, workforcePercentage = "0%" } = volunteers;
  const { total = 0, collaboratingGnos = "0 GNOs" } = projects;
  const { categoryName = "Sin categoría" } = topCategory;
  const { likes = 0, enrolled = 0, conversionRate = "0%"} = conversion;
  const { totalWaitlist = 0, unfilledDemand = 0} = waitlist;

  const handleResetFilters = useCallback(() => {
    if (selectedMonth !== '') {
      setSelectedMonth('');
    } else {
      setSelectedYear('');
    }
    setShowNoDataModal(false);
  }, [selectedMonth]);

  useEffect(() => {
    const hasActiveFilters = selectedYear !== '' || selectedMonth !== '';
    
    if (!loading && hasActiveFilters && data) {
      const projects = data.projectsByCategory || [];
      const participation = data.participationFunnel || [];
      const kpis = data.dashboardKpis || [];
  
      if (projects.length === 0 ) {
        setShowNoDataModal(true);
      } else {
        setShowNoDataModal(false);
      }
    }
  }, [data, loading, selectedYear, selectedMonth]);

  const hasProjectsData = data?.projectsByCategory?.length > 0;
  const hasAppsData = data?.applicationsByCategory?.length > 0;

  const handleYearChange = (e) => {setSelectedYear(e.target.value)
                                    setSelectedMonth('');}
  const handleMonthChange = (e) => setSelectedMonth(e.target.value);

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const maxMonthAllowed = useMemo(() => {
    if (parseInt(selectedYear) === currentYear) {
      return currentMonth;
    }
    return 12;
  }, [selectedYear, currentYear, currentMonth]);

  return (
    <>
    <main className={style.metricsContainer}>
      {showNoDataModal && (
        <ModalAlert 
          text="No existen datos registrados para el mes seleccionado."
          onClose={handleResetFilters}
          actions={[{ label: 'Entendido', onClick: handleResetFilters }]}
        />
      )}
      <Title title="Dashboard"/>
      <Subtitle subtitle="Resumen global del programa del voluntariado"/>

      <section className={style.controlsContainer}>
        <div className={style.filtersGroup}>
          <YearFilter value={selectedYear} onChange={handleYearChange}/>
          <MonthFilter value={selectedMonth} onChange={handleMonthChange} maxMonth={maxMonthAllowed} disabled={!selectedYear}/>
        </div>

        <div className={style.actionsGroup}>
          <button className={style.actionButton} onClick={() => window.print()}>
            <Printer/>
            <span className={style.btnText}>Imprimir</span>
          </button>
          
          <button className={`${style.actionButton} ${style.pdfButton}`} onClick={() => window.print()}>
            <FileDown />
            <span className={style.btnText}>Descargar</span>
          </button>
        </div>
      </section>

      <section className={style.kpiContainer}>
        <KpiCard 
          label="Horas de Voluntariado"
          value={`${totalHours}h`}
          icon={<Clock/>} 
          text={yoyTrend}/>
        <KpiCard 
          label="Voluntarios Activos"
          value={totalVolunteers}
          icon={<Users2/>} 
          text={workforcePercentage}/>
        <KpiCard
          label="Categoría con mayor participación"
          value={categoryName}
          icon={<Sparkles/>} 
          text={''} />
      </section>

      <section className={style.kpiContainer}>
        <KpiCard 
          label="Proyectos en curso"
          value={total}
          icon={<HeartHandshake/>} 
          text={collaboratingGnos}/>
        <KpiCard 
          label="Likes Vs Inscripciones"
          value={`${likes} / ${enrolled}`}
          icon={<Heart/>} 
          text={conversionRate}/>
        <KpiCard
          label="Solicitudes en Lista de Espera"
          value={totalWaitlist}
          icon={<Hourglass/>} 
          text={unfilledDemand} />
      </section>
      
      <section className={style.chartsDonuts}>
        <div className={style.chartContainer}>
          <h3 className={style.titleDonut}>Proyectos por Categorías</h3>
          <ProjectsPieChart data={data.projectsByCategory}/>
        </div>
        
        <div className={style.chartContainer}>
          <h3 className={style.titleDonut}>Interés y Participación</h3>
          <ParticipationPieChart data={data.participationFunnel}/>
        </div>
      </section>
      
      <section className={style.chartContainer}>
        <MonthEvolutionLineChart data={data.mothEvolution}/>
      </section>

      <section className={style.chartContainer}>
        <YearComparationLineChart data={data.yearComparation}/>
      </section>

      <section className={style.chartContainer}>
        <GnoContributionBarChart data={data.gnoContribution}/>
      </section>
    
    </main>
  </>
  )
}

export default AdminMetrics