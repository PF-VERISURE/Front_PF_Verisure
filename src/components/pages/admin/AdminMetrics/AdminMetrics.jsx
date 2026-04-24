import React from 'react'
import Title from '../../../atoms/Title/Title'
import ChartFrame from '../../../atoms/ChartFrame/ChartFrame'
import DonutChart from '../../../organisms/Metrics/DonutChart'
import CatBarChart from '../../../organisms/Metrics/CatBarChart'

const AdminMetrics = () => {
  console.log("AdminMetricas rendered")
  return (
    <main>
      <Title title="Metricas"/>

      <ChartFrame title="Inscription per categoria">
        <DonutChart/>
      </ChartFrame>

      <ChartFrame>
        <CatBarChart title="Inscription per categoria"/>
      </ChartFrame>

    </main>
  )
}

export default AdminMetrics