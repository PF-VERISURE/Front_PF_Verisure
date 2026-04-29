import style from './MonthFilter.module.css'

const months = [
  { value: 1, label: 'Enero' }, { value: 2, label: 'Febrero' },
  { value: 3, label: 'Marzo' }, { value: 4, label: 'Abril' },
  { value: 5, label: 'Mayo' }, { value: 6, label: 'Junio' },
  { value: 7, label: 'Julio' }, { value: 8, label: 'Agosto' },
  { value: 9, label: 'Septiembre' }, { value: 10, label: 'Octubre' },
  { value: 11, label: 'Noviembre' }, { value: 12, label: 'Diciembre' }
];

const MonthFilter = ({value, onChange, disabled, maxmonth}) => {

  return (
    <>
    <div className="filter-group">
        <label htmlFor="month-select" className={style.labelName}>Mes:</label>
        <select 
            id="month-select" 
            value={value} 
            onChange={onChange}
            className={style.dashboardSelect}
            disabled={disabled}
            maxmonth={maxmonth}
            >
            <option value="">Selecciona...</option>
              {months.map(month => (
                <option key={month.value} value={month.value}>{month.label}</option>
              ))}
        </select>
    </div>
    </>
  )
}

export default MonthFilter