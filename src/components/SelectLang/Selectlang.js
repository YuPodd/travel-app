import { useContext } from 'react'
import Context from '../Context'

const SelectLang = () => {
  const value = useContext(Context);

  const onChangeLang = (e) => {
    value.setLang(e.target.value)
  }

  return (
    <div className='form-group'>
      <select className="custom-select select-lang" value={value.lang} onChange={onChangeLang}>
      <option value="en">EN</option>
      <option value="ru">RU</option>
      <option value="de">DE</option>
      <option value="fr">FR</option>
    </select>
    </div>
  )
}

export default SelectLang;
