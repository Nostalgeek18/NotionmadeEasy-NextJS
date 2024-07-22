import Image from "next/image";
import { useTranslations } from "next-intl";
import Homepage from "@/components/Homepage";

export default function Home() {

  const t = useTranslations((''));
  const title = t('pages.homepage.title');
  return (
    <>
    <Homepage />
    </>
  )
}
