import { useContext } from 'react'
import Context from '../Context'

const SelectLang = () => {
  const value = useContext(Context);

  const onChangeLang = (e) => {
    value.setLang(e.target.value)
  }

  return (
    <select value={value.lang} onChange={onChangeLang}>
      <option value="en">EN</option>
      <option value="ru">RU</option>
      <option value="be">BE</option>
    </select>
  )
}

export default SelectLang;
