import { useCallback, useState, useEffect } from 'react';
import DashboardService from '../services/DashboardService';

export const useDashboard = (year, month) => {
  
  const [data, setData] = useState({
    projectsByCategory: [],
    //applicationsByCategory: [],
    dashboardKpis: {}
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchAllData = useCallback(async () => {
    setLoading(true);
    try {
        const [projects, kpis] = await Promise.all([
          DashboardService.getProjectsByCategory(year, month),
          //DashboardService.getApplicationsByCategory(year, month),
          DashboardService.getDashboardKpis(year, month)
        ]);
                 
        setData({
          projectsByCategory: projects || [],
          //applicationsByCategory: applications || [],
          dashboardKpis: kpis || {}
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