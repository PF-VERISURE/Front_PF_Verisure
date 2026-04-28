import style from "./YearFilter.module.css"
//import { CalendarRange } from "lucide-react"

const START_YEAR = 2021;
const currentYear = new Date().getFullYear();
const years = Array.from(
    { length: currentYear - START_YEAR + 1 }, 
    (_, index) => START_YEAR + index
    );

const YearFilter = ({value, onChange}) => {

  return (
    <>
        <div>
            <label htmlFor="year-select" className={style.labelName}>Año:</label>
            <select 
              id="year-select" 
              value={value} 
              onChange={onChange}
              className={style.dashboardSelect}
            >
              <option value="">Todos</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
        </div>
    </>

  )
}

export default YearFilter