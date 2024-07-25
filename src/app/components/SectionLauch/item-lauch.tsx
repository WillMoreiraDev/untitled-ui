interface ItemLauchProps {
  number: string
  title: string
  text: string
}

export function ItemLauch({ number, title, text } : ItemLauchProps) {
  return (
    <div className="text-center">
      <h3 className="text-5xl xl:text-6xl font-semibold text-brand-600">{number}</h3>
      <h4 className="text-lg font-medium text-gray-900 mt-3 mb-2">{title}</h4>
      <p>{text}</p>
    </div>
  )
}