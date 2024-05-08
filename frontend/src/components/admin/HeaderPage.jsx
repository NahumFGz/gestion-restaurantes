export function HeaderPage ({ title, btnTitle, btnClick }) {
  return (
    <div className='flex justify-between p-2'>
      <h2
        className='text-xl font-bold text-gray-800'
      >
        {title}
      </h2>
      <div>
        {
            btnTitle && (
              <button
                className='bg-green-500 text-white px-4 py-2 rounded-md'
                onClick={btnClick}
              >{btnTitle}
              </button>
            )
        }
      </div>
    </div>
  )
}
