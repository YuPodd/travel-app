

const SelectLang = ({langApp, changeLang}) => {

  const onChangeLang = (e) => {
    changeLang(e.target.value)
  }
  
  return (
    <select value={langApp} onChange={onChangeLang}>
      <option value="en">EN</option>
      <option value="ru">RU</option>
      <option value="be">BE</option>
    </select>
  )
}

export default SelectLang;
