interface ItemNavProps {
  title: string
  itemsMenu: ItemMenuProps[]
}

interface ItemMenuProps {
  url: string
  name: string
}

export function ItemNav({ itemsMenu, title } : ItemNavProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-gray-500 mb-4">{title}</h4>
      <ul className="space-y-3">
        {
          itemsMenu.map(({url, name}, index) => (
            <li key={index}>
              <a href={url} className="text-gray-600 font-semibold hover:opacity-50 transition-opacity">
                {name}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}