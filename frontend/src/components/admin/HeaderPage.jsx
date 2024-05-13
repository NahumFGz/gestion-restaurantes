export function HeaderPage ({ title, btnTitle, btnClick, btnTitleTwo, btnClickTwo }) {
  return (
    <div className='flex justify-between p-2 mb-4'>
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
        {
            btnTitleTwo && (
              <button
                className='ml-2 bg-red-500 text-white px-4 py-2 rounded-md'
                onClick={btnClickTwo}
              >{btnTitleTwo}
              </button>
            )
        }
      </div>
    </div>
  )
}
