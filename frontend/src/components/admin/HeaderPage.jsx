export function HeaderPage ({ title, btnTitle, btnClick }) {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {
            btnTitle && (
              <button onClick={btnClick}>{btnTitle}</button>
            )
        }
      </div>
    </div>
  )
}
