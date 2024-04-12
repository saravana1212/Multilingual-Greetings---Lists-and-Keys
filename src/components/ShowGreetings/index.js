import './index.css'

const ShowGreetings = props => {
  const {languageDetails, updateButton, ActiveTab} = props

  const {id, imageUrl, buttonText, imageAltText} = languageDetails

  const activeBtn = ActiveTab ? 'active-btn' : 'button'

  const sendActiveId = () => {
    updateButton(id, imageAltText, imageUrl)
  }

  return (
    <li>
      <button
        type="button"
        onClick={sendActiveId}
        className={`button ${activeBtn}`}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default ShowGreetings
