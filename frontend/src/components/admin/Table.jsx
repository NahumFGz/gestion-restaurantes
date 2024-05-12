import icon from '../../assets/table.svg'

export function Table ({ table }) {
  return (
    <div className='flex justify-center items-center'>
      <div>
        <img
          className='w-56 h-56'
          src={icon} alt='My Icon'
        />
        <h3
          className='text-center text-sm'
        >{`Mesa ${table.number}`}
        </h3>
      </div>
    </div>
  )
}
