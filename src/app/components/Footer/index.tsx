import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemNav } from "./item-nav";
import { menuCases, menuCompanie, menuLegal, menuProducts, menuResources, menuSocial } from "@/app/utils/data";

export function Footer() {
  return (
    <footer className="py-12 xl:pt-16">
      <GridContainer>
        <div className="grid xl:flex grid-cols-2 gap-8 xl:gap-0 items-start justify-between pb-12 xl:pb-16">
          <ItemNav
            title="Product"
            itemsMenu={menuProducts}
          />
          <ItemNav
            title="Company"
            itemsMenu={menuCompanie}
          />
          <ItemNav
            title="Resources"
            itemsMenu={menuResources}
          />
          <ItemNav
            title="Use cases"
            itemsMenu={menuCases}
          />
          <ItemNav
            title="Social"
            itemsMenu={menuSocial}
          />
          <ItemNav
            title="Legal"
            itemsMenu={menuLegal}
          />
        </div>
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 xl:gap-0 border-t border-gray-200 pt-8">
          <Image
            src="/logo.svg"
            alt="Logo Untitled UI"
            width={142}
            height={32}
          />
          <p className="text-gray-500">© 2077 Untitled UI. All rights reserved.</p>
        </div>
      </GridContainer>
    </footer>
  )
}