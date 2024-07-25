import { FiPlayCircle } from 'react-icons/fi'
export function AreaCtas() {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center gap-3 mb-16">
      <button className="w-full xl:w-auto flex items-center justify-center gap-3 py-4 px-7 border border-gray-300 rounded-lg text-lg font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
        <FiPlayCircle size={24} className='text-gray-700'/>
        Demo
      </button>
      <button className='w-full xl:w-auto py-4 px-7 rounded-lg text-lg font-semibold bg-brand-600 text-white hover:bg-brand-700 transition-colors'>Sign up</button>
    </div>
  )
}