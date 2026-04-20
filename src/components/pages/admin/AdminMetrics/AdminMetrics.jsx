import React from 'react'
import DonutChart from '../../../metrics/Atoms/DonutChart/DonutChart'
import ChartFrame from '../../../metrics/Atoms/ChartFrame/ChartFrame'
import Title from '../../../atoms/Title/Title'

const AdminMetrics = () => {
  console.log("AdminMetricas rendered")
  return (
    <main>
      <Title title="Metricas"/>
      <ChartFrame title="Inscripciones per categorias">
        <DonutChart/>
      </ChartFrame>

    </main>
  )
}

export default AdminMetrics