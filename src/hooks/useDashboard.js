import { useCallback, useState, useEffect } from 'react';
import DashboardService from '../services/DashboardService';

export const useDashboard = (year, month) => {
  
  const [data, setData] = useState({
    dashboardKpis: {},
    projectsByCategory: [],
    participationFunnel: [],
    mothEvolution: [],
    yearComparation:[],
    gnoContribution: []
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchAllData = useCallback(async () => {
    setLoading(true);
    try {
        const [kpis, projects, participation, evolution, comparation, contribution] = await Promise.all([
          DashboardService.getDashboardKpis(year, month),
          DashboardService.getProjectsByCategory(year, month),
          DashboardService.getParticipationFunnel(year, month),
          DashboardService.getMonthlyEvolution(year),
          DashboardService.getYearlyComparison(year),
          DashboardService.getGnoContributions(year)
        ]);
            
        setData({
          dashboardKpis: kpis || {},
          projectsByCategory: projects || [],
          participationFunnel: participation || [],
          mothEvolution: evolution || [],
          yearComparation: comparation || [],
          gnoContribution: contribution || []
        });
        setError(null);
      
      } catch (error) {
        setError(error.message || 'Error al cargar los datos del dashboard');

      } finally {
        setLoading(false);
      }
  }, [year, month]);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);
  
  return { data, loading, error };
};